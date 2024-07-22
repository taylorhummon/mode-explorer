import { useState, useRef, useEffect } from "react";
import ModeName from "./ModeName.js";
import Canvas from "./Canvas.js";
import { derivedFromState, nextStateOnAnimationEnd } from "../utilities/derived.js";
import { STILL } from "../constants/location.js";
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
    if (! solfege.availableMotion) return null;
    return () => setState({
      motion: solfege.availableMotion,
      modeIndex: derived.modeIndex
    });
  };
  useEffect(() => {
    function animationEndHandler(event) {
      setState((state) => nextStateOnAnimationEnd(state, event));
    }
    if (domNodeRef.current) {
      domNodeRef.current.addEventListener("animationend", animationEndHandler, false);
    }
    return () => {
      if (domNodeRef.current) {
        domNodeRef.current.removeEventListener("animationend", animationEndHandler);
      }
    };
  }, []);
  return (
    <div className="mode-explorer" ref={domNodeRef}>
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
