import { Action } from "../actions/Action";
import { PokemonTeam } from "../pokemon/PokemonTeam";

interface Player {
  getAction(): Action;
  getMyTeam(): PokemonTeam;
  getOpponentTeam(): PokemonTeam;
}
