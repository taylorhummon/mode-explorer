/* eslint no-unused-vars: 0 */

import { Component } from "inferno";
import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";
import Note from "./Note.js";
import "./Clock.scss";

const MODE_NOTES = ["F", "C", "G", "D", "A", "E", "B"];
const MODE_NAMES = ["Lydian", "Ionian", "Mixolydian", "Dorian", "Aeolian", "Phrygian", "Locrian"];

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modeInteger: 0,
      isAnimating: false
    };
  }

  advance = (solfege) => {
    const nextModeInteger = getNextModeInteger(solfege, this.state.modeInteger);
    this.setState({
      modeInteger: nextModeInteger,
      advancingNote: solfege,
      retreatingNote: null
    });
  };

  retreat = (solfege) => {
    const nextModeInteger = getNextModeInteger(solfege, this.state.modeInteger);
    this.setState({
      modeInteger: nextModeInteger,
      advancingNote: null,
      retreatingNote: solfege
    });
  };

  endNoteAnimation = () => {
    this.setState({
      modeInteger: this.state.modeInteger,
      advancingNote: null,
      retreatingNote: null
    });
  };

  updateMode = (solfege) => {
    const nextModeInteger = getNextModeInteger(solfege, this.state.modeInteger);
    const nextModeNote = MODE_NOTES[nextModeInteger];
    console.log("changing to mode", nextModeNote);
    this.setState({
      modeInteger: nextModeInteger
    });
  }

  render() {
    const tickHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const ticks = tickHours.map((hour) => tick(hour, CLOCK_RADIUS));
    const solfeges = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti"];
    const notes = solfeges.map((solfege) => (
      <Note
        key={solfege}
        solfege={solfege}
        position={getPosition(this.state, solfege)}
        isActive={getIsActive(solfege, this.state.modeInteger)}
        advance={() => this.advance(solfege)}
        retreat={() => this.retreat(solfege)}
        endNoteAnimation={this.endNoteAnimation}
      />
    ));
    return (
      <svg
        viewBox="-150 -150 300 300"
        xmlns="http://www.w3.org/2000/svg"
        height="300px"
        width="300px"
      >
        <rect x="-150" y="-150" width="300" height="300" stroke="cadetblue" strokeWidth="0.5%" fill="none" />
        <circle cx="0" cy="0" r={CLOCK_RADIUS} fill="none" stroke="black" strokeWidth="1" />
        {ticks}
        {notes}
      </svg>
    );
  }
}

function tick(hour) {
  return (
    <line
      key={hour}
      x1={xOnClockAt(hour)}
      y1={yOnClockAt(hour)}
      x2={xOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
      y2={yOnClockAt(hour, CLOCK_RADIUS - TICK_LENGTH)}
      stroke="black"
      strokeWidth="1"
    />
  )
}

function getPosition(state, solfege) {
  if (state.advancingNote === solfege) return "advance";
  if (state.retreatingNote === solfege) return "retreat";
  if (solfege === "Do") {
    return null;
  } else if (solfege === "Re") {
    return state.modeInteger >= 5 ? "early" : "late";
  } else if (solfege === "Mi") {
    return state.modeInteger >= 3 ? "early" : "late";
  } else if (solfege === "Fa") {
    return state.modeInteger >= 1 ? "early" : "late";
  } else if (solfege === "Sol") {
    return state.modeInteger >= 6 ? "early" : "late";
  } else if (solfege === "La") {
    return state.modeInteger >= 4 ? "early" : "late";
  } else if (solfege === "Ti") {
    return state.modeInteger >= 2 ? "early" : "late";
  } else {
    throw new Error(`invalid solfege note: ${solfege}`);
  }
}

function getIsActive(solfege, modeInteger) {
  if (solfege === "Do") {
    return false;
  } else if (solfege === "Re") {
    return modeInteger === 4 || modeInteger === 5;
  } else if (solfege === "Mi") {
    return modeInteger === 2 || modeInteger === 3;
  } else if (solfege === "Fa") {
    return modeInteger === 0 || modeInteger === 1;
  } else if (solfege === "Sol") {
    return modeInteger === 5 || modeInteger === 6;
  } else if (solfege === "La") {
    return modeInteger === 3 || modeInteger === 4;
  } else if (solfege === "Ti") {
    return modeInteger === 1 || modeInteger === 2;
  } else {
    throw new Error(`invalid solfege note: ${solfege}`);
  }
}

function getNextModeInteger(solfege, modeInteger) {
  if (solfege === "Fa") {
    if (modeInteger === 0) return 1;
    if (modeInteger === 1) return 0;
  }
  if (solfege === "Ti") {
    if (modeInteger === 1) return 2;
    if (modeInteger === 2) return 1;
  }
  if (solfege === "Mi") {
    if (modeInteger === 2) return 3;
    if (modeInteger === 3) return 2;
  }
  if (solfege === "La") {
    if (modeInteger === 3) return 4;
    if (modeInteger === 4) return 3;
  }
  if (solfege === "Re") {
    if (modeInteger === 4) return 5;
    if (modeInteger === 5) return 4;
  }
  if (solfege === "Sol") {
    if (modeInteger === 5) return 6;
    if (modeInteger === 6) return 5;
  }
  return modeInteger;
}
