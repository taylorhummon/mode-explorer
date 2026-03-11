import { Motion } from "src/enumerations";
import type { Derived, Move } from "src/types";
import Clock from "src/components/Clock";
import ModeNote from "src/components/ModeNote";
import ModeName from "src/components/ModeName";
import SolfegeDot from "src/components/SolfegeDot";
import SolfegeLabel from "src/components/SolfegeLabel"
import Arrow from "src/components/Arrow";
import { arrayFromMap } from "src/utilities/map";


interface CanvasProps {
  derived: Derived;
  buildMove: (motion: Motion | null) => Move;
}

export default function Canvas({
  derived,
  buildMove
}: CanvasProps): JSX.Element {
  return (
    <>
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
      <ModeName
        modeIndex={derived.modeIndex}
        isHidden={derived.isAnimating}
      />
    </>
  )
};
