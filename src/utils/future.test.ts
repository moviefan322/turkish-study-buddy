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
})

describe("returnFutureSuffix", () => {
  it("should return the correct future suffix", () => {
    expect(returnFutureSuffix("ben", "yap")).toBe("yapacağım");
    expect(returnFutureSuffix("sen", "yap")).toBe("yapacaksın");
    expect(returnFutureSuffix("o", "yap")).toBe("yapacak");
    expect(returnFutureSuffix("biz", "yap")).toBe("yapacağız");
    expect(returnFutureSuffix("siz", "yap")).toBe("yapacaksınız");
    expect(returnFutureSuffix("onlar", "yap")).toBe("yapacaklar");
  });
})

describe("returnFutureSuffix", () => {
  it("should return the correct future suffix for -t stem verbs", () => {
    expect(returnFutureSuffix("ben", "git")).toBe("gideceğim");
    expect(returnFutureSuffix("sen", "git")).toBe("gideceksin");
    expect(returnFutureSuffix("o", "git")).toBe("gidecek");
    expect(returnFutureSuffix("biz", "git")).toBe("gideceğiz");
    expect(returnFutureSuffix("siz", "git")).toBe("gideceksiniz");
    expect(returnFutureSuffix("onlar", "git")).toBe("gidecekler");
  });
})

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
