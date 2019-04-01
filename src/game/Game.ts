import { BattleSystemAction } from "../battlesystem/BattleSystemAction";
import { Player } from "../player/Player";
import { HumanPlayer } from "../player/HumanPlayer";
import { BotPlayer } from "../player/BotPlayer";
import { Pokemon } from "../pokemon/Pokemon";
import { PokemonFactory } from "../pokemon/PokemonFactory";
import { PokemonTeam } from "../pokemon/PokemonTeam";
import { GameState } from "./GameState";

export class Game {
  // private battleSystem: BattleSystemAction;
  private gameOver: boolean;
  private team1Surrendered: boolean;
  private team2Surrendered: boolean;
  private turnNumber: number;
  private player1!: Player;
  private player2!: Player;
  // TODO
  // private latestGameState: GameState;

  constructor() {
    this.gameOver = false;
    this.team1Surrendered = false;
    this.team2Surrendered = false;
    this.turnNumber = 0;

    // for now, hardcode teams and pokemon
    let pkmnA: Pokemon = PokemonFactory.createPokemon("Charmander");
    let pkmnB: Pokemon = PokemonFactory.createPokemon("Bulbasaur");
    let pkmnC: Pokemon = PokemonFactory.createPokemon("Pikachu");
    let list1: Pokemon[] = [pkmnA, pkmnB, pkmnC];
    let pkmn1: Pokemon = PokemonFactory.createPokemon("Caterpie");
    let pkmn2: Pokemon = PokemonFactory.createPokemon("Sandshrew");
    let pkmn3: Pokemon = PokemonFactory.createPokemon("Pidgey");
    let list2: Pokemon[] = [pkmn1, pkmn2, pkmn3];

    let trainer1: string = "Plucky Human";
    let trainer2: string = "A Cold Souless Machine";
    let team1 = new PokemonTeam(list1, trainer1);
    let team2 = new PokemonTeam(list2, trainer2);

    this.player1 = new HumanPlayer(team1, team2);
    this.player2 = new BotPlayer(team2, team1);

    // TODO: initiate gamestate
    // this.latestGameState = new GameState(this.player1.getMyTeam(), this.player2.getMyTeam(), new String[][])
  }

  public run(): void {
    let winner: Player;

    // Start game loop
    while (!this.gameOver) {
      this.turnNumber++;
      this.executeTurn();
      this.gameOver = this.isGameOver();
    }

    // Determine winner
    if (this.team1Surrendered) {
      console.log("Player 1 surrendered!");
      winner = this.player2;
    } else if (this.team2Surrendered) {
      console.log("Player 2 surrendered!");
      winner = this.player1;
    } else if (this.isTeamDead(this.player1.getMyTeam().getPokemonList())) {
      console.log(
        `All of ${this.player1
          .getMyTeam()
          .getTrainer()}'s Pokemon have fainted!`
      );
      winner = this.player2;
    } else {
      console.log(
        `All of ${this.player2
          .getMyTeam()
          .getTrainer()}'s Pokemon have fainted!`
      );
      winner = this.player1;
    }

    // Print end-of-game message
    console.log("Match over! Winner is: " + winner.getMyTeam().getTrainer());
  }

  public executeTurn(): void {
    console.log("This is turn " + this.turnNumber);
  }

  public isGameOver(): boolean {
    if (this.turnNumber >= 5) {
      return true;
    } else {
      return false;
    }
  }

  private isTeamDead(team: Pokemon[]): boolean {
    let teamDead: boolean = true;
    for (let pkmn of team) {
      if (pkmn.isAlive()) {
        teamDead = false;
        break;
      }
    }
    return teamDead;
  }
}
