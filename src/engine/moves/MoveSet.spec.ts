import { MoveSet } from "./MoveSet";
import { expect } from "chai";
import "mocha";

describe("Unit tests for class MoveSet", () => {
  it("Can retrieve a list of moves from a pokemon name", () => {
    const result = MoveSet.getMovesFromPokemon("Charmander");

    // use eql instead of equal for deep equality check
    // https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d
    expect(result).to.eql(["Scratch", "Growl", "Ember"]);
  });
});
