import { CharUtil as CU } from "parsecco";
import { Excello as XL } from "../src/excello";
import { AST } from "../src/ast";
import { assert, expect } from "chai";
import "mocha";

describe("addrR", () => {
  it("should consume an R1 address", () => {
    const input = new CU.CharStream("R10C11");
    const output = XL.addrR(input);
    switch (output.tag) {
      case "success":
        expect(output.result).to.equal(10);
        break;
      default:
        assert.fail();
    }
  });

  it("should not consume an A1 address", () => {
    const input = new CU.CharStream("B33");
    const output = XL.addrR(input);
    switch (output.tag) {
      case "success":
        assert.fail();
      default:
        assert(true);
    }
  });
});

describe("addrC", () => {
  it("should consume an R1 address", () => {
    const input = new CU.CharStream("C11");
    const output = XL.addrC(input);
    switch (output.tag) {
      case "success":
        expect(output.result).to.equal(11);
        break;
      default:
        assert.fail();
    }
  });

  it("should not consume an A1 address", () => {
    const input = new CU.CharStream("B33");
    const output = XL.addrC(input);
    switch (output.tag) {
      case "success":
        assert.fail();
      default:
        assert(true);
    }
  });
});

describe("addrMode", () => {
  it("should return absolute address mode for $", () => {
    const input = new CU.CharStream("$");
    const output = XL.addrMode(input);
    switch (output.tag) {
      case "success":
        expect(output.result).to.equal(AST.AbsoluteAddress);
        break;
      default:
        assert.fail();
    }
  });

  it("should return relative address mode for anything else", () => {
    const input = new CU.CharStream("B33");
    const output = XL.addrMode(input);
    switch (output.tag) {
      case "success":
        expect(output.result).to.equal(AST.RelativeAddress);
        break;
      default:
        // should never fail
        assert.fail();
    }
  });
});

describe("addrA1", () => {
  it("should consume an ordinary A1 address", () => {
    const input = new CU.CharStream("V43");
    const output = XL.addrA1(input);
    switch (output.tag) {
      case "success":
        expect(output.result.row).to.equal(43);
        expect(output.result.rowMode).to.equal(AST.RelativeAddress);
        expect(output.result.column).to.equal(22);
        expect(output.result.colMode).to.equal(AST.RelativeAddress);
        break;
      default:
        assert.fail();
    }
  });

  it("should consume an absolutely-addressed A1 address", () => {
    const input = new CU.CharStream("$C$12");
    const output = XL.addrA1(input);
    switch (output.tag) {
      case "success":
        expect(output.result.row).to.equal(12);
        expect(output.result.rowMode).to.equal(AST.AbsoluteAddress);
        expect(output.result.column).to.equal(3);
        expect(output.result.colMode).to.equal(AST.AbsoluteAddress);
        break;
      default:
        assert.fail();
    }
  });

  it("should consume an A1 address with mixed modes (case 1)", () => {
    const input = new CU.CharStream("$B1");
    const output = XL.addrA1(input);
    switch (output.tag) {
      case "success":
        expect(output.result.row).to.equal(1);
        expect(output.result.rowMode).to.equal(AST.RelativeAddress);
        expect(output.result.column).to.equal(2);
        expect(output.result.colMode).to.equal(AST.AbsoluteAddress);
        break;
      default:
        assert.fail();
    }
  });

  it("should consume an A1 address with mixed modes (case 2)", () => {
    const input = new CU.CharStream("AA$770");
    const output = XL.addrA1(input);
    switch (output.tag) {
      case "success":
        expect(output.result.row).to.equal(770);
        expect(output.result.rowMode).to.equal(AST.AbsoluteAddress);
        expect(output.result.column).to.equal(27);
        expect(output.result.colMode).to.equal(AST.RelativeAddress);
        break;
      default:
        assert.fail();
    }
  });
});

describe("addrR1C1", () => {
  it("should consume an R1 address", () => {
    const input = new CU.CharStream("R23C4");
    const output = XL.addrR1C1(input);
    switch (output.tag) {
      case "success":
        expect(output.result.row).to.equal(23);
        expect(output.result.rowMode).to.equal(AST.RelativeAddress);
        expect(output.result.column).to.equal(4);
        expect(output.result.colMode).to.equal(AST.RelativeAddress);
        break;
      default:
        assert.fail();
    }
  });

  it("should not consume an A1 address", () => {
    const input = new CU.CharStream("R1");
    const output = XL.addrR1C1(input);
    switch (output.tag) {
      case "success":
        assert.fail();
      default:
        assert(true);
    }
  });
});
