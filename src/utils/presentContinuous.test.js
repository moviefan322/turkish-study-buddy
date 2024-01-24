import { presentContinuous, conjugateTurkishVerb } from "./presentContinuous";

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

  test('converts verbs ending in vowel+consonant to v+c+c+"ing"', () => {
    expect(presentContinuous("run")).toBe("running");
    expect(presentContinuous("sit")).toBe("sitting");
    expect(presentContinuous("stab")).toBe("stabbing");
  });

  test('converts verbs ending in "vowel + y"/vowel + w to "ing"', () => {
    expect(presentContinuous("stay")).toBe("staying");
    expect(presentContinuous("show")).toBe("showing");
  });

  test('converts verbs ending in "c" to "cking"', () => {
    expect(presentContinuous("picnic")).toBe("picnicking");
  });

  // test('Does not double the letter if the word has two or more syllables and the last part is not stressed"', () => {
  //   expect(presentContinuous("benefit")).toBe("benefiting");
  //   expect(presentContinuous("visit")).toBe("visiting");
  // });

  test("handles other verbs correctly", () => {
    expect(presentContinuous("fuck")).toBe("fucking");
  });
});

describe("conjugateTurkishVerb", () => {
  test("conjugates yapmak in 1st person", () => {
    expect(conjugateTurkishVerb("yapmak", "Ben")).toBe("yapıyorum");
  });
});
