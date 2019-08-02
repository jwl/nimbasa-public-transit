import { Action } from "../actions/Action";
import { PokemonTeam } from "../pokemon/PokemonTeam";

export interface Player {
  // getAction(): Action;
  getMyTeam(): PokemonTeam;
  getOpponentTeam(): PokemonTeam;
}
