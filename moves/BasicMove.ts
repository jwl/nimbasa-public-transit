// var fs = require('fs');
class BattleMove implements Move {
  private name: string;
  private description: string;
  private moveType: string;
  private moveMechanic: string[];
  private maxPP: number;
  private currPP: number;
  private accuracy: number;
  private damagePart: any;
  private statsChangePart: any;
  private statusChangePart: any;

  constructor(name: string) {
    this.name = name;

    // TODO implement importing JSON files and properly initializing all fields
    // let JSONMoveObject: any =
    this.description = "";
    this.moveType = "";
    this.moveMechanic = [""];
    this.maxPP = -1;
    this.currPP = -1;
    this.accuracy = -1;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getMoveType(): string {
    return this.moveType;
  }

  getMoveMechanic(): string[] {
    return this.moveMechanic;
  }

  getMaxPP(): number {
    return this.maxPP;
  }

  getCurrPP(): number {
    return this.currPP;
  }

  getAccuracy(): number {
    return this.accuracy;
  }

  getDamagePart(): any {
    return this.damagePart;
  }

  getStatsChangePart(): any {
    return this.statsChangePart;
  }

  getStatusEffectPart(): any {
    return this.statusChangePart;
  }
}
