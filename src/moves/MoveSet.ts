import { Move } from "../moves/Move";
import { MoveFactory } from "../moves/MoveFactory";
import { DataParser } from "../common/DataParser";

export class MoveSet {
  protected moveSet: Move[];
  protected maxMoves: number = 4;

  constructor(moveSetList: string[]) {
    this.moveSet = [];
    for (let move of moveSetList) {
      this.addMove(this.getMoveFromString(move));
    }
  }

  public getMoveFromString(moveString: string): Move {
    try {
      let newMove: Move = MoveFactory.createMove(moveString);
      return newMove;
    } catch (e) {
      throw new Error(e);
    }
  }

  public static getMovesFromPokemon(pokemonName: string): string[] {
    let data: any = DataParser.getObjectFromJSON("../pokemondata/moveset.json");
    let movesList: string[] = data[name];
    return movesList;
  }

  public addMove(move: Move): void {
    if (this.moveSet.length < this.maxMoves) {
      this.moveSet.push(move);
    } else {
      throw new Error("Already have max number of moves!");
    }
  }
}
