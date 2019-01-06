import { BasicMove } from "./BasicMove";
import { expect } from "chai";
import "mocha";

describe("Unit tests for class BasicMove", () => {
  it("Has all specified fields and get functions", () => {
    const result = new BasicMove("Tackle");
    expect(result.getName()).to.equal("Tackle");
    expect(result.getDescription()).to.equal(
      "A physical attack in which the user charges and slams into the target with its whole body."
    );
    expect(result.getMoveMechanic()[0]).to.equal("damage");
    expect(result.getMoveType()).to.equal("Normal");
    expect(result.getMaxPP()).to.equal(35);
    expect(result.getCurrPP()).to.equal(35);
    expect(result.getAccuracy()).to.equal(100);
  });
});
