import { test, expect } from 'vitest';
import { vi } from 'vitest';
import { Motion } from "src/enumerations";
import { derivedFromState, nextStateOnAnimationEnd } from "src/utilities/derived";


vi.mock('src/utilities/animation', () => {
  return {
    isAnimationObserved(animationName: string) {
      return ["advance-solfege-dot", "retreat-solfege-dot"].includes(animationName);
    }
  }
});

function mockAnimationEvent(
  animationName: string
): AnimationEvent {
  return { animationName } as AnimationEvent;
}

test("derivedFromState() includes the motion", () => {
  expect(
    derivedFromState({ motion: Motion.Still, modeIndex: 5 }).motion
  ).toBe(
    Motion.Still
  );
  expect(
    derivedFromState({ motion: Motion.RetreatIndividual, modeIndex: 5 }).motion
  ).toBe(
    Motion.RetreatIndividual
  );
  expect(
    derivedFromState({ motion: Motion.RetreatAll, modeIndex: 5 }).motion
  ).toBe(
    Motion.RetreatAll
  );
});

test("derivedFromState() includes the modeIndex", () => {
  expect(
    derivedFromState({ motion: Motion.Still, modeIndex: 5 }).modeIndex
  ).toBe(
    5
  );
  expect(
    derivedFromState({ motion: Motion.Still, modeIndex: 0 }).modeIndex
  ).toBe(
    0
  );
});

test("derivedFromState() correctly decides isAnimating", () => {
  expect(
    derivedFromState({ motion: Motion.Still, modeIndex: 5 }).isAnimating
  ).toBe(
    false
  );
  expect(
    derivedFromState({ motion: Motion.AdvanceIndividual, modeIndex: 5 }).isAnimating
  ).toBe(
    true
  );
  expect(
    derivedFromState({ motion: Motion.AdvanceAll, modeIndex: 5 }).isAnimating
  ).toBe(
    true
  );
});

test("derivedFromState() correctly decides nextModeIndex", () => {
  expect(
    derivedFromState({ motion: Motion.Still, modeIndex: 5 }).nextModeIndex
  ).toBe(
    5
  );
  expect(
    derivedFromState({ motion: Motion.AdvanceIndividual, modeIndex: 5 }).nextModeIndex
  ).toBe(
    6
  );
  expect(
    derivedFromState({ motion: Motion.RetreatIndividual, modeIndex: 5 }).nextModeIndex
  ).toBe(
    4
  );
  expect(
    derivedFromState({ motion: Motion.AdvanceIndividual, modeIndex: 6 }).nextModeIndex
  ).toBe(
    0
  );
  expect(
    derivedFromState({ motion: Motion.RetreatIndividual, modeIndex: 0 }).nextModeIndex
  ).toBe(
    6
  );
});

test("nextStateOnAnimationEnd() completes the animation of an individual solfege note advancing", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.AdvanceIndividual, modeIndex: 5 },
    mockAnimationEvent("advance-solfege-dot")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.Still
  );
  expect(
    nextState.modeIndex
  ).toBe(
    6
  );
});

test("nextStateOnAnimationEnd() completes the animation of an individual solfege note retreating", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.RetreatIndividual, modeIndex: 5 },
    mockAnimationEvent("retreat-solfege-dot")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.Still
  );
  expect(
    nextState.modeIndex
  ).toBe(
    4
  );
});

test("nextStateOnAnimationEnd() does nothing when a label animation ends", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.AdvanceIndividual, modeIndex: 2 },
    mockAnimationEvent("advance-solfege-label")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.AdvanceIndividual
  );
  expect(
    nextState.modeIndex
  ).toBe(
    2
  );
});

test("nextStateOnAnimationEnd() does nothing when the state's motion is Motion.Still", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.Still, modeIndex: 2 },
    mockAnimationEvent("advance-solfege-dot")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.Still
  );
  expect(
    nextState.modeIndex
  ).toBe(
    2
  );
});

test("nextStateOnAnimationEnd() triggers a Motion.RetreatAll when Do has advanced individually", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.AdvanceIndividual, modeIndex: 6 },
    mockAnimationEvent("advance-solfege-dot")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.RetreatAll
  );
  expect(
    nextState.modeIndex
  ).toBe(
    0
  );
});

test("nextStateOnAnimationEnd() completes the animation of a Motion.RetreatAll", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.RetreatAll, modeIndex: 6 },
    mockAnimationEvent("retreat-solfege-dot")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.Still
  );
  expect(
    nextState.modeIndex
  ).toBe(
    0
  );
});

test("nextStateOnAnimationEnd() triggers an Motion.AdvanceAll when Do has retreated individually", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.RetreatIndividual, modeIndex: 0 },
    mockAnimationEvent("retreat-solfege-dot")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.AdvanceAll
  );
  expect(
    nextState.modeIndex
  ).toBe(
    6
  );
});

test("nextStateOnAnimationEnd() completes the animation of an Motion.AdvanceAll", () => {
  const nextState = nextStateOnAnimationEnd(
    { motion: Motion.AdvanceAll, modeIndex: 0 },
    mockAnimationEvent("advance-solfege-dot")
  );
  expect(
    nextState.motion
  ).toBe(
    Motion.Still
  );
  expect(
    nextState.modeIndex
  ).toBe(
    6
  );
});
