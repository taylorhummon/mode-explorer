import { MODE_NOTES } from "../constants/mode.js";
import "./ModeNote.scss";

const ModeNote = ({ isHidden, modeIndex }) => {
  return (
    <text
      className={getClassName(isHidden)}
      x="0"
      y="8px"
    >
      {MODE_NOTES[modeIndex]}
    </text>
  );
}

function getClassName(isHidden) {
  const classNames = ["mode-note"];
  if (isHidden) classNames.push("hidden");
  return classNames.join(" ");
}

export default ModeNote;
