import { Pokemon } from "../pokemon/Pokemon";
import { Move } from "../moves/Move";

export abstract class Action {
  /* Priority - used to determine action order based on lowest number.
    Owner - used to ensure actions are applied to the correct players
    Target - used to determine what pokemon to switch to or hit with an attack in an array
    Allied - Flag for determining if a move targets a friend or foe; True - own team; false - enemy team;

    moveInfo - Will contain move info if it is required
  */

  //TODO: implement as an abstract class
  protected priority: number;
  protected trainer: string;
  protected actor: Pokemon;
  protected target: number;
  protected allied: boolean;
  protected moveInfo: Move;
  protected actionType: string;

  constructor(
    priority: number,
    trainer: string,
    actor: Pokemon,
    target: number,
    allied: boolean,
    moveInfo: Move,
    actionType: string
  ) {
    this.priority = priority;
    this.trainer = trainer;
    this.actor = actor;
    this.target = target;
    this.allied = allied;
    this.moveInfo = moveInfo;
    this.actionType = actionType;
    // this.setVariables(
    //   priority,
    //   trainer,
    //   actor,
    //   target,
    //   allied,
    //   moveInfo,
    //   actionType
    // );
  }

  public setVariables(
    priority: number,
    trainer: string,
    actor: Pokemon,
    target: number,
    allied: boolean,
    moveInfo: Move,
    actionType: string
  ) {
    this.priority = priority;
    this.trainer = trainer;
    this.actor = actor;
    this.target = target;
    this.allied = allied;
    this.moveInfo = moveInfo;
    this.actionType = actionType;
  }

  public getPriority(): number {
    return this.priority;
  }

  public getTrainer(): string {
    return this.trainer;
  }

  public getActor(): Pokemon {
    return this.actor;
  }

  public getTarget(): number {
    return this.target;
  }

  public getTeamFlag(): boolean {
    return this.allied;
  }

  public getActionType(): string {
    return this.actionType;
  }

  public getMoveInfo(): Move {
    return this.moveInfo;
  }

  public setPriority(priority: number): void {
    this.priority = priority;
  }
}
