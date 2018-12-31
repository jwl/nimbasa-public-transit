class GameState {
  private team1: PokemonTeam;
  private team2: PokemonTeam;
  private log: string[][];

  constructor(team1: PokemonTeam, team2: PokemonTeam, log: string[][]) {
    this.team1 = team1;
    this.team2 = team2;
    this.log = log;
  }

  public getTeam1(): PokemonTeam {
    return this.team1;
  }

  public getTeam2(): PokemonTeam {
    return this.team2;
  }

  public getLog(): string[][] {
    return this.log;
  }

  public getLatestLog(): string[] {
    return this.log[this.log.length - 1];
  }
}
