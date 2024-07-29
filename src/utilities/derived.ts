import { State, Derived } from "../types";
import { Motion, SolfegeName, SOLFEGE_NAMES, SOLFEGE_NAMES_IN_BEADGCF_ORDER } from "../enumerations";
import { buildMap } from "../utilities/map";
import { remainderFor } from "../utilities/math";

export function derivedFromState(
  state: State
): Derived {
  if (state.motion === Motion.Still) {
    return derivedWhenStill(state);
  } else {
    return derivedWhenAnimating(state);
  }
}

function derivedWhenStill({
  motion,
  modeIndex
}: State): Derived {
  const advanceable = getAdvanceableSolfegeName(modeIndex);
  const retreatable = getRetreatableSolfegeName(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, ((solfegeName: SolfegeName) => ({
    location: locationWhenStill(solfegeName, modeIndex),
    availableMotion: getAvailableMotion(solfegeName, advanceable, retreatable)
  })));
  return {
    motion,
    modeIndex,
    isAnimating: false,
    solfegeByName,
    advanceableHour: getAdvanceableHour(modeIndex),
    retreatableHour: getRetreatableHour(modeIndex),
    nextModeIndex: modeIndex,
  };
}

function derivedWhenAnimating({
  motion,
  modeIndex
}: State): Derived {
  const advanceable = getAdvanceableSolfegeName(modeIndex);
  const retreatable = getRetreatableSolfegeName(modeIndex);
  const solfegeByName = buildMap(SOLFEGE_NAMES, ((solfegeName: SolfegeName) => ({
    location: locationWhenAnimating(solfegeName, motion, modeIndex, advanceable, retreatable),
    availableMotion: null
  })));
  return {
    motion,
    modeIndex,
    isAnimating: true,
    solfegeByName,
    advanceableHour: getAdvanceableHour(modeIndex),
    retreatableHour: getRetreatableHour(modeIndex),
    nextModeIndex: getNextModeIndex(motion, modeIndex),
  };
}

function getAdvanceableSolfegeName(
  modeIndex: number
): SolfegeName {
  if (modeIndex === 6) return SolfegeName.Do;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex];
}

function getRetreatableSolfegeName(
  modeIndex: number
): SolfegeName {
  if (modeIndex === 0) return SolfegeName.Do;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex - 1];
}

function getAdvanceableHour(
  modeIndex: number
): number {
  if (modeIndex % 2 === 0) {
    return (modeIndex + 6) % 12;
  } else {
    return modeIndex;
  }
}

function getRetreatableHour(
  modeIndex: number
): number {
  if (modeIndex % 2 === 0) {
    return modeIndex;
  } else {
    return (modeIndex + 6) % 12;
  }
}

function getAvailableMotion(
  solfegeName: SolfegeName,
  advanceable: SolfegeName,
  retreatable: SolfegeName
): Motion | null {
  if (solfegeName === advanceable) return Motion.AdvanceIndividual;
  if (solfegeName === retreatable) return Motion.RetreatIndividual;
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

function locationWhenAnimating(
  solfegeName: SolfegeName,
  motion: Motion,
  modeIndex: number,
  advanceable: SolfegeName,
  retreatable: SolfegeName
): Motion {
  if (motion === Motion.AdvanceIndividual && advanceable === solfegeName) return Motion.AdvanceIndividual;
  if (motion === Motion.RetreatIndividual && retreatable === solfegeName) return Motion.RetreatIndividual;
  if (motion === Motion.AdvanceAll) return Motion.AdvanceAll;
  if (motion === Motion.RetreatAll) return Motion.RetreatAll;
  return locationWhenStill(solfegeName, modeIndex);
}

function locationWhenStill(
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
