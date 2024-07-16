import { MODE_NAMES } from "../constants/mode.js";
import "./ModeName.scss";

const ModeName = ({ isHidden, modeIndex }) => {
  if (isHidden) return null;
  return (
    <text
      className="mode-name"
      x="0"
      y="8px"
    >
      {MODE_NAMES[modeIndex]}
    </text>
  );
}

export default ModeName;
