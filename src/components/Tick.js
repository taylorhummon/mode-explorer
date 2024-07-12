import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";
import { GRAY, BLUE } from "../colors.js";

const Tick = ({ hour }) => (
  <line
    key={hour}
    x1={xOnClockAt(hour)}
    y1={yOnClockAt(hour)}
    x2={xOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    y2={yOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    stroke={strokeColor(hour)}
    strokeWidth="3"
  />
);

function strokeColor(hour) {
  if (hour === 0) return BLUE;
  return GRAY;
}

export default Tick;
