import { Component } from "inferno";
import Clock from "./Clock.js";
import ModeNote from "./ModeNote.js";
import Solfege from "./Solfege.js";
import { derivedFromState } from "../utilities/canvas.js";
import { arrayFromMap } from "../utilities/map.js";
import { DO } from "../constants/solfege.js";
import {
  STILL, ADVANCE_INDIVIDUAL, RETREAT_INDIVIDUAL, ADVANCE_ALL, RETREAT_ALL
} from "../constants/location.js";
import "./Canvas.scss";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motion: STILL,
      modeIndex: 5
    };
  }

  componentDidAppear(domNode) {
    domNode.addEventListener("animationend", this.animationEndHandler, false);
  }

  componentWillDisappear(domNode) {
    domNode.removeEventListener("animationend", this.animationEndHandler);
  }

  render() {
    const derived = derivedFromState(this.state);
    return (
      <svg
        className="canvas"
        viewBox="-150 -150 300 300"
        xmlns="http://www.w3.org/2000/svg"
        height="300px"
        width="300px"
      >
        <Clock />
        <ModeNote
          isHidden={derived.isAnimating}
          modeIndex={derived.modeIndex}
        />
        {arrayFromMap(derived.solfegeByName, (solfege, name) => (
          <Solfege
            key={name}
            name={name}
            location={solfege.location}
            move={this.buildMove(solfege)}
          />
        ))}
      </svg>
    );
  }

  buildMove = (solfege) => {
    if (solfege.canAdvance) return this.advanceIndividual;
    if (solfege.canRetreat) return this.retreatIndividual;
    return null;
  }

  advanceIndividual = () => {
    this.setState({ motion: ADVANCE_INDIVIDUAL });
  }

  retreatIndividual = () => {
    this.setState({ motion: RETREAT_INDIVIDUAL });
  }

  animationEndHandler = () => {
    this.setState((state) => {
      const derived = derivedFromState(state);
      if (! derived.isAnimating) return null;
      const doSolfege = derived.solfegeByName.get(DO);
      if (doSolfege.location === ADVANCE_INDIVIDUAL) {
        return { motion: RETREAT_ALL };
      } else if (doSolfege.location === RETREAT_INDIVIDUAL) {
        return { motion: ADVANCE_ALL };
      } else {
        return { motion: STILL, modeIndex: derived.nextModeIndex };
      }
    });
  }
}
