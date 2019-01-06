import { BattleStatModifiers } from "../pokemon/BattleStatsModifier";
import { PokemonBuilder } from "../pokemon/PokemonBuilder";

export class Pokemon {
  private name: string;
  private currHP: number;
  private nonVolStatus: string;
  private bsm: BattleStatModifiers;

  constructor(pokemonBuilder: PokemonBuilder) {
    this.name = pokemonBuilder.name;
    this.currHP = pokemonBuilder.currHP;
    //TODO: stats
    //TODO: moveset
    this.nonVolStatus = pokemonBuilder.nonVolStatus;
    //TODO: volstatus
    this.bsm = pokemonBuilder.bsm;
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

  isAlive(): boolean {
    if (this.currHP > 0) {
      return true;
    } else {
      return false;
    }
  }
}
