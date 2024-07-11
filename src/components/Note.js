/* eslint no-unused-vars: 0 */

import { Component } from "inferno";
import "./Note.scss";

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = { position: "early" };
  }

  clickHandler = (event) => {
    if (this.state.position === "early") {
      this.setState({ position: "advance" });
    } else if (this.state.position === "late") {
      this.setState({ position: "retreat" });
    }
  }

  animationEndCallback = (animationOptions) => {
    if (animationOptions.animationName === "advance") {
      this.setState({ position: "late" });
    } else if (animationOptions.animationName === "retreat") {
      this.setState({ position: "early" });
    }
  }

  componentDidAppear(domNode) {
    domNode.addEventListener("animationend", this.animationEndCallback, false);
  }

  componentWillDisappear(domNode) {
    domNode.removeEventListener("animationend", this.animationEndCallback);
  }

  className() {
    const classNames = ["note", this.state.position, this.props.solfege];
    return classNames.join(" ");
  }

  render() {
    return (
      <circle
        className={this.className()}
        onClick={this.clickHandler}
        cx="0"
        cy="0"
        r="10"
        fill="green"
      />
    )
  }
}
