import { Motion, SolfegeName } from "./enumerations";

export interface State {
  motion: Motion;
  modeIndex: number;
}

export interface Derived {
  motion: Motion;
  modeIndex: number;
  isAnimating: boolean;
  solfegeByName: Map<SolfegeName, Solfege>;
  advanceableHour: number;
  retreatableHour: number;
  nextModeIndex: number;
}

export interface Solfege {
  location: Motion;
  availableMotion: Motion | null;
}

export type Move = (() => void) | undefined;
