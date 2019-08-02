import { BattleStatModifiers } from "../pokemon/BattleStatsModifier";
import { PokemonBuilder } from "../pokemon/PokemonBuilder";
import { Stats } from "../pokemon/Stats";
import { MoveSet } from "../moves/MoveSet";

export class Pokemon {
  private name: string;
  private currHP: number;
  private stats: Stats;
  private moveSet: MoveSet;
  private nonVolStatus: string;
  private bsm: BattleStatModifiers;

  constructor(pokemonBuilder: PokemonBuilder) {
    this.name = pokemonBuilder.name;
    this.currHP = pokemonBuilder.currHP;
    this.stats = pokemonBuilder.stats;
    this.moveSet = pokemonBuilder.moveSet;
    this.nonVolStatus = pokemonBuilder.nonVolStatus;
    //TODO: volstatus
    this.bsm = pokemonBuilder.bsm;
  }

  getStats(): Stats {
    return this.stats;
  }

  getMoveSet(): MoveSet {
    return this.moveSet;
  }

  setMoveSet(newMoveSet: MoveSet) {
    this.moveSet = newMoveSet;
  }

  getName(): string {
    return this.name;
  }

  getCurrHP(): number {
    return this.currHP;
  }

  setCurrHP(newHealth: number) {
    this.currHP = newHealth;
    if (this.currHP < 0) {
      this.currHP = 0;
    }
  }

  getBSM(): BattleStatModifiers {
    return this.bsm;
  }

  isAlive(): boolean {
    if (this.currHP > 0) {
      return true;
    } else {
      return false;
    }
  }

  getNonVolStatus(): string {
    return this.nonVolStatus;
  }

  setNonVolStatus(newStatus: string) {
    this.nonVolStatus = newStatus;
  }
}
