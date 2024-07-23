import { describe, expect, it } from '@jest/globals';
import { buildIndicesArray } from "../../utilities/array";

describe("buildIndicesArray()", () => {
  it("builds the array of indices", () => {
    expect(
      buildIndicesArray(5)
    ).toStrictEqual(
      [0, 1, 2, 3, 4]
    );
    expect(
      buildIndicesArray(1)
    ).toStrictEqual(
      [0]
    );
    expect(
      buildIndicesArray(0)
    ).toStrictEqual(
      []
    );
  });
  it("throws when given a negative indices count", () => {
    expect(() => {
      buildIndicesArray(-1);
    }).toThrow();
  });
});
