class PokemonBuilder {
  public name: string;
  public currHP: number;
  //TODO: stats
  //TODO: MoveSet
  public nonVolStatus: string;
  //TODO: volStatus as JSON
  public bsm: BattleStatModifiers;

  constructor(name: string) {
    this.name = name;
    this.currHP = -1;
    this.nonVolStatus = "";
    this.bsm = new BattleStatModifiers();
  }

  public setCurrHP(currHP: number): PokemonBuilder {
    this.currHP = currHP;
    return this;
  }

  public setNonVolStatus(nonVolStatus: string): PokemonBuilder {
    this.nonVolStatus = nonVolStatus;
    return this;
  }

  public setBSM(bsm: BattleStatModifiers): PokemonBuilder {
    this.bsm = bsm;
    return this;
  }

  public build(): Pokemon {
    return new Pokemon(this);
  }
}
