import { SolfegeName, Motion } from "src/enumerations";
import { buildClassString } from "src/utilities/css";
import { DRAWING_BY_SOLFEGE_NAME } from "src/textDrawings";

import cssModule from "./SolfegeLabel.module.css";


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
