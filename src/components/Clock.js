/* eslint no-unused-vars: 0 */

import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";
import "./Clock.scss";

const Tick = ({ hour }) => (
  <line
    key={hour}
    x1={xOnClockAt(hour)}
    y1={yOnClockAt(hour)}
    x2={xOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    y2={yOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    stroke="black"
    strokeWidth="1"
  />
);

const Clock = () => {
  const tickHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const ticks = tickHours.map((hour) => Tick({ hour }));
  return (
    <>
      <circle cx="0" cy="0" r={CLOCK_RADIUS} fill="none" stroke="black" strokeWidth="1" />
      {ticks}
    </>
  );
}

export default Clock;
