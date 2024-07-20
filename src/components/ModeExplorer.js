import { useState, useRef, useEffect } from "react";
import ModeName from "./ModeName.js";
import Canvas from "./Canvas.js";
import { derivedFromState } from "../utilities/derived.js";
import { DO } from "../constants/solfege.js";
import {
  STILL, ADVANCE_INDIVIDUAL, RETREAT_INDIVIDUAL, ADVANCE_ALL, RETREAT_ALL
} from "../constants/location.js";
import "./ModeExplorer.css";

const INITIAL_MODE_INDEX = 5; // Major mode

export default function ModeExplorer() {
  const domNodeRef = useRef();
  const [state, setState] = useState({
    motion: STILL,
    modeIndex: INITIAL_MODE_INDEX
  });
  const derived = derivedFromState(state);
  const buildMove = (solfege) => {
    if (solfege.canAdvance) {
      return () => setState({
        motion: ADVANCE_INDIVIDUAL,
        modeIndex: derived.modeIndex
      });
    }
    if (solfege.canRetreat) {
      return () => setState({
        motion: RETREAT_INDIVIDUAL,
        modeIndex: derived.modeIndex
      });
    }
    return null;
  };
  useEffect(() => {
    function animationEndHandler() {
      setState(nextStateOnAnimationEnd);
    }
    domNodeRef.current.addEventListener("animationend", animationEndHandler, false);
    return () => {
      domNodeRef.current.removeEventListener("animationend", animationEndHandler);
    };
  }, []);
  return (
    <div className="mode-explorer" ref={domNodeRef}>
      <p className="title">
        Explore musical modes
      </p>
      <p className="instructions">
        Click on a green dot to switch modes.
      </p>
      <Canvas
        derived={derived}
        buildMove={buildMove}
      />
      <ModeName
        modeIndex={derived.modeIndex}
        isHidden={derived.isAnimating}
      />
    </div>
  );
}

function nextStateOnAnimationEnd(state) {
  const derived = derivedFromState(state);
  if (! derived.isAnimating) return state;
  const doSolfege = derived.solfegeByName.get(DO);
  if (doSolfege.location === ADVANCE_INDIVIDUAL) {
    return {
      motion: RETREAT_ALL,
      modeIndex: derived.modeIndex
    };
  } else if (doSolfege.location === RETREAT_INDIVIDUAL) {
    return {
      motion: ADVANCE_ALL,
      modeIndex: derived.modeIndex
    };
  } else {
    return {
      motion: STILL,
      modeIndex: derived.nextModeIndex
    };
  }
}
