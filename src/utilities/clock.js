import { cosineOfDegrees, sineOfDegrees } from "./trigonometry.js"

export const CLOCK_RADIUS = 120;
export const TICK_LENGTH = 20;

export function xOnClockAt(hour, radius=CLOCK_RADIUS) {
  return radius * cosineOfDegrees(90 - hour * 30)
}

export function yOnClockAt(hour, radius=CLOCK_RADIUS) {
  return radius * sineOfDegrees(90 - hour * 30)
}
