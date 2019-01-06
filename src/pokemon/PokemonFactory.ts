import { PokemonBuilder } from "../pokemon/PokemonBuilder";
import { Pokemon } from "./Pokemon";

export class PokemonFactory {
  public static createPokemon(name: string): Pokemon {
    var pokemonBuilder: PokemonBuilder = new PokemonBuilder(name);

    // TODO implement moveset and add moveset decorator

    return pokemonBuilder.build();
  }
}
