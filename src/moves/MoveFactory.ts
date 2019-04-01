import { Move } from "../moves/Move";
import { BasicMove } from "../moves/BasicMove";
import { DataParser } from "../common/DataParser";

export class MoveFactory {
  public static createMove(name: string): Move {
    //TODO parse moves json
    let move: Move = new BasicMove(name);
    let data: any = DataParser.getObjectFromJSON("/pokemondata/moves.json");

    // TODO implement switch that creates move decorators

    return move;
  }
}
