import { Pokemon } from "./Pokemon";
import { expect } from "chai";
import "mocha";
import { PokemonFactory } from "./PokemonFactory";
import { MoveSet } from "../moves/MoveSet";

describe("Unit tests for class Pokemon", () => {
  it("Can be built from PokemonFactory from a given name", () => {
    try {
      const testPKMN = PokemonFactory.createPokemon("Charmander");
    } catch (e) {
      // TODO: somehow get Chai to throw a fail?
      console.error(e);
      expect(true).to.equal(false);
    }
  });

  it("Pokemon have names", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(testPKMN.getName()).to.equal("Charmander");
  });

  it("Pokemon have HP", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(testPKMN.getCurrHP()).to.equal(117);
  });

  it("Pokemon are alive by default", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(testPKMN.isAlive()).to.equal(true);
  });

  it("Pokemon can return their nonvolatile and volatile status", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    //TODO
    expect(false).to.equal(true);
  });

  it("Pokemon can return their moveset", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(testPKMN.getMoveSet().getMovesAsStrings()).to.have.members(["Scratch", "Growl", "Ember"]);
  });

  it("Pokemon can return their stats", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    let charmanderStats = testPKMN.getStats();
    // expect(charmanderStats).to.be.a('stats')
    expect(charmanderStats.getHP()).to.equal(117);
    expect(charmanderStats.getAttack()).to.equal(75);
    expect(charmanderStats.getDefense()).to.equal(66);
    expect(charmanderStats.getSpAtk()).to.equal(83);
    expect(charmanderStats.getSpDef()).to.equal(73);
    expect(charmanderStats.getSpeed()).to.equal(88);
  });

  it("Pokemon can return their current battle stat modifiers", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    //TODO
    expect(false).to.equal(true);
  });
});
