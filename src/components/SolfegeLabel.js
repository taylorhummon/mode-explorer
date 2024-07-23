import { buildClassString } from "../utilities/css.js";
import cssModule from "./SolfegeLabel.module.css";

export default function SolfegeLabel({ name, location }) {
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

function className(name, location) {
  return buildClassString(cssModule, ["solfege-label", name, location]);
}
