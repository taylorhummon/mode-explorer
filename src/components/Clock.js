/* eslint no-unused-vars: 0 */

import { Component } from "inferno";
import { CLOCK_RADIUS, TICK_LENGTH, xOnClockAt, yOnClockAt } from "../utilities/clock.js";
import Note from "./Note.js";
import "./Clock.scss";

export default class Canvas extends Component {
  render() {
    const state = 6;
    const tickHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const ticks = tickHours.map((hour) => tick(hour, CLOCK_RADIUS));
    const noteScaleDegrees = [0, 1, 2, 3, 4, 5, 6];
    const notes = noteScaleDegrees.map((scaleDegree) => noteHourFromScaleDegree(scaleDegree, state)).map(note);
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
        <Note />
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

function note(hour) {
  return (
    <circle
      key={hour}
      cx={xOnClockAt(hour)}
      cy={yOnClockAt(hour)}
      r="10"
      fill="black"
      stroke="none"
    />
  );
}

function noteHourFromScaleDegree(scaleDegree, state) {
  if (scaleDegree === 0) {          // Do
    return 0;
  } else if (scaleDegree === 1) {   // Re
    return state >= 5 ? 1 : 2;
  } else if (scaleDegree === 2) {   // Mi
    return state >= 3 ? 3 : 4;
  } else if (scaleDegree === 3) {   // Fa
    return state >= 1 ? 5 : 6;
  } else if (scaleDegree === 4) {   // Sol
    return state >= 6 ? 6 : 7;
  } else if (scaleDegree === 5) {   // La
    return state >= 4 ? 8 : 9;
  } else if (scaleDegree === 6) {   // Ti
    return state >= 2 ? 10 : 11;
  } else {
    throw new Error("invalid scale degree");
  }
}
