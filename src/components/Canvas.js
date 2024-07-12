/* eslint no-unused-vars: 0 */

import { Component } from "inferno";
import Clock from "./Clock.js";
import Solfege from "./Solfege.js";
import "./Canvas.scss";

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      motion: "still",
      modeInteger: 5
    };
  }

  move = (solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName) => {
    if (this.state.motion !== "still") return;
    if (solfegeName === canAdvanceSolfegeName) {
      this.setState({
        motion: "advance",
        modeInteger: this.state.modeInteger
      });
    }
    if (solfegeName === canRetreatSolfegeName) {
      this.setState({
        motion: "retreat",
        modeInteger: this.state.modeInteger
      });
    }
  }

  doneMoving = (pendingModeInteger) => {
    this.setState({
      motion: "still",
      modeInteger: pendingModeInteger
    });
  };

  render() {
    const motion = this.state.motion;
    const modeInteger = this.state.modeInteger;
    const pendingModeInteger = getPendingModeInteger(motion, modeInteger);
    const canAdvanceSolfegeName = getCanAdvanceSolfegeName(modeInteger);
    const canRetreatSolfegeName = getCanRetreatSolfegeName(modeInteger);
    const solfegeNames = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti"];
    const solfegeComponents = solfegeNames.map((solfegeName) => (
      <Solfege
        key={solfegeName}
        name={solfegeName}
        location={getLocation(solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName, motion, modeInteger)}
        canMove={getCanMove(solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName)}
        move={() => this.move(solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName)}
        doneMoving={() => this.doneMoving(pendingModeInteger)}
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

const NON_DO_SOLFEGE_NAMES = ["Sol", "Re", "La", "Mi", "Ti", "Fa"];

function getCanAdvanceSolfegeName(modeInteger) {
  if (! (modeInteger >= 0 && modeInteger <= 5)) return null;
  return NON_DO_SOLFEGE_NAMES[modeInteger];
}

function getCanRetreatSolfegeName(modeInteger) {
  return getCanAdvanceSolfegeName(modeInteger - 1);
}

function getLocation(solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName, motion, modeInteger) {
  if (motion === "advance" && solfegeName === canAdvanceSolfegeName) return "advance";
  if (motion === "retreat" && solfegeName === canRetreatSolfegeName) return "retreat";
  if (solfegeName === "Do") return "root";
  const index = NON_DO_SOLFEGE_NAMES.indexOf(solfegeName);
  if (index === -1) throw new Error(`invalid solfege note: ${solfegeName}`);
  return (modeInteger <= index) ? "early" : "late";
}

function getCanMove(solfegeName, canAdvanceSolfegeName, canRetreatSolfegeName) {
  return solfegeName === canAdvanceSolfegeName || solfegeName === canRetreatSolfegeName;
}

function getPendingModeInteger(motion, modeInteger) {
  if (motion === "advance") return modeInteger + 1;
  if (motion === "retreat") return modeInteger - 1;
  return modeInteger;
}
