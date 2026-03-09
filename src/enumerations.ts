export enum SolfegeName {
  Sol = "sol",
  Re = "re",
  La = "la",
  Mi = "mi",
  Ti = "ti",
  Fa = "fa",
  Do = "do"
}
export const SOLFEGE_NAMES = Object.values(SolfegeName);

export enum ModeNote {
  B = "B",
  E = "E",
  A = "A",
  D = "D",
  G = "G",
  C = "C",
  F = "F"
}
export const MODE_NOTES = Object.values(ModeNote);

export enum ModeName {
  Locrian = "Locrian",
  Phrygian = "Phrygian",
  Aeolian = "Aeolian",
  Dorian = "Dorian",
  Mixolydian = "Mixolydian",
  Ionian = "Ionian",
  Lydian = "Lydian"
}
export const MODE_NAMES = Object.values(ModeName);

export enum Motion {
  Still = "still",
  StillEarly = "still-early",
  StillLate = "still-late",
  AdvanceIndividual = "advance-individual",
  RetreatIndividual = "retreat-individual",
  AdvanceAll = "advance-all",
  RetreatAll = "retreat-all"
}
