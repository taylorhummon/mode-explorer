import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";
import { buildClassString } from "../utilities/css.js";
import cssModule from "./Tick.module.css";

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
  return buildClassString(cssModule, classNames);
}
