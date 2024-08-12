import { describe, expect, it } from '@jest/globals';
import { buildClassString } from "../../utilities/css";


describe("buildClassString()", () => {
  it("looks up class names and then joins them with spaces in between", () => {
    expect(
      buildClassString(
        { "dot": "abc-dot", "can-move": "abc-can-move", "blue": "abc-blue" },
        ["dot", "can-move"]
      )
    ).toBe(
      "abc-dot abc-can-move"
    );
  });
});
