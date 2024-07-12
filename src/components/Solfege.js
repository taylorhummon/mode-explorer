import { BLUE, GREEN, BLACK } from "../colors.js";
import "./Solfege.scss";

const Solfege = ({ name, location, move }) => {
  return (
    <circle
      className={getClassName(name, location)}
      cx="0"
      cy="0"
      r="10"
      fill={getFillColor(name, move)}
      onClick={move}
    />
  );
};

export default Solfege;

function getClassName(name, location) {
  const classNameArray= ["solfege", name];
  if (location) classNameArray.push(location);
  return classNameArray.join(" ");
}

function getFillColor(name, move) {
  if (name === "Do") return BLUE;
  if (move) return GREEN;
  return BLACK;
}
