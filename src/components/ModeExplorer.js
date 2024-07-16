import { Component } from "inferno";
import ModeName from "./ModeName.js";
import Canvas from "./Canvas.js";
import { derivedFromState } from "../utilities/derived.js";
import { DO } from "../constants/solfege.js";
import {
  STILL, ADVANCE_INDIVIDUAL, RETREAT_INDIVIDUAL, ADVANCE_ALL, RETREAT_ALL
} from "../constants/location.js";
import "./ModeExplorer.scss";

export default class ModeExplorer extends Component {
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
      <div className="mode-explorer">
        <p className="title">
          Explore musical modes
        </p>
        <p className="instructions">
          Click on a green dot to switch modes.
        </p>
        <Canvas
          derived={derived}
          buildMove={this.buildMove}
        />
        <ModeName
          modeIndex={derived.modeIndex}
          isHidden={derived.isAnimating}
        />
      </div>
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
