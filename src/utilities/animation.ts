import solfegeDotCssModule from "src/components/SolfegeDot.module.css";


export function isAnimationRunning(
  animationName: string
): boolean {
  return (
    animationName === solfegeDotCssModule["advance-solfege-dot"] ||
    animationName === solfegeDotCssModule["retreat-solfege-dot"]
  );
}
