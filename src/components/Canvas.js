import { Component } from "inferno";
import Clock from "./Clock.js";
import Solfege from "./Solfege.js";

const SOLFEGE_NAMES = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti"];
const SOLFEGE_NAMES_FOR_MODE_CHANGING = ["Sol", "Re", "La", "Mi", "Ti", "Fa"];

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      motion: "still",
      modeInteger: 5
    };
  }

  buildMove = (solfegeName, derivedState) => {
    const { motion, advancingSolfegeName, retreatingSolfegeName } = derivedState;
    if (motion === "still") {
      if (solfegeName === advancingSolfegeName) return this.advance;
      if (solfegeName === retreatingSolfegeName) return this.retreat;
    }
    return null;
  }

  advance = () => {
    this.setState({ motion: "advance" });
  }

  retreat = () => {
    this.setState({ motion: "retreat" });
  }

  finishMovement = () => {
    this.setState({
      motion: "still",
      modeInteger: getPendingModeInteger(this.state.motion, this.state.modeInteger)
    });
  };

  render() {
    const derivedState = getDerivedState(this.state);
    const solfegeComponents = SOLFEGE_NAMES.map((solfegeName) => (
      <Solfege
        key={solfegeName}
        name={solfegeName}
        location={getLocation(solfegeName, derivedState)}
        move={this.buildMove(solfegeName, derivedState)}
        onComponentDidAppear={(domNode) => registerAnimationEndHandler(domNode, this.finishMovement)}
        onComponentWillDisappear={(domNode) => unregisterAnimationEndHandler(domNode, this.finishMovement)}
      />
    ));
    return (
      <svg
        viewBox="-150 -150 300 300"
        xmlns="http://www.w3.org/2000/svg"
        height="300px"
        width="300px"
      >
        <Clock />
        {solfegeComponents}
      </svg>
    );
  }
}

function getDerivedState(state) {
  return {
    motion: state.motion,
    modeInteger: state.modeInteger,
    advancingSolfegeName: getAdvancingSolfegeName(state.modeInteger),
    retreatingSolfegeName: getRetreatingSolfegeName(state.modeInteger)
  };
}

function getAdvancingSolfegeName(modeInteger) {
  if (! (modeInteger >= 0 && modeInteger <= 5)) return null;
  return SOLFEGE_NAMES_FOR_MODE_CHANGING[modeInteger];
}

function getRetreatingSolfegeName(modeInteger) {
  return getAdvancingSolfegeName(modeInteger - 1);
}

function getLocation(solfegeName, derivedState) {
  const { motion, modeInteger, advancingSolfegeName, retreatingSolfegeName } = derivedState;
  if (motion === "advance" && solfegeName === advancingSolfegeName) return "advance";
  if (motion === "retreat" && solfegeName === retreatingSolfegeName) return "retreat";
  if (solfegeName === "Do") return "root";
  const index = SOLFEGE_NAMES_FOR_MODE_CHANGING.indexOf(solfegeName);
  if (index === -1) throw new Error(`invalid solfege note: ${solfegeName}`);
  return (modeInteger <= index) ? "early" : "late";
}

function getPendingModeInteger(motion, modeInteger) {
  if (motion === "advance") return modeInteger + 1;
  if (motion === "retreat") return modeInteger - 1;
  return modeInteger;
}

function registerAnimationEndHandler(domNode, finishMovement) {
  domNode.addEventListener("animationend", finishMovement, false);
}

function unregisterAnimationEndHandler(domNode, finishMovement) {
  domNode.removeEventListener("animationend", finishMovement);
}
