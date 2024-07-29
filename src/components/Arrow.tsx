import { Move } from "../types";
import { buildClassString } from "../utilities/css";
import cssModule from "./Arrow.module.scss";

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
      {innerSvgElements(isAdvance)}
    </g>
  );
}

function innerSvgElements(
  isAdvance: boolean
): JSX.Element {
  if (isAdvance) {
    return (
      <>
        <rect
          x="-15"
          y="-15"
          width="30"
          height="15"
        />
        <polyline
          points="-13,-13 0,0 13,-13"
        />
      </>
    );
  } else {
    return (
      <>
        <rect
          x="-15"
          y="0"
          width="30"
          height="15"
        />
        <polyline
          points="-13,13 0,0 13,13"
        />
      </>
    );
  }
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
