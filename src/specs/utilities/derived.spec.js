import { derivedFromState, nextStateOnAnimationEnd } from "../../utilities/derived";
import {
  STILL, ADVANCE_INDIVIDUAL, RETREAT_INDIVIDUAL, ADVANCE_ALL, RETREAT_ALL
} from "../../constants/location.js";

describe("derivedFromState()", () => {
  it("correctly decides isAnimating", () => {
    expect(
      derivedFromState({ motion: STILL, modeIndex: 5 }).isAnimating
    ).toBe(
      false
    );
    expect(
      derivedFromState({ motion: ADVANCE_INDIVIDUAL, modeIndex: 5 }).isAnimating
    ).toBe(
      true
    );
    expect(
      derivedFromState({ motion: ADVANCE_ALL, modeIndex: 5 }).isAnimating
    ).toBe(
      true
    );
  });
  it("includes the motion", () => {
    expect(
      derivedFromState({ motion: STILL, modeIndex: 5 }).motion
    ).toBe(
      STILL
    );
    expect(
      derivedFromState({ motion: RETREAT_INDIVIDUAL, modeIndex: 5 }).motion
    ).toBe(
      RETREAT_INDIVIDUAL
    );
    expect(
      derivedFromState({ motion: RETREAT_ALL, modeIndex: 5 }).motion
    ).toBe(
      RETREAT_ALL
    );
  });
  it("includes the modeIndex", () => {
    expect(
      derivedFromState({ motion: STILL, modeIndex: 5 }).modeIndex
    ).toBe(
      5
    );
    expect(
      derivedFromState({ motion: STILL, modeIndex: 0 }).modeIndex
    ).toBe(
      0
    );
  });
  it("correctly decides nextModeIndex", () => {
    expect(
      derivedFromState({ motion: STILL, modeIndex: 5 }).nextModeIndex
    ).toBe(
      5
    );
    expect(
      derivedFromState({ motion: ADVANCE_INDIVIDUAL, modeIndex: 5 }).nextModeIndex
    ).toBe(
      6
    );
    expect(
      derivedFromState({ motion: RETREAT_INDIVIDUAL, modeIndex: 5 }).nextModeIndex
    ).toBe(
      4
    );
    expect(
      derivedFromState({ motion: ADVANCE_INDIVIDUAL, modeIndex: 6 }).nextModeIndex
    ).toBe(
      0
    );
    expect(
      derivedFromState({ motion: RETREAT_INDIVIDUAL, modeIndex: 0 }).nextModeIndex
    ).toBe(
      6
    );
  });
});

describe("nextStateOnAnimationEnd()", () => {
  it("completes the animation of an individual solfege note advancing", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: ADVANCE_INDIVIDUAL, modeIndex: 5 },
      { animationName: "advance-solfege-dot" }
    );
    expect(
      nextState.motion
    ).toBe(
      STILL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      6
    );
  });
  it("completes the animation of an individual solfege note retreating", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: RETREAT_INDIVIDUAL, modeIndex: 5 },
      { animationName: "retreat-solfege-dot" }
    );
    expect(
      nextState.motion
    ).toBe(
      STILL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      4
    );
  });
  it("does nothing when a label animation ends", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: ADVANCE_INDIVIDUAL, modeIndex: 2 },
      { animationName: "advance-solfege-label" }
    );
    expect(
      nextState.motion
    ).toBe(
      ADVANCE_INDIVIDUAL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      2
    );
  });
  it("does nothing when the state's motion is STILL", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: STILL, modeIndex: 2 },
      { animationName: "advance-solfege-dot" }
    );
    expect(
      nextState.motion
    ).toBe(
      STILL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      2
    );
  });
  it("triggers a RETREAT_ALL when Do has advanced individually", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: ADVANCE_INDIVIDUAL, modeIndex: 6 },
      { animationName: "advance-solfege-dot" }
    );
    expect(
      nextState.motion
    ).toBe(
      RETREAT_ALL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      6
    );
  });
  it("completes the animation of a RETREAT_ALL", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: RETREAT_ALL, modeIndex: 6 },
      { animationName: "retreat-solfege-dot" }
    );
    expect(
      nextState.motion
    ).toBe(
      STILL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      0
    );
  });
  it("triggers an ADVANCE_ALL when Do has retreated individually", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: RETREAT_INDIVIDUAL, modeIndex: 0 },
      { animationName: "retreat-solfege-dot" }
    );
    expect(
      nextState.motion
    ).toBe(
      ADVANCE_ALL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      0
    );
  });
  it("completes the animation of an ADVANCE_ALL", () => {
    const nextState = nextStateOnAnimationEnd(
      { motion: ADVANCE_ALL, modeIndex: 0 },
      { animationName: "advance-solfege-dot" }
    );
    expect(
      nextState.motion
    ).toBe(
      STILL
    );
    expect(
      nextState.modeIndex
    ).toBe(
      6
    );
  });
});
