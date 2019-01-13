import { BasicMove } from "./BasicMove";
import { expect } from "chai";
import "mocha";

// expect(result.getMoveMechanic()[0]).to.equal("damage");
// expect(result.getMoveType()).to.equal("Normal");
// expect(result.getMaxPP()).to.equal(35);
// expect(result.getCurrPP()).to.equal(35);
// expect(result.getAccuracy()).to.equal(100);

describe("Unit tests for class BasicMove", () => {
  it("Has a name", () => {
    const result = new BasicMove("Tackle");
    expect(result.getName()).to.equal("Tackle");
  });

  it("Has a description", () => {
    const result = new BasicMove("Growl");
    expect(result.getDescription()).to.equal(
      "The user growls in an endearing way, making opposing Pokémon less wary. This lowers their Attack stat."
    );
  });

  it("Has a move mechanic", () => {
    const result = new BasicMove("Tackle");
    expect(result.getMoveMechanic()[0]).to.equal("damage");
  });

  it("Has a move type", () => {
    const result = new BasicMove("Tackle");
    expect(result.getMoveType()).to.equal("Normal");
  });

  it("Has a max PP", () => {
    const result = new BasicMove("Tackle");
    expect(result.getMaxPP()).to.equal(35);
  });

  it("Has a currPP that's equal to maxPP", () => {
    const result = new BasicMove("Tackle");
    expect(result.getCurrPP()).to.equal(result.getMaxPP());
  });

  it("Has an accuracy stat", () => {
    const result = new BasicMove("Tackle");
    expect(result.getAccuracy()).to.equal(100);
  });
});
