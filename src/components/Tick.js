import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";

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

export default Tick;
