import { useState, useRef, useEffect } from "react";
import { Motion } from "../enumerations";
import ModeName from "./ModeName";
import Canvas from "./Canvas";
import { derivedFromState, nextStateOnAnimationEnd } from "../utilities/derived";
import { buildClassString } from "../utilities/css";
import cssModule from "./ModeExplorer.module.scss";

const INITIAL_MODE_INDEX = 5; // Major mode

export default function ModeExplorer(): JSX.Element {
  const domNodeRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    motion: Motion.Still,
    modeIndex: INITIAL_MODE_INDEX
  });
  const derived = derivedFromState(state);
  function buildMove(
    motion: Motion | null
  ): (() => void) | undefined {
    if (motion === null) return undefined;
    return () => { setState({ ...state, motion }); };
  }
  useEffect(() => {
    function animationEndHandler(
      event: AnimationEvent
    ): void {
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
    <div
      ref={domNodeRef}
      className={buildClassString(cssModule, ["mode-explorer"])}
    >
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
