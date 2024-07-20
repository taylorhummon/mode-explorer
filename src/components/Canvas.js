import Clock from "./Clock.js";
import ModeNote from "./ModeNote.js";
import Solfege from "./Solfege.js";
import { arrayFromMap } from "../utilities/map.js";
import "./Canvas.css";

export default function Canvas({ derived, buildMove }) {
  return (
    <svg
      className="canvas"
      viewBox="-150 -150 300 300"
      xmlns="http://www.w3.org/2000/svg"
      height="300px"
      width="300px"
    >
      <Clock />
      <ModeNote
        isHidden={derived.isAnimating}
        modeIndex={derived.modeIndex}
      />
      {arrayFromMap(derived.solfegeByName, (solfege, name) => (
        <Solfege
          key={name}
          name={name}
          location={solfege.location}
          move={buildMove(solfege)}
        />
      ))}
    </svg>
  )
};
