interface Move {
  getName(): string;
  getDescription(): string;
  getMoveType(): string;
  getMoveMechanic(): string[];
  getMaxPP(): number;
  getCurrPP(): number;
  getAccuracy(): number;
  // TODO: figure out how to do JSON and implement the following:
  // getDamagePart(), getStatsChangePart(), getStatusEffectPart()
}
