import Tick from "./Tick";
import { CLOCK_RADIUS } from "../utilities/clock";
import { buildIndicesArray } from "../utilities/array";
import { buildClassString } from "../utilities/css";
import cssModule from "./Clock.module.scss";

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
