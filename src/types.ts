import { Motion, SolfegeName } from "./enumerations";

export interface State {
  motion: Motion;
  modeIndex: number;
}

export interface Derived {
  isAnimating: boolean;
  motion: Motion;
  modeIndex: number;
  nextModeIndex: number;
  solfegeByName: Map<SolfegeName, Solfege>;
}

export interface Solfege {
  location: Motion;
  availableMotion: Motion | null;
}
