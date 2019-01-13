import { Pokemon } from "./Pokemon";

export class Stats {
  protected HP: number;
  protected attack: number;
  protected defense: number;
  protected spAtk: number;
  protected spDef: number;
  protected speed: number;
  protected type1: string;
  protected type2: string;

  constructor(name: string) {
    this.HP = -1;
    this.attack = -1;
    this.defense = -1;
    this.spAtk = -1;
    this.spDef = -1;
    this.speed = -1;
    this.type1 = "";
    this.type2 = "";

    var data: any;
    var path = require("path");

    const fs = require("fs");
    const fileContents = fs.readFileSync(
      path.resolve("./") + "/pokemondata/stats.json",
      "utf8"
    );

    try {
      const data = JSON.parse(fileContents);
      this.HP = data[name].hp;
      this.attack = data[name].attack;
      this.defense = data[name].defense;
      this.spAtk = data[name].spAtk;
    } catch (err) {
      console.error(err);
    }
  }

  public getHP(): number {
    return this.HP;
  }

  public getAttack(): number {
    return this.attack;
  }

  public getDefense(): number {
    return this.defense;
  }

  public getSpAtk(): number {
    return this.spAtk;
  }

  public getSpDef(): number {
    return this.spDef;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public getType1(): string {
    return this.type1;
  }

  public getType2(): string {
    return this.type2;
  }

  public getTypes(): string[] {
    //TODO
    return [];
  }

  public getStat(statName: string): number {
    //TODO
    return -1;
  }

  public getModifiedStat(pkmn: Pokemon, statName: string): number {
    //TODO
    return -1;
  }
}
