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

  className() {
    const classNameArray= ["solfege", this.props.name];
    if (this.props.location) classNameArray.push(this.props.location);
    return classNameArray.join(" ");
  }

  color() {
    if (this.props.name === "Do") return "blue";
    if (this.props.canMove) return "green";
    return "black";
  }

  render() {
    return (
      <circle
        className={this.className()}
        onClick={this.props.move}
        cx="0"
        cy="0"
        r="10"
        fill={this.color()}
      />
    )
  }
}
