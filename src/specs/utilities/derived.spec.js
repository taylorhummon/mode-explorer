import { derivedFromState } from "../../utilities/derived";
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
