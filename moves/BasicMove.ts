// var fs = require('fs');

export class BasicMove implements Move {
  private tackleJSON: any = {
    Tackle: {
      description:
        "A physical attack in which the user charges and slams into the target with its whole body.",
      moveMechanics: ["damage"],
      moveCategory: "Physical",
      moveType: "Normal",
      pp: 35,
      accuracy: 100,
      power: 40
    }
  };

  // private fs = require('fs');
  // fs.readFileSync('../pokemondata/moves.json','utf8');

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

    var tackledata = JSON.parse(this.tackleJSON);
    const data = require("../pokemondata/moves.json");

    // TODO: use JSON pulled from filesystem instead of hardcoded example JSON
    // let JSONMoveObject: any =
    // fs.readFileSync('foo.txt','utf8');
    this.description = tackledata.description;
    this.moveType = tackledata.moveType;
    this.moveMechanic = tackledata.moveMechanics;
    this.maxPP = tackledata.maxPP;
    this.currPP = this.maxPP;
    this.accuracy = tackledata.accuracy;
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
