import type { Move } from "../types";
import { buildClassString } from "../utilities/css";
import cssModule from "./Arrow.module.css";


interface ArrowProps {
  isAdvance: boolean;
  hour: number;
  isHidden: boolean;
  move: Move;
}

export default function Arrow({
  isAdvance,
  hour,
  isHidden,
  move
}: ArrowProps): JSX.Element {
  return (
    <g
      className={className(isAdvance, hour, isHidden)}
      onClick={move}
    >
      <rect
        x="-15"
        y="-15"
        width="20"
        height="30"
      />
      <polyline
        points="-10,-10 0,0 -10,10"
      />
    </g>
  );
}

function className(
  isAdvance: boolean,
  hour: number,
  isHidden: boolean
): string {
  const classNames = ["arrow", `hour-${hour}`];
  classNames.push(isAdvance ? "advance" : "retreat");
  if (isHidden) classNames.push("hidden");
  return buildClassString(cssModule, classNames);
}
