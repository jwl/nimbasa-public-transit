import { Pokemon } from "./Pokemon";
import { expect } from "chai";
import "mocha";
import { PokemonFactory } from "./PokemonFactory";

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
    expect(testPKMN.getCurrHP()).to.equal(39);
  });

  it("Pokemon are alive by default", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(testPKMN.isAlive()).to.equal(true);
  });

  it("Pokemon can return their nonvolatile and volatile status", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(false).to.equal(true);
  });

  it("Pokemon can return their moveset", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(false).to.equal(true);
  });

  it("Pokemon can return their stats", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(false).to.equal(true);
  });

  it("Pokemon can return their current battle stat modifiers", () => {
    const testPKMN = PokemonFactory.createPokemon("Charmander");
    expect(false).to.equal(true);
  });
});