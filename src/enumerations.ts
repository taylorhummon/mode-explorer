export enum SolfegeName {
  Do = "do",
  Re = "re",
  Mi = "mi",
  Fa = "fa",
  Sol = "sol",
  La = "la",
  Ti = "ti"
}

export const SOLFEGE_NAMES = [
  SolfegeName.Do,
  SolfegeName.Re,
  SolfegeName.Mi,
  SolfegeName.Fa,
  SolfegeName.Sol,
  SolfegeName.La,
  SolfegeName.Ti
];

export const SOLFEGE_NAMES_IN_BEADGCF_ORDER = [
  SolfegeName.Sol,
  SolfegeName.Re,
  SolfegeName.La,
  SolfegeName.Mi,
  SolfegeName.Ti,
  SolfegeName.Fa
];

export enum NoteName {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G"
}

export const MODE_NOTES = [
  NoteName.B,
  NoteName.E,
  NoteName.A,
  NoteName.D,
  NoteName.G,
  NoteName.C,
  NoteName.F
];

export enum ModeName {
  Aeolian = "Aeolian",
  Locrian = "Locrian",
  Ionian = "Ionian",
  Dorian = "Dorian",
  Phrygian = "Phrygian",
  Lydian = "Lydian",
  Mixolydian = "Mixolydian"
}

export const MODE_NAMES = [
  ModeName.Locrian,
  ModeName.Phrygian,
  ModeName.Aeolian,
  ModeName.Dorian,
  ModeName.Mixolydian,
  ModeName.Ionian,
  ModeName.Lydian
];

export enum Motion {
  Still = "still",
  StillEarly = "still-early",
  StillLate = "still-late",
  AdvanceIndividual = "advance-individual",
  RetreatIndividual = "retreat-individual",
  AdvanceAll = "advance-all",
  RetreatAll = "retreat-all"
}
