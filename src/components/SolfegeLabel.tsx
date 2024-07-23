import { buildClassString } from "../utilities/css";
import cssModule from "./SolfegeLabel.module.css";

interface SolfegeLabelProps {
  name: string;
  location: string;
}

export default function SolfegeLabel(
  { name, location }: SolfegeLabelProps
) {
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
  name: string,
  location: string
): string {
  return buildClassString(cssModule, ["solfege-label", name, location]);
}
