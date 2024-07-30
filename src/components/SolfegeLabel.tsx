import { SolfegeName, Motion } from "../enumerations";
import { buildClassString } from "../utilities/css";
import { DRAWING_BY_SOLFEGE_NAME } from "../textDrawings";
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
    <g className={className(name, location)}>
      <path
        transform={`translate(${-5 * name.length} -6)`}
        d={DRAWING_BY_SOLFEGE_NAME[name]}
        fillRule="evenodd"
      />
    </g>
  );
}

function className(
  name: SolfegeName,
  location: Motion
): string {
  const classNames = ["solfege-label", name, location];
  return buildClassString(cssModule, classNames);
}
