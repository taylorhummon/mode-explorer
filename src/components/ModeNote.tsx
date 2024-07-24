import { MODE_NOTES } from "../enumerations";
import { buildClassString } from "../utilities/css";
import cssModule from "./ModeNote.module.scss";

interface ModeNoteProps {
  modeIndex: number;
  isHidden: boolean;
}

export default function ModeNote({
  modeIndex,
  isHidden
}: ModeNoteProps) {
  return (
    <text
      className={className(isHidden)}
      x="0"
      y="8"
    >
      {MODE_NOTES[modeIndex]}
    </text>
  );
}

function className(
  isHidden: boolean
): string {
  const classNames = ["mode-note"];
  if (isHidden) classNames.push("hidden");
  return buildClassString(cssModule, classNames)
}
