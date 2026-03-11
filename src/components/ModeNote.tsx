import { Motion, ModeNote as ModeNoteEnum } from "src/enumerations";
import { DRAWING_BY_MODE_NOTE } from "src/textDrawings";
import type { Derived } from "src/types";
import { buildClassString } from "src/utilities/css";

import cssModule from "src/components/ModeNote.module.css";


interface ModeNoteProps {
  derived: Derived
}

export default function ModeNote({
  derived
}: ModeNoteProps): JSX.Element {
  const { motion, modeNote, advanceableModeNote, retreatableModeNote } = derived;
  return (
    <g className={buildClassString(cssModule, ["mode-notes"])}>
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
  );
}

function modeNotePath(
  modeNote: ModeNoteEnum
): JSX.Element {
  return (
    <path
      transform="translate(-5 -6)"
      d={DRAWING_BY_MODE_NOTE[modeNote]}
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
