import { fourWayVowelHarmony } from "./vowelHarmony";

describe("fourWayVowelHarmony", () => {
  test('returns "ı" for a verb stem ending in "a"', () => {
    expect(fourWayVowelHarmony("yap")).toBe("ı");
  });

  test('returns "ı" for a verb stem ending in "ı"', () => {
    expect(fourWayVowelHarmony("kapıt")).toBe("ı");
  });

  test('returns "i" for a verb stem ending in "e"', () => {
    expect(fourWayVowelHarmony("dene")).toBe("i");
  });

  test('returns "i" for a verb stem ending in "i"', () => {
    expect(fourWayVowelHarmony("değiştir")).toBe("i");
  });

  test('returns "u" for a verb stem ending in "o"', () => {
    expect(fourWayVowelHarmony("ol")).toBe("u");
  });

  test('returns "u" for a verb stem ending in "u"', () => {
    expect(fourWayVowelHarmony("dur")).toBe("u");
  });

  test('returns "ü" for a verb stem ending in "ö"', () => {
    expect(fourWayVowelHarmony("ört")).toBe("ü");
  });

  test('returns "ü" for a verb stem ending in "ü"', () => {
    expect(fourWayVowelHarmony("gülü")).toBe("ü");
  });

  test("throws an error for a verb stem without a Turkish vowel", () => {
    expect(() => fourWayVowelHarmony("xyz")).toThrow(
      "Invalid verb stem: xyz. The stem does not end with a Turkish vowel."
    );
  });
});
