import { Component } from "inferno";
import Clock from "./Clock.js";
import ModeName from "./ModeName.js";
import Solfege from "./Solfege.js";

const SOLFEGE_NAMES = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti"];
const SOLFEGE_NAMES_IN_BEADGCF_ORDER = ["Sol", "Re", "La", "Mi", "Ti", "Fa"];

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      motion: "still",
      modeIndex: 5
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
      modeIndex: getPendingmodeIndex(this.state.motion, this.state.modeIndex)
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
        <ModeName
          isVisible={derivedState.motion === "still"}
          modeIndex={derivedState.modeIndex}
        />
        {solfegeComponents}
      </svg>
    );
  }
}

function getDerivedState(state) {
  return {
    motion: state.motion,
    modeIndex: state.modeIndex,
    advancingSolfegeName: getAdvancingSolfegeName(state.modeIndex),
    retreatingSolfegeName: getRetreatingSolfegeName(state.modeIndex)
  };
}

function getAdvancingSolfegeName(modeIndex) {
  if (! (modeIndex >= 0 && modeIndex <= 5)) return null;
  return SOLFEGE_NAMES_IN_BEADGCF_ORDER[modeIndex];
}

function getRetreatingSolfegeName(modeIndex) {
  return getAdvancingSolfegeName(modeIndex - 1);
}

function getLocation(solfegeName, derivedState) {
  const { motion, modeIndex, advancingSolfegeName, retreatingSolfegeName } = derivedState;
  if (motion === "advance" && solfegeName === advancingSolfegeName) return "advance";
  if (motion === "retreat" && solfegeName === retreatingSolfegeName) return "retreat";
  if (solfegeName === "Do") return "root";
  const index = SOLFEGE_NAMES_IN_BEADGCF_ORDER.indexOf(solfegeName);
  if (index === -1) throw new Error(`invalid solfege note: ${solfegeName}`);
  return (modeIndex <= index) ? "early" : "late";
}

function getPendingmodeIndex(motion, modeIndex) {
  if (motion === "advance") return modeIndex + 1;
  if (motion === "retreat") return modeIndex - 1;
  return modeIndex;
}

function registerAnimationEndHandler(domNode, finishMovement) {
  domNode.addEventListener("animationend", finishMovement, false);
}

function unregisterAnimationEndHandler(domNode, finishMovement) {
  domNode.removeEventListener("animationend", finishMovement);
}
