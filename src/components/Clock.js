import { CLOCK_RADIUS } from "../utilities/clock.js";
import { buildIndicesArray } from "../utilities/array.js";
import Tick from "./Tick.js";
import "./Clock.scss";

const Clock = () => (
  <>
    <circle
      className="clock"
      cx="0"
      cy="0"
      r={CLOCK_RADIUS}
    />
    {buildIndicesArray(12).map((hour) => Tick({ hour }))}
  </>
);

export default Clock;
