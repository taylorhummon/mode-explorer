import Clock from "./Clock.js";
import ModeNote from "./ModeNote.js";
import SolfegeDot from "./SolfegeDot.js";
import SolfegeLabel from "./SolfegeLabel.js";
import { arrayFromMap } from "../utilities/map.js";

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
        <SolfegeDot
          key={name}
          name={name}
          location={solfege.location}
          move={buildMove(solfege)}
        />
      ))}
      {arrayFromMap(derived.solfegeByName, (solfege, name) => (
        <SolfegeLabel
          key={name}
          name={name}
          location={solfege.location}
        />
      ))}
    </svg>
  )
};
