const MODE_NAMES = [
  "Locrian",
  "Phrygian",
  "Aeolian",
  "Dorian",
  "Mixolydian",
  "Ionian",
  "Lydian"
];

const ModeName = ({ isVisible, modeInteger }) => {
  if (! isVisible) return null;
  return (
    <text
      style="font-size:18px;line-height:0;font-family:'PT Mono';fill:#ff2f92;text-align:center;text-anchor:middle"
      x="0"
      y="8"
    >
      {MODE_NAMES[modeInteger]}
    </text>
  );
}

export default ModeName;
