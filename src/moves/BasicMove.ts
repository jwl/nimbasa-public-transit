// var fs = require('fs');
import { Move } from "./Move";

export class BasicMove implements Move {
  private tackleJSON =
    '{ "description": "A physical attack in which the user charges and slams into the target with its whole body.", "moveMechanics": ["damage"], "moveCategory": "Physical", "moveType": "Normal", "pp": 35, "accuracy": 100, "power": 40 }';

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
    // const data = require("../pokemondata/moves.json");

    // TODO: use JSON pulled from filesystem instead of hardcoded example JSON
    // see https://flaviocopes.com/nodejs-parse-json/ for sync vs async file reading
    // const fs = require("fs");
    // fs.readFile("../../pokemondata/moves.json", "utf8", (err, fileContents) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   try {
    //     const data = JSON.parse(fileContents);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // });

    this.description = tackledata.description;
    this.moveType = tackledata.moveType;
    this.moveMechanic = tackledata.moveMechanics;
    this.maxPP = tackledata.pp;
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
