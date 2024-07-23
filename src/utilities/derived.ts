import { State, Derived } from "../types";
import { buildMap } from "../utilities/map";
import { remainderFor } from "../utilities/math";
import { DO, SOLFEGE_NAMES, SOLFEGE_NAMES_IN_BEADGCF_ORDER } from "../constants/solfege";
import {
  STILL, EARLY, LATE, ADVANCE_INDIVIDUAL, RETREAT_INDIVIDUAL, ADVANCE_ALL, RETREAT_ALL
} from "../constants/location"

export function derivedFromState(
  state: State
): Derived {
  if (state.motion === STILL) {
    return derivedFromStateWhenStill(state);
  } else {
    return derivedFromStateWhenAnimating(state);
  }
}

function derivedFromStateWhenStill(
  { motion, modeIndex }: State
): Derived {
  const canAdvanceSolfegeName = getCanAdvanceSolfegeName(modeIndex);
  const canRetreatSolfegeName = getCanRetreatSolfegeName(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, ((solfegeName: string) => ({
    location: getStillLocation(solfegeName, modeIndex),
    availableMotion: getAvailableMotion(solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName)
  })));
  return {
    isAnimating: false,
    motion,
    modeIndex,
    nextModeIndex: modeIndex,
    solfegeByName
  };
}

function derivedFromStateWhenAnimating(
  { motion, modeIndex }: State
): Derived {
  const canAdvanceSolfegeName = getCanAdvanceSolfegeName(modeIndex);
  const canRetreatSolfegeName = getCanRetreatSolfegeName(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, ((solfegeName: string) => ({
    location: getAnimatedLocation(solfegeName, motion, modeIndex, canAdvanceSolfegeName, canRetreatSolfegeName),
    availableMotion: null
  })));
  return {
    isAnimating: true,
    motion,
    modeIndex,
    nextModeIndex: getNextModeIndex(motion, modeIndex),
    solfegeByName
  };
}

function getCanAdvanceSolfegeName(
  modeIndex: number
): string {
  if (modeIndex === 6) return DO;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex];
}

function getCanRetreatSolfegeName(
  modeIndex: number
): string {
  if (modeIndex === 0) return DO;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex - 1];
}

function getAvailableMotion(
  solfegeName: string,
  canAdvanceSolfegeName: string,
  canRetreatSolfegeName: string
): string | null {
  if (solfegeName === canAdvanceSolfegeName) return ADVANCE_INDIVIDUAL;
  if (solfegeName === canRetreatSolfegeName) return RETREAT_INDIVIDUAL;
  return null;
}

function getNextModeIndex(
  motion: string,
  modeIndex: number
) {
  if (motion === ADVANCE_INDIVIDUAL) return remainderFor(modeIndex + 1, 7);
  if (motion === RETREAT_INDIVIDUAL) return remainderFor(modeIndex - 1, 7);
  if (motion === ADVANCE_ALL) return 6;
  if (motion === RETREAT_ALL) return 0;
  return modeIndex;
}

function getAnimatedLocation(
  solfegeName: string,
  motion: string,
  modeIndex: number,
  canAdvanceSolfegeName: string,
  canRetreatSolfegeName: string
): string {
  if (motion === ADVANCE_INDIVIDUAL && canAdvanceSolfegeName === solfegeName) return ADVANCE_INDIVIDUAL;
  if (motion === RETREAT_INDIVIDUAL && canRetreatSolfegeName === solfegeName) return RETREAT_INDIVIDUAL;
  if (motion === ADVANCE_ALL) return ADVANCE_ALL;
  if (motion === RETREAT_ALL) return RETREAT_ALL;
  return getStillLocation(solfegeName, modeIndex);
}

function getStillLocation(
  solfegeName: string,
  modeIndex: number
): string {
  if (solfegeName === DO) return STILL;
  const index = SOLFEGE_NAMES_IN_BEADGCF_ORDER.indexOf(solfegeName);
  if (index === -1) throw new Error(`invalid solfege note: ${solfegeName}`);
  return (modeIndex <= index) ? EARLY : LATE;
}

export function nextStateOnAnimationEnd(
  state: State,
  event: AnimationEvent
): State {
  if (! isAnimationObserved(event.animationName)) return state;
  const derived = derivedFromState(state);
  if (! derived.isAnimating) return state;
  const doSolfege = derived.solfegeByName.get(DO);
  if (doSolfege?.location === ADVANCE_INDIVIDUAL) {
    return {
      motion: RETREAT_ALL,
      modeIndex: derived.modeIndex
    };
  } else if (doSolfege?.location === RETREAT_INDIVIDUAL) {
    return {
      motion: ADVANCE_ALL,
      modeIndex: derived.modeIndex
    };
  } else {
    return {
      motion: STILL,
      modeIndex: derived.nextModeIndex
    };
  }
}

function isAnimationObserved(
  animationName: string
): boolean {
  return animationName.endsWith("solfege-dot");
}
