import { useState, useRef, useEffect } from "react";
import { Motion } from "src/enumerations";
import ModeName from "src/components/ModeName";
import Canvas from "src/components/Canvas";
import { derivedFromState, nextStateOnAnimationEnd } from "src/utilities/derived";
import { buildClassString } from "src/utilities/css";

import cssModule from "./ModeExplorer.module.css";


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
    const domNode = domNodeRef.current;
    if (domNode) domNode.addEventListener("animationend", animationEndHandler, false);
    return () => {
      if (domNode) domNode.removeEventListener("animationend", animationEndHandler);
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
