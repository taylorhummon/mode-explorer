import { MODE_NAMES } from "../constants/mode.js";
import { buildClassString } from "../utilities/css.js";
import cssModule from "./ModeName.module.css";

export default function ModeName({ modeIndex, isHidden }) {
  return (
    <p className="mode-name">Mode:&nbsp;
      <span className={className(isHidden)}>{MODE_NAMES[modeIndex]}</span>
    </p>
  );
}

function className(isHidden) {
  const classNames = ["mode-name-span"];
  if (isHidden) classNames.push("hidden");
  return buildClassString(cssModule, classNames);
}
