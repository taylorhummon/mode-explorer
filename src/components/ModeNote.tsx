import { MODE_NOTES } from "../enumerations";
import { DRAWING_BY_NOTE_NAME } from "../textDrawings";
import { buildClassString } from "../utilities/css";
import cssModule from "./ModeNote.module.scss";

interface ModeNoteProps {
  modeIndex: number;
  isHidden: boolean;
}

export default function ModeNote({
  modeIndex,
  isHidden
}: ModeNoteProps): JSX.Element {
  return (
    <g className={className(isHidden)}>
      <path
        d={DRAWING_BY_NOTE_NAME[MODE_NOTES[modeIndex]]}
        transform="translate(-5 -6)"
        fillRule="evenodd"
      />
    </g>
  );
}

function className(
  isHidden: boolean
): string {
  const classNames = ["mode-note"];
  if (isHidden) classNames.push("hidden");
  return buildClassString(cssModule, classNames)
}
