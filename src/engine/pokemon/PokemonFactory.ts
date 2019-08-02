import { PokemonBuilder } from "../pokemon/PokemonBuilder";
import { Pokemon } from "./Pokemon";
import { MoveSet } from "../moves/MoveSet";

export class PokemonFactory {
  public static createPokemon(name: string): Pokemon {
    var pokemonBuilder: PokemonBuilder = new PokemonBuilder(name);
    var moveSet: MoveSet = new MoveSet(MoveSet.getMovesFromPokemon(name));

    return pokemonBuilder.setMoveSet(moveSet).build();
  }
}
