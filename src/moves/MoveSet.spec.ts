import { MoveSet } from "./MoveSet";
import { expect } from "chai";
import "mocha";

describe("Unit tests for class Stats", () => {
  it("Can retrieve a list of moves from a pokemon name", () => {
    const result = MoveSet.getMovesFromPokemon("Charmander");
    expect(result).to.equal(["Scratch", "Growl", "Ember"]);
  });
});
