import type { Derived } from "src/types";
import { Motion, NoteName } from "src/enumerations";
import { DRAWING_BY_NOTE_NAME } from "src/textDrawings";
import { buildClassString } from "src/utilities/css";

import cssModule from "./ModeNote.module.css";


interface ModeNoteProps {
  derived: Derived
}

export default function ModeNote({
  derived
}: ModeNoteProps): JSX.Element {
  const { motion, modeNote, advanceableModeNote, retreatableModeNote } = derived;
  return (
    <>
      <defs>
        <clipPath id="mode-notes-crop">
          <rect x="-35" y="-15" width="70" height="30" />
        </clipPath>
      </defs>
      <g className={buildClassString(cssModule, ["mode-notes-crop"])}>
        <g className={className("left", motion)}>
          {modeNotePath(advanceableModeNote)}
        </g>
        <g className={className("center", motion)}>
          {modeNotePath(modeNote)}
        </g>
        <g className={className("right", motion)}>
          {modeNotePath(retreatableModeNote)}
        </g>
      </g>
    </>
  );
}

function modeNotePath(
  modeNote: NoteName
): JSX.Element {
  return (
    <path
      transform="translate(-5 -6)"
      d={DRAWING_BY_NOTE_NAME[modeNote]}
      fillRule="evenodd"
    />
  )
}

function className(
  name: string,
  motion: Motion,
): string {
  const classNames = ["mode-note", name];
  if (motion === Motion.AdvanceIndividual) classNames.push("advance");
  if (motion === Motion.RetreatIndividual) classNames.push("retreat");
  return buildClassString(cssModule, classNames);
}
