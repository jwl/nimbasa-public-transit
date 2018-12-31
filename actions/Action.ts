interface Action {
  //TODO: implement as an abstract class
  priority: number;
  trainer: string;
  actor: Pokemon;
  target: number;
  allied: boolean;
  moveInfo: Move;
  actionType: string;
}
