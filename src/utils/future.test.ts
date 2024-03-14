import { returnFutureSuffix } from "./future";

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
