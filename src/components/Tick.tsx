import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock";
import { buildClassString } from "../utilities/css";
import cssModule from "./Tick.module.scss";

interface TickProps {
  hour: number;
}

export default function Tick({
  hour
}: TickProps): JSX.Element {
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

function className(
  hour: number
): string {
  const classNames = ["tick"];
  if (hour === 0) classNames.push("root");
  return buildClassString(cssModule, classNames);
}
