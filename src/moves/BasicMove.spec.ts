import { BasicMove } from "./BasicMove";
import { expect } from "chai";
import "mocha";

describe("Hello function", () => {
  it("Has a name variable", () => {
    const result = new BasicMove("Tackle");
    expect(result.getName()).to.equal("Tackle");
    // expect(result).to.equal('Hello world!');
  });
});
