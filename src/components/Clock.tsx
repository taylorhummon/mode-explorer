import Tick from "./Tick";
import { CLOCK_RADIUS } from "src/utilities/clock";
import { buildIndicesArray } from "src/utilities/array";
import { buildClassString } from "src/utilities/css";

import cssModule from "./Clock.module.scss";


export default function Clock(): JSX.Element {
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
