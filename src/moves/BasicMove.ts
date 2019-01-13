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
    this.description = "hello";
    this.moveType = "";
    this.moveMechanic = [];
    this.maxPP = -1;
    this.currPP = this.maxPP;
    this.accuracy = -1;

    var tackledata = JSON.parse(this.tackleJSON);
    var data: any;
    // const data = require("../pokemondata/moves.json");

    // TODO: use JSON pulled from filesystem instead of hardcoded example JSON
    // see https://flaviocopes.com/nodejs-parse-json/ for sync vs async file reading

    var path = require("path");
    // console.log("./ = %s", path.resolve("./"));
    // console.log("__dirname = %s", path.resolve(__dirname));

    const fs = require("fs");
    const fileContents = fs.readFileSync(
      path.resolve("./") + "/pokemondata/moves.json",
      "utf8"
    );

    try {
      const data = JSON.parse(fileContents);
      this.description = data[name].description;
      this.moveType = data[name].moveType;
      this.moveMechanic = data[name].moveMechanics;
      this.maxPP = data[name].pp;
      this.currPP = this.maxPP;
      this.accuracy = data[name].accuracy;
    } catch (err) {
      console.error(err);
    }
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
