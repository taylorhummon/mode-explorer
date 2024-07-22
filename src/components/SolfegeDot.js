import "./SolfegeDot.css";

export default function SolfegeDot({ name, location, move }) {
  return (
    <circle
      className={className(name, location, move)}
      cx="0"
      cy="0"
      r="10"
      onClick={move}
    />
  );
}

function className(name, location, move) {
  const classNames = ["solfege-dot", name, location];
  if (move) classNames.push("can-move");
  return classNames.join(" ");
}
