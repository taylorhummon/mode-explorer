import { Move } from "../types";
import { SolfegeName, Motion } from "../enumerations";
import { buildClassString } from "../utilities/css";
import cssModule from "./SolfegeDot.module.scss";

interface SolfegeDotProps {
  name: SolfegeName;
  location: Motion;
  move: Move;
}

export default function SolfegeDot({
  name,
  location,
  move
}: SolfegeDotProps) {
  return (
    <circle
      className={className(name, location, move)}
      cx="0"
      cy="0"
      r="10"
      onClick={move}
      data-testid={`solfege-dot-${name}`}
    />
  );
}

function className(
  name: SolfegeName,
  location: Motion,
  move: Move
): string {
  const classNames = ["solfege-dot", name, location];
  if (move) classNames.push("can-move");
  return buildClassString(cssModule, classNames);
}
