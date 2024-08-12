import { describe, test, expect } from 'vitest';
import { remainderFor, cosineOfDegrees, sineOfDegrees } from "src/utilities/math";


describe("remainderFor()", () => {
  test("works when the denominator is positive", () => {
    expect(
      remainderFor(14, 6)
    ).toBe(
      2
    );
    expect(
      remainderFor(4, 6)
    ).toBe(
      4
    );
    expect(
      remainderFor(0, 6)
    ).toBe(
      0
    );
    expect(
      remainderFor(-0, 6)
    ).toBe(
      0
    );
    expect(
      remainderFor(-6, 6)
    ).toBe(
      0
    );
    expect(
      remainderFor(-14, 6)
    ).toBe(
      4
    );
  });
  test("throws when the denominator is zero or negative", () => {
    expect(() => {
      remainderFor(14, 0);
    }).toThrow();
    expect(() => {
      remainderFor(14, -3);
    }).toThrow();
  });
});

describe("cosineOfDegrees()", () => {
  test("should work for common degree values", () => {
    expect(
      cosineOfDegrees(0)
    ).toBeCloseTo(
      1
    );
    expect(
      cosineOfDegrees(90)
    ).toBeCloseTo(
      0
    );
    expect(
      cosineOfDegrees(180)
    ).toBeCloseTo(
      -1
    );
    expect(
      cosineOfDegrees(-90)
    ).toBeCloseTo(
      0
    );
  });
});

describe("sineOfDegrees()", () => {
  test("should work for common degree values", () => {
    expect(
      sineOfDegrees(0)
    ).toBeCloseTo(
      0
    );
    expect(
      sineOfDegrees(90)
    ).toBeCloseTo(
      1
    );
    expect(
      sineOfDegrees(180)
    ).toBeCloseTo(
      0
    );
    expect(
      sineOfDegrees(-90)
    ).toBeCloseTo(
      -1
    );
  });
});
