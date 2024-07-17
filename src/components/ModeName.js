import { MODE_NAMES } from "../constants/mode.js";
import "./ModeName.css";

const ModeName = ({ modeIndex, isHidden }) => {
  return (
    <p className="mode-name">Mode:&nbsp;
      <span className={className(isHidden)}>{MODE_NAMES[modeIndex]}</span>
    </p>
  );
}

function className(isHidden) {
  const classNames = ["mode-name-span"];
  if (isHidden) classNames.push("hidden");
  return classNames.join(" ");
}

export default ModeName;
