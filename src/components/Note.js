/* eslint no-unused-vars: 0 */

import { Component } from "inferno";
import "./Note.scss";

export default class Note extends Component {
  clickHandler = (event) => {
    if (! this.props.isActive) {
      return;
    }
    if (this.props.position === "early") {
      this.props.advance();
    } else if (this.props.position === "late") {
      this.props.retreat();
    }
  }

  animationEndCallback = (animationOptions) => {
    this.props.endNoteAnimation();
  }

  componentDidAppear(domNode) {
    domNode.addEventListener("animationend", this.animationEndCallback, false);
  }

  componentWillDisappear(domNode) {
    domNode.removeEventListener("animationend", this.animationEndCallback);
  }

  className() {
    const classNames = ["note", this.props.solfege];
    if (this.props.position) classNames.push(this.props.position);
    return classNames.join(" ");
  }

  color() {
    if (this.props.solfege === "Do") return "blue";
    return this.props.isActive ? "green" : "black";
  }

  render() {
    return (
      <circle
        className={this.className()}
        onClick={this.clickHandler}
        cx="0"
        cy="0"
        r="10"
        fill={this.color()}
      />
    )
  }
}
