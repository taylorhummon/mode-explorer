import { CLOCK_RADIUS } from "../utilities/clock.js";
import { buildIndicesArray } from "../utilities/array.js";
import Tick from "./Tick.js";
import { buildClassString } from "../utilities/css.js";
import cssModule from "./Clock.module.css";

export default function Clock() {
  return (
    <>
      <circle
        className={buildClassString(cssModule, ["clock"])}
        cx="0"
        cy="0"
        r={CLOCK_RADIUS}
      />
      {buildIndicesArray(12).map((hour) => Tick({ hour }))}
    </>
  );
}
