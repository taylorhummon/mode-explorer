import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";
import "./Tick.scss";

const Tick = ({ hour }) => (
  <line
    className={getClassName(hour)}
    key={hour}
    x1={xOnClockAt(hour)}
    y1={yOnClockAt(hour)}
    x2={xOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    y2={yOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
  />
);

function getClassName(hour) {
  const classNames = ["tick"];
  if (hour === 0) classNames.push("root");
  return classNames.join(" ");
}

export default Tick;
