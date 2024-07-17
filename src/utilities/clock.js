import { cosineOfDegrees, sineOfDegrees } from "./math.js"

export const CLOCK_RADIUS = 120;
export const TICK_LENGTH = 20;

export function xOnClockAt(hour, radius=CLOCK_RADIUS) {
  return radius * cosineOfDegrees(hour * 30 - 90);
}

export function yOnClockAt(hour, radius=CLOCK_RADIUS) {
  return radius * sineOfDegrees(hour * 30 - 90);
}
