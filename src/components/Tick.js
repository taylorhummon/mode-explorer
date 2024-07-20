import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";
import "./Tick.css";

export default function Tick({ hour }) {
  return (
    <line
      className={className(hour)}
      key={hour}
      x1={xOnClockAt(hour)}
      y1={yOnClockAt(hour)}
      x2={xOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
      y2={yOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
    />
  );
}

function className(hour) {
  const classNames = ["tick"];
  if (hour === 0) classNames.push("root");
  return classNames.join(" ");
}
