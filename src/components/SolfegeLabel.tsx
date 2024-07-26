import { SolfegeName, Motion } from "../enumerations";
import { buildClassString } from "../utilities/css";
import cssModule from "./SolfegeLabel.module.scss";

interface SolfegeLabelProps {
  name: SolfegeName;
  location: Motion;
}

export default function SolfegeLabel({
  name,
  location
}: SolfegeLabelProps): JSX.Element {
  return (
    <text
      className={className(name, location)}
      x="0"
      y="6"
    >
      {name}
    </text>
  );
}

function className(
  name: SolfegeName,
  location: Motion
): string {
  const classNames = ["solfege-label", name, location];
  return buildClassString(cssModule, classNames);
}
