export function remainderFor(numerator, denominator) {
  if (denominator <= 0) throw Error("remainder() expects a positive denominator");
  const possiblyNegative = numerator % denominator;
  if (possiblyNegative === -0) return 0;
  if (possiblyNegative < 0) return possiblyNegative + denominator;
  return possiblyNegative;
}

export function cosineOfDegrees(degrees) {
  return Math.cos(degrees * 2 * Math.PI / 360)
}

export function sineOfDegrees(degrees) {
  return Math.sin(degrees * 2 * Math.PI / 360)
}
