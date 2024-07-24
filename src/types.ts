import { Motion, SolfegeName } from "./enumerations";

export interface State {
  motion: Motion;
  modeIndex: number;
}

export interface Derived {
  motion: Motion;
  modeIndex: number;
  isAnimating: boolean;
  nextModeIndex: number;
  solfegeByName: Map<SolfegeName, Solfege>;
}

export interface Solfege {
  location: Motion;
  availableMotion: Motion | null;
}

export type Move = (() => void) | undefined;
