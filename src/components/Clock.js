import { CLOCK_RADIUS } from "../utilities/clock.js";
import Tick from "./Tick.js";

const Clock = () => {
  const tickHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const tickComponents = tickHours.map((hour) => Tick({ hour }));
  return (
    <>
      <circle cx="0" cy="0" r={CLOCK_RADIUS} fill="none" stroke="black" strokeWidth="1" />
      {tickComponents}
    </>
  );
}

export default Clock;
