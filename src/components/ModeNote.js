import { MODE_NOTES } from "../constants/mode.js";
import "./ModeNote.scss";

const ModeNote = ({ modeIndex, isHidden }) => {
  return (
    <text
      className={className(isHidden)}
      x="0"
      y="8"
    >
      {MODE_NOTES[modeIndex]}
    </text>
  );
}

function className(isHidden) {
  const classNames = ["mode-note"];
  if (isHidden) classNames.push("hidden");
  return classNames.join(" ");
}

export default ModeNote;
