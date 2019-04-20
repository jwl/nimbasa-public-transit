import { Pokemon } from "./Pokemon";

export class Stats {
  protected hp: number;
  protected attack: number;
  protected defense: number;
  protected spAtk: number;
  protected spDef: number;
  protected speed: number;
  protected type1: string;
  protected type2: string;

  // Set all pokemon to level 50, 150 EVs, assume a neutral nature (hardy, docile, serious, bashful, quirky)
  private level = 50;
  private EVs = 150;
  private nature = 1.0;

  constructor(name: string) {
    this.hp = -1;
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
      this.hp = data[name].hp;
      this.attack = data[name].attack;
      this.defense = data[name].defense;
      this.spAtk = data[name].spAtk;
      this.spDef = data[name].spDef;
      this.speed = data[name].speed;
      this.type1 = data[name].type1;
      this.type2 = data[name].type2;
    } catch (err) {
      console.error(err);
    }
  }

  // https://bulbapedia.bulbagarden.net/wiki/Statistic#In_Generation_III_onward
  public getHP(): number {
    return Math.floor(
      (2 * this.hp + this.EVs / 4) * (this.level / 100) + this.level + 10
    );
  }

  public getAttack(): number {
    return Math.floor(
      ((2 * this.attack + this.EVs / 4) * (this.level / 100) + 5) * this.nature
    );
  }

  public getDefense(): number {
    return Math.floor(
      ((2 * this.defense + this.EVs / 4) * (this.level / 100) + 5) * this.nature
    );
  }

  public getSpAtk(): number {
    return Math.floor(
      ((2 * this.spAtk + this.EVs / 4) * (this.level / 100) + 5) * this.nature
    );
  }

  public getSpDef(): number {
    return Math.floor(
      ((2 * this.spDef + this.EVs / 4) * (this.level / 100) + 5) * this.nature
    );
  }

  public getSpeed(): number {
    return Math.floor(
      ((2 * this.speed + this.EVs / 4) * (this.level / 100) + 5) * this.nature
    );
  }

  public getType1(): string {
    return this.type1;
  }

  public getType2(): string {
    return this.type2;
  }

  public getTypes(): string[] {
    var types: string[] = [];
    types.push(this.getType1());
    if (!(this.getType2() === "")) {
      types.push(this.getType2());
    }
    return types;
  }

  public getStat(statName: string): number {
    switch (statName) {
      case "attack": {
        return this.getAttack();
        break;
      }
      case "defense": {
        return this.getDefense();
        break;
      }
      case "spAtk": {
        return this.getSpAtk();
        break;
      }
      case "spDef": {
        return this.getSpDef();
        break;
      }
      case "speed": {
        return this.getSpeed();
        break;
      }
      case "accuracy": {
        return 100;
        break;
      }
      case "evasion": {
        return 100;
        break;
      }
      default:
        throw new Error("That stat doesn't exist!");
        break;
    }
    return -1;
  }

  public getModifiedStat(pkmn: Pokemon, statName: string): number {
    //TODO
    var baseStat: number = this.getStat(statName);
    var stageMultiplier: number[];
    switch (statName) {
      case "accuracy": {
      }
      case "evasion": {
        // stageMultiplier = Arrays.asList((Double) 0.333, (Double) 0.375, (Double) 0.429, (Double) 0.500, (Double) 0.600, (Double) 0.750, (Double) 1.000,
        // (Double) 1.333, (Double) 1.667, (Double) 2.000, (Double) 2.333,(Double) 2.667, (Double) 3.000);
        break;
      }
      case "attack": {
      }
      case "defense": {
      }
      case "spAtk": {
      }
      case "spDef": {
      }
      case "speed": {
      }
      default: {
        // stageMultiplier = Arrays.asList((Double) 0.250, (Double) 0.286, (Double) 0.333, (Double) 0.400, (Double) 0.500, (Double) 0.667,
        // (Double) 1.000, (Double) 1.5, (Double) 2.0, (Double) 2.5, (Double) 3.0, (Double) 3.5, (Double) 4.0);
        stageMultiplier = [
          0.25,
          0.286,
          0.333,
          0.4,
          0.5,
          0.667,
          1.0,
          1.5,
          2.0,
          2.5,
          3.0,
          3.5,
          4.0
        ];
      }
    }
    return -1;
  }
}
