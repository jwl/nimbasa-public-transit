import { BasicMove } from "./BasicMove";
import { expect } from "chai";
import "mocha";

describe("BasicMove unit tests", () => {
  it("Has a name variable", () => {
    const result = new BasicMove("Tackle");
    expect(result.getName()).to.equal("Tackle");
    // expect(result).to.equal('Hello world!');
  });

  it("Has a description", () => {
    // Implement test setup/initialization and implement the rest of tests verifying fields
    expect(false).to.equal(true);
  });
});
