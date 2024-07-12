/* eslint no-unused-vars: 0 */

import "./Solfege.scss";

const Solfege = ({ name, location, canMove, move }) => {
  return (
    <circle
      className={getClassName(name, location)}
      cx="0"
      cy="0"
      r="10"
      fill={getFillColor(name, canMove)}
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

function getFillColor(name, canMove) {
  if (name === "Do") return "blue";
  if (canMove) return "green";
  return "black";
}
