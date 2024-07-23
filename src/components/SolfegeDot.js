import cssModule from "./SolfegeDot.module.css";
import { buildClassString } from "../utilities/css.js";

export default function SolfegeDot({ name, location, move }) {
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

function className(name, location, move) {
  const classNames = ["solfege-dot", name, location];
  if (move) classNames.push("can-move");
  return buildClassString(cssModule, classNames);
}
