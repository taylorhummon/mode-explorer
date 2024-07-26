import { Derived, Solfege, Move } from "../types";
import Clock from "./Clock";
import ModeNote from "./ModeNote";
import SolfegeDot from "./SolfegeDot";
import SolfegeLabel from "./SolfegeLabel";
import { arrayFromMap } from "../utilities/map";

interface CanvasProps {
  derived: Derived;
  buildMove: (solfege: Solfege) => Move;
}

export default function Canvas({
  derived,
  buildMove
}: CanvasProps): JSX.Element {
  return (
    <svg
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
