import type { Derived, Move } from "../types";
import { Motion } from "../enumerations";
import Clock from "./Clock";
import ModeNote from "./ModeNote";
import SolfegeDot from "./SolfegeDot";
import SolfegeLabel from "./SolfegeLabel"
import Arrow from "./Arrow";
import { arrayFromMap } from "../utilities/map";


interface CanvasProps {
  derived: Derived;
  buildMove: (motion: Motion | null) => Move;
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
        derived={derived}
      />
      {arrayFromMap(derived.solfegeByName, (solfege, name) => (
        <SolfegeDot
          key={name}
          name={name}
          location={solfege.location}
          move={buildMove(solfege.availableMotion)}
        />
      ))}
      {arrayFromMap(derived.solfegeByName, (solfege, name) => (
        <SolfegeLabel
          key={name}
          name={name}
          location={solfege.location}
        />
      ))}
      <Arrow
        isAdvance={true}
        hour={derived.advanceableHour}
        isHidden={derived.isAnimating}
        move={buildMove(Motion.AdvanceIndividual)}
      />
      <Arrow
        isAdvance={false}
        hour={derived.retreatableHour}
        isHidden={derived.isAnimating}
        move={buildMove(Motion.RetreatIndividual)}
      />
    </svg>
  )
};
