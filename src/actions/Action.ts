import { Pokemon } from "../pokemon/Pokemon";
import { Move } from "../moves/Move";
import { getPriority } from "os";

export interface Action {
  //TODO: implement as an abstract class
  priority: number;
  trainer: string;
  actor: Pokemon;
  target: number;
  allied: boolean;
  moveInfo: Move;
  actionType: string;

  getPriority(): number;
  //TODO implement following method signatures:
  /* public int getPriority(){return priority;}
  public String getTrainer(){return trainer;}
  public Pokemon getActor(){return actor;}
  public int getTarget(){return target;}
  public boolean getTeamFlag(){return allied;}
  public String getActionType(){return actionType;}
  public Move getMoveInfo(){return moveInfo;}
  public void setPriority(int priority){this.priority = priority;} */
}
