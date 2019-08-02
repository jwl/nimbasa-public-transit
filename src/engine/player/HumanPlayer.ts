import { Player } from "./Player";
import { Action } from "../actions/Action";
import { PokemonTeam } from "../pokemon/PokemonTeam";

export class HumanPlayer implements Player {

  private myTeam: PokemonTeam;
  private opponentTeam: PokemonTeam;
  
  constructor(myTeam: PokemonTeam, opponentTeam: PokemonTeam) {
    this.myTeam = myTeam;
    this.opponentTeam = opponentTeam;
  }

  // public getAction(): Action {
  //   // TODO
  //   return new Action();
  // }

  public getMyTeam(): PokemonTeam {
    return this.myTeam;
  }

  public getOpponentTeam(): PokemonTeam {
    return this.opponentTeam;
  }

}