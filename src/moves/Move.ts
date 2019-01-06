export interface Move {
  getName(): string;
  getDescription(): string;
  getMoveType(): string;
  getMoveMechanic(): string[];
  getMaxPP(): number;
  getCurrPP(): number;
  getAccuracy(): number;
  getDamagePart(): any;
  getStatsChangePart(): any;
  getStatusEffectPart(): any;
}
