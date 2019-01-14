import { Stats } from "./Stats";
import { expect } from "chai";
import "mocha";

describe("Unit tests for class Stats", () => {
  // See https://bulbapedia.bulbagarden.net/wiki/Statistic#In_Generation_III_onward
  // for formula to caculate base stats to level equivalents

  it("Can get HP", () => {
    const result = new Stats("Charmander");
    // base HP of 39 equals 117 HP at level 50
    expect(result.getHP()).to.equal(117);
  });

  it("Can get attack value", () => {
    const result = new Stats("Charmander");
    // attack of 52 results in effective attack of 75.75 or just 75
    expect(result.getAttack()).to.equal(75);
  });

  it("Can get defense value", () => {
    const result = new Stats("Charmander");
    // base defense of 43 results in effective def of 66 at level 50
    expect(result.getDefense()).to.equal(66);
  });

  it("Can get spAtk value", () => {
    const result = new Stats("Charmander");
    // base spAtk of 60 results in spAtk of 83 at level 50
    expect(result.getSpAtk()).to.equal(83);
  });

  it("Can get spDef value", () => {
    const result = new Stats("Charmander");
    // base spDef of 50 results in spDef of 73 at level 50
    expect(result.getSpDef()).to.equal(73);
  });

  it("Can get speed value", () => {
    const result = new Stats("Charmander");
    // base speed of 65 results in speed of 88 at level 50
    expect(result.getSpeed()).to.equal(88);
  });

  it("Can return type1", () => {
    const result = new Stats("Bulbasaur");
    expect(result.getType1()).to.equal("Grass");
  });

  it("Can return type2, if it exists", () => {
    const result = new Stats("Bulbasaur");
    expect(result.getType2()).to.equal("Poison");
    const result2 = new Stats("Charmander");
    expect(result2.getType2()).to.equal("");
  });

  it("getTypes returns all types as a list", () => {
    const result = new Stats("Bulbasaur");
    expect(result.getTypes()).to.deep.equal(["Grass", "Poison"]);
    const result2 = new Stats("Charmander");
    expect(result2.getTypes()).to.deep.equal(["Fire"]);
  });

  it("getStat can retrieve any named stat", () => {
    const result = new Stats("Squirtle");
    expect(result.getStat("attack")).to.equal(71);
    expect(result.getStat("defense")).to.equal(88);
    expect(result.getStat("spAtk")).to.equal(73);
    expect(result.getStat("spDef")).to.equal(87);
    expect(result.getStat("speed")).to.equal(66);
    expect(result.getStat("accuracy")).to.equal(100);
    expect(result.getStat("evasion")).to.equal(100);
    expect(result.getStat.bind(result, "badStat")).to.throw(
      "That stat doesn't exist!"
    );
  });
});
