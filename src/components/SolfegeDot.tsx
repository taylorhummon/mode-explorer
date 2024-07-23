import { buildClassString } from "../utilities/css";
import cssModule from "./SolfegeDot.module.css";

interface SolfegeDotProps {
  name: string;
  location: string;
  move: (() => void) | undefined;
}

export default function SolfegeDot(
  { name, location, move }: SolfegeDotProps
) {
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
  name: string,
  location: string,
  move: (() => void) | undefined
): string {
  const classNames = ["solfege-dot", name, location];
  if (move) classNames.push("can-move");
  return buildClassString(cssModule, classNames);
}
