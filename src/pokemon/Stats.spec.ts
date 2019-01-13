import { Stats } from "./Stats";
import { expect } from "chai";
import "mocha";

describe("Unit tests for class Stats", () => {
  it("Can get HP", () => {
    const result = new Stats("Charmander");
    expect(result.getHP()).to.equal(39);
  });

  it("Can get attack value", () => {
    const result = new Stats("Charmander");
    expect(result.getAttack()).to.equal(52);
  });

  it("Can get defense value", () => {
    const result = new Stats("Charmander");
    expect(result.getDefense()).to.equal(43);
  });

  it("Can get spAtk value", () => {
    const result = new Stats("Charmander");
    expect(result.getSpAtk()).to.equal(60);
  });

  it("Can get spDef value", () => {
    const result = new Stats("Charmander");
    expect(result.getSpDef()).to.equal(50);
  });

  it("Can get speed value", () => {
    const result = new Stats("Charmander");
    expect(result.getSpeed()).to.equal(65);
  });
});
