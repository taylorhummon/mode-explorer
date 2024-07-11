/* eslint no-unused-vars: 0 */

import { Component } from "inferno";
import "./Note.scss";

export default class Note extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { position: "early" };
  // }

  clickHandler = (event) => {
    if (! this.props.isActive) {
      return;
    }
    this.props.updateMode();

    // if (this.state.position === "early") {
    //   this.setState({ position: "late" });
    // } else if (this.state.position === "late") {
    //   this.setState({ position: "early" });
    // }
  }

  animationEndCallback = (animationOptions) => {
    // if (animationOptions.animationName === "advance") {
    //   this.setState({ position: "late" });
    // } else if (animationOptions.animationName === "retreat") {
    //   this.setState({ position: "early" });
    // }
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
