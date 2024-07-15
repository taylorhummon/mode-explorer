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
  return [
    "solfege",
    name,
    location,
    getColor(name, move),
  ].join(" ");
}

function getColor(name, move) {
  if (name === "Do") return "blue";
  if (move) return "green";
  return "black";
}

export default Solfege;
