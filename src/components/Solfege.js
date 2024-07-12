/* eslint no-unused-vars: 0 */

import { Component } from "inferno";
import "./Solfege.scss";

/*
props for Solfege
  name
  location
  canMove
  move
  doneMoving
*/

export default class Solfege extends Component {
  doneMoving = () => {
    this.props.doneMoving();
  }

  componentDidAppear(domNode) {
    domNode.addEventListener("animationend", this.doneMoving, false);
  }

  // componentWillDisappear(domNode) {
  //   domNode.removeEventListener("animationend", this.doneMoving);
  // }

  render() {
    return (
      <circle
        className={getClassName(this.props.name, this.props.location)}
        onClick={this.props.move}
        cx="0"
        cy="0"
        r="10"
        fill={getFillColor(this.props.name, this.props.canMove)}
      />
    )
  }
}

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
