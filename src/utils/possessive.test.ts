import { possessivePronoun } from "./possessive";

describe("possessivePronoun", () => {
  it("should return the correct possessive pronoun for 'ben'", () => {
    expect(possessivePronoun("ben")).toBe("benim");
  });
  it("should return the correct possessive pronoun for 'sen'", () => {
    expect(possessivePronoun("sen")).toBe("senin");
  });
  it("should return the correct possessive pronoun for 'o'", () => {
    expect(possessivePronoun("o")).toBe("onun");
  });
  it("should return the correct possessive pronoun for 'biz'", () => {
    expect(possessivePronoun("biz")).toBe("bizim");
  });
  it("should return the correct possessive pronoun for 'siz'", () => {
    expect(possessivePronoun("siz")).toBe("sizin");
  });
  it("should return the correct possessive pronoun for 'onlar'", () => {
    expect(possessivePronoun("onlar")).toBe("onların");
  });
});
