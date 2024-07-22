import { buildMap } from "../utilities/map.js";
import { remainderFor } from "../utilities/math.js";
import { DO, SOLFEGE_NAMES, SOLFEGE_NAMES_IN_BEADGCF_ORDER } from "../constants/solfege.js";
import {
  STILL, EARLY, LATE, ADVANCE_INDIVIDUAL, RETREAT_INDIVIDUAL, ADVANCE_ALL, RETREAT_ALL
} from "../constants/location.js"

export function derivedFromState(state) {
  if (state.motion === STILL) {
    return derivedFromStateWhenStill(state);
  } else {
    return derivedFromStateWhenAnimating(state);
  }
}

function derivedFromStateWhenStill({ motion, modeIndex }) {
  const canAdvanceSolfegeName = getCanAdvanceSolfegeName(modeIndex);
  const canRetreatSolfegeName = getCanRetreatSolfegeName(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, (solfegeName => ({
    location: getStillLocation(solfegeName, { modeIndex }),
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

function derivedFromStateWhenAnimating({ motion, modeIndex }) {
  const canAdvanceSolfegeName = getCanAdvanceSolfegeName(modeIndex);
  const canRetreatSolfegeName = getCanRetreatSolfegeName(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, (solfegeName => ({
    location: getAnimatedLocation(
      solfegeName,
      { motion, modeIndex, canAdvanceSolfegeName, canRetreatSolfegeName }
    ),
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

function getCanAdvanceSolfegeName(modeIndex) {
  if (modeIndex === 6) return DO;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex];
}

function getCanRetreatSolfegeName(modeIndex) {
  if (modeIndex === 0) return DO;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex - 1];
}

function getAvailableMotion(solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName) {
  if (solfegeName === canAdvanceSolfegeName) return ADVANCE_INDIVIDUAL;
  if (solfegeName === canRetreatSolfegeName) return RETREAT_INDIVIDUAL;
  return null;
}

function getNextModeIndex(motion, modeIndex) {
  if (motion === ADVANCE_INDIVIDUAL) return remainderFor(modeIndex + 1, 7);
  if (motion === RETREAT_INDIVIDUAL) return remainderFor(modeIndex - 1, 7);
  if (motion === ADVANCE_ALL) return 6;
  if (motion === RETREAT_ALL) return 0;
  return modeIndex;
}

function getAnimatedLocation(solfegeName, { motion, modeIndex, canAdvanceSolfegeName, canRetreatSolfegeName }) {
  if (motion === ADVANCE_INDIVIDUAL && canAdvanceSolfegeName === solfegeName) return ADVANCE_INDIVIDUAL;
  if (motion === RETREAT_INDIVIDUAL && canRetreatSolfegeName === solfegeName) return RETREAT_INDIVIDUAL;
  if (motion === ADVANCE_ALL) return ADVANCE_ALL;
  if (motion === RETREAT_ALL) return RETREAT_ALL;
  return getStillLocation(solfegeName, { modeIndex });
}

function getStillLocation(solfegeName, { modeIndex }) {
  if (solfegeName === DO) return STILL;
  const index = SOLFEGE_NAMES_IN_BEADGCF_ORDER.indexOf(solfegeName);
  if (index === -1) throw new Error(`invalid solfege note: ${solfegeName}`);
  return (modeIndex <= index) ? EARLY : LATE;
}

const OBSERVED_ANIMATIONS = ["advance-solfege-dot", "retreat-solfege-dot"];

export function nextStateOnAnimationEnd(state, event) {
  if (! OBSERVED_ANIMATIONS.includes(event.animationName)) return state;
  const derived = derivedFromState(state);
  if (! derived.isAnimating) return state;
  const doSolfege = derived.solfegeByName.get(DO);
  if (doSolfege.location === ADVANCE_INDIVIDUAL) {
    return {
      motion: RETREAT_ALL,
      modeIndex: derived.modeIndex
    };
  } else if (doSolfege.location === RETREAT_INDIVIDUAL) {
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
