import { Pokemon } from "../pokemon/Pokemon";
import { Move } from "../moves/Move";

export interface Action {
  /* Priority - used to determine action order based on lowest number.
    Owner - used to ensure actions are applied to the correct players
    Target - used to determine what pokemon to switch to or hit with an attack in an array
    Allied - Flag for determining if a move targets a friend or foe; True - own team; false - enemy team;

    moveInfo - Will contain move info if it is required
  */

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
