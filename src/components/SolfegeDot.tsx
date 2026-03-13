import { SolfegeName, Motion } from "src/enumerations";
import type { Move } from "src/types";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/SolfegeDot.module.css";


interface SolfegeDotProps {
  name: SolfegeName;
  location: Motion;
  move: Move;
}

export default function SolfegeDot({
  name,
  location,
  move
}: SolfegeDotProps): JSX.Element {
  return (
    <circle
      className={className(name, location, move)}
      onClick={move}
      cx="0"
      cy="0"
      r="10"
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
  if (name === SolfegeName.Do) classNames.push("root");
  return buildClassString(cssModule, classNames);
}
