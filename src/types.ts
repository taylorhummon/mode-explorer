export interface State {
  motion: string;
  modeIndex: number;
}

export interface Derived {
  isAnimating: boolean;
  motion: string;
  modeIndex: number;
  nextModeIndex: number;
  solfegeByName: Map<string, Solfege>;
}

export interface Solfege {
  location: string;
  availableMotion: string | null;
}
