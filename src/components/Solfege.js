import "./Solfege.scss";

const Solfege = ({ name, location, move }) => (
  <circle
    className={getClassName(name, location, move)}
    cx="0"
    cy="0"
    r="10"
    onClick={move}
  />
);

function getClassName(name, location, move) {
  const classNames = ["solfege", name, location];
  if (move) classNames.push("can-move");
  return classNames.join(" ");
}

export default Solfege;
