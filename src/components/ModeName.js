import "./ModeName.scss";

const MODE_NAMES = [
  "Locrian",
  "Phrygian",
  "Aeolian",
  "Dorian",
  "Mixolydian",
  "Ionian",
  "Lydian"
];

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
