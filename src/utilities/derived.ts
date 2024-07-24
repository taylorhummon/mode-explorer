import { State, Derived } from "../types";
import { Motion, SolfegeName, SOLFEGE_NAMES, SOLFEGE_NAMES_IN_BEADGCF_ORDER } from "../enumerations";
import { buildMap } from "../utilities/map";
import { remainderFor } from "../utilities/math";

export function derivedFromState(
  state: State
): Derived {
  if (state.motion === Motion.Still) {
    return derivedFromStateWhenStill(state);
  } else {
    return derivedFromStateWhenAnimating(state);
  }
}

function derivedFromStateWhenStill({
  motion,
  modeIndex
}: State): Derived {
  const canAdvance = getCanAdvance(modeIndex);
  const canRetreat = getCanRetreat(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, ((solfegeName: SolfegeName) => ({
    location: getStillMotion(solfegeName, modeIndex),
    availableMotion: getAvailableMotion(solfegeName, canAdvance, canRetreat)
  })));
  return {
    isAnimating: false,
    motion,
    modeIndex,
    nextModeIndex: modeIndex,
    solfegeByName
  };
}

function derivedFromStateWhenAnimating({
  motion,
  modeIndex
}: State): Derived {
  const canAdvance = getCanAdvance(modeIndex);
  const canRetreat = getCanRetreat(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, ((solfegeName: SolfegeName) => ({
    location: getAnimatedMotion(solfegeName, motion, modeIndex, canAdvance, canRetreat),
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

function getCanAdvance(
  modeIndex: number
): SolfegeName {
  if (modeIndex === 6) return SolfegeName.Do;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex];
}

function getCanRetreat(
  modeIndex: number
): SolfegeName {
  if (modeIndex === 0) return SolfegeName.Do;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex - 1];
}

function getAvailableMotion(
  solfegeName: SolfegeName,
  canAdvance: SolfegeName,
  canRetreat: SolfegeName
): Motion | null {
  if (solfegeName === canAdvance) return Motion.AdvanceIndividual;
  if (solfegeName === canRetreat) return Motion.RetreatIndividual;
  return null;
}

function getNextModeIndex(
  motion: Motion,
  modeIndex: number
): number {
  if (motion === Motion.AdvanceIndividual) return remainderFor(modeIndex + 1, 7);
  if (motion === Motion.RetreatIndividual) return remainderFor(modeIndex - 1, 7);
  if (motion === Motion.AdvanceAll) return 6;
  if (motion === Motion.RetreatAll) return 0;
  return modeIndex;
}

function getAnimatedMotion(
  solfegeName: SolfegeName,
  motion: Motion,
  modeIndex: number,
  canAdvance: SolfegeName,
  canRetreat: SolfegeName
): Motion {
  if (motion === Motion.AdvanceIndividual && canAdvance === solfegeName) return Motion.AdvanceIndividual;
  if (motion === Motion.RetreatIndividual && canRetreat === solfegeName) return Motion.RetreatIndividual;
  if (motion === Motion.AdvanceAll) return Motion.AdvanceAll;
  if (motion === Motion.RetreatAll) return Motion.RetreatAll;
  return getStillMotion(solfegeName, modeIndex);
}

function getStillMotion(
  solfegeName: SolfegeName,
  modeIndex: number
): Motion {
  if (solfegeName === SolfegeName.Do) return Motion.Still;
  const index = SOLFEGE_NAMES_IN_BEADGCF_ORDER.indexOf(solfegeName);
  if (index === -1) throw new Error(`invalid solfege note: ${solfegeName}`);
  return (modeIndex <= index) ? Motion.StillEarly : Motion.StillLate;
}

export function nextStateOnAnimationEnd(
  state: State,
  event: AnimationEvent
): State {
  if (! isAnimationObserved(event.animationName)) return state;
  const derived = derivedFromState(state);
  if (! derived.isAnimating) return state;
  const doSolfege = derived.solfegeByName.get(SolfegeName.Do);
  if (doSolfege?.location === Motion.AdvanceIndividual) {
    return {
      motion: Motion.RetreatAll,
      modeIndex: derived.modeIndex
    };
  } else if (doSolfege?.location === Motion.RetreatIndividual) {
    return {
      motion: Motion.AdvanceAll,
      modeIndex: derived.modeIndex
    };
  } else {
    return {
      motion: Motion.Still,
      modeIndex: derived.nextModeIndex
    };
  }
}

function isAnimationObserved(
  animationName: string
): boolean {
  return animationName.endsWith("solfege-dot");
}
