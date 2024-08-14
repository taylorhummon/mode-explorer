import { MODE_NAMES } from "src/enumerations";
import { buildClassString } from "src/utilities/css";

import cssModule from "./ModeName.module.css";


interface ModeNameProps {
  modeIndex: number;
  isHidden: boolean;
}

export default function ModeName({
  modeIndex,
  isHidden
}: ModeNameProps): JSX.Element {
  return (
    <p
      className={buildClassString(cssModule, ["mode-name"])}
    >Mode:&nbsp;
      <span
        className={className(isHidden)}
      >{MODE_NAMES[modeIndex]}</span>
    </p>
  );
}

function className(
  isHidden: boolean
): string {
  const classNames = ["mode-name-span"];
  if (isHidden) classNames.push("hidden");
  return buildClassString(cssModule, classNames);
}
