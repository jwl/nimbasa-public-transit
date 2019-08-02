import { Pokemon } from "../pokemon/Pokemon";

export class PokemonTeam {
  // TODO: list of Pokemon objects, how to do lists in Typescript?
  private team: Pokemon[];
  private trainer: string;
  private activePokemon: Pokemon;

  constructor(team: Pokemon[], trainer: string) {
    //TODO: implement error checks for team.length > 6 and an empty team
    this.team = team;
    this.trainer = trainer;
    this.activePokemon = team[0];
  }

  public getActivePokemon(): Pokemon {
    return this.activePokemon;
  }

  public getActivePokemonPosition(): number {
    return this.team.indexOf(this.getActivePokemon());
  }

  public getTrainer(): string {
    return this.trainer;
  }

  public switchActivePokemon(newActivePokemon: Pokemon): void {
    // TODO: implement with error checking
  }

  public getPokemonFromList(position: number): Pokemon {
    // TODO: error checking for bounds
    // note that position will be this.team[position-1]
    return this.team[position - 1];
  }

  public getPokemonList(): Pokemon[] {
    return this.team;
  }
}
