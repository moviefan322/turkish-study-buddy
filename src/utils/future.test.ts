import { returnFutureSuffix, returnFutureSuffixNegative } from "./future";

describe("returnFutureSuffix", () => {
  it("should return the correct future suffix", () => {
    expect(returnFutureSuffix("ben", "gel")).toBe("geleceğim");
    expect(returnFutureSuffix("sen", "gel")).toBe("geleceksin");
    expect(returnFutureSuffix("o", "gel")).toBe("gelecek");
    expect(returnFutureSuffix("biz", "gel")).toBe("geleceğiz");
    expect(returnFutureSuffix("siz", "gel")).toBe("geleceksiniz");
    expect(returnFutureSuffix("onlar", "gel")).toBe("gelecekler");
  });
});

describe("returnFutureSuffixNegative", () => {
  it("should return the correct negative future suffix", () => {
    expect(returnFutureSuffixNegative("ben", "gel")).toBe("gelmeyeceğim");
    expect(returnFutureSuffixNegative("sen", "gel")).toBe("gelmeyeceksin");
    expect(returnFutureSuffixNegative("o", "gel")).toBe("gelmeyecek");
    expect(returnFutureSuffixNegative("biz", "gel")).toBe("gelmeyeceğiz");
    expect(returnFutureSuffixNegative("siz", "gel")).toBe("gelmeyeceksiniz");
    expect(returnFutureSuffixNegative("onlar", "gel")).toBe("gelmeyecekler");
  });
});
