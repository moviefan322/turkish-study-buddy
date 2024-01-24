import { presentContinuous } from "./presentContinuous";

describe("presentContinuous", () => {
  test('converts verbs ending in "ie" to "ying"', () => {
    expect(presentContinuous("tie")).toBe("tying");
  });

  test('converts verbs ending in "e" to "ing" (dropping the "e")', () => {
    expect(presentContinuous("make")).toBe("making");
  });

  test('converts verbs ending in "y" to "ing"', () => {
    expect(presentContinuous("cry")).toBe("crying");
  });

  test("handles other verbs correctly", () => {
    expect(presentContinuous("run")).toBe("runing");
  });
});
