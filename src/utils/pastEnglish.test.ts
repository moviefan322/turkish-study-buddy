import {
  affirmativePastEnglish,
  negativePastEnglish,
  interrogativePastEnglish,
  interrogativeNegativePastEnglish,
} from "./pastEnglish";

describe("affirmativePastEnglish", () => {
  it("should handle the verb 'be' correctly for all pronouns", () => {
    expect(affirmativePastEnglish("I", "be")).toBe("I was");
    expect(affirmativePastEnglish("you", "be")).toBe("you were");
    expect(affirmativePastEnglish("he", "be")).toBe("he was");
    expect(affirmativePastEnglish("she", "be")).toBe("she was");
    expect(affirmativePastEnglish("it", "be")).toBe("it was");
    expect(affirmativePastEnglish("we", "be")).toBe("we were");
    expect(affirmativePastEnglish("they", "be")).toBe("they were");
  });

  it("should correctly conjugate a selection of irregular verbs", () => {
    expect(affirmativePastEnglish("I", "go")).toBe("I went");
    expect(affirmativePastEnglish("she", "take")).toBe("she took");
    expect(affirmativePastEnglish("they", "see")).toBe("they saw");
    expect(affirmativePastEnglish("we", "write")).toBe("we wrote");
    expect(affirmativePastEnglish("you", "break")).toBe("you broke");
  });

  it("should correctly conjugate verbs ending in 'y'", () => {
    expect(affirmativePastEnglish("I", "study")).toBe("I studied");
    expect(affirmativePastEnglish("he", "try")).toBe("he tried");
  });

  it("should correctly conjugate verbs ending in 'e'", () => {
    expect(affirmativePastEnglish("you", "love")).toBe("you loved");
    expect(affirmativePastEnglish("they", "live")).toBe("they lived");
  });

  it("should correctly conjugate regular verbs not ending in 'e' or 'y'", () => {
    expect(affirmativePastEnglish("she", "walk")).toBe("she walked");
    expect(affirmativePastEnglish("I", "play")).toBe("I played");
  });

  it("should handle additional cases or verbs with specific rules", () => {
    expect(affirmativePastEnglish("we", "hurry")).toBe("we hurried");
  });
});

describe("negativePastEnglish", () => {
  it("should handle the verb 'be' correctly for all pronouns", () => {
    expect(negativePastEnglish("I", "be")).toBe("I was not");
    expect(negativePastEnglish("you", "be")).toBe("you were not");
    expect(negativePastEnglish("he", "be")).toBe("he was not");
    expect(negativePastEnglish("she", "be")).toBe("she was not");
    expect(negativePastEnglish("it", "be")).toBe("it was not");
    expect(negativePastEnglish("we", "be")).toBe("we were not");
    expect(negativePastEnglish("they", "be")).toBe("they were not");
  });

  it("should correctly conjugate a selection of irregular verbs", () => {
    expect(negativePastEnglish("I", "go")).toBe("I did not go");
    expect(negativePastEnglish("she", "take")).toBe("she did not take");
    expect(negativePastEnglish("they", "see")).toBe("they did not see");
    expect(negativePastEnglish("we", "write")).toBe("we did not write");
  });

  it("should correctly conjugate verbs ending in 'y'", () => {
    expect(negativePastEnglish("I", "study")).toBe("I did not study");
    expect(negativePastEnglish("he", "try")).toBe("he did not try");
  });

  it("should correctly conjugate verbs ending in 'e'", () => {
    expect(negativePastEnglish("you", "love")).toBe("you did not love");
    expect(negativePastEnglish("they", "live")).toBe("they did not live");
  });

  it("should correctly conjugate regular verbs not ending in 'e' or 'y'", () => {
    expect(negativePastEnglish("she", "walk")).toBe("she did not walk");
    expect(negativePastEnglish("I", "play")).toBe("I did not play");
  });

  it("should handle additional cases or verbs with specific rules", () => {
    expect(negativePastEnglish("we", "hurry")).toBe("we did not hurry");
  });
});

describe("interrogativePastEnglish", () => {
  it("should handle the verb 'be' correctly for all pronouns", () => {
    expect(interrogativePastEnglish("I", "be")).toBe("was I?");
    expect(interrogativePastEnglish("you", "be")).toBe("were you?");
    expect(interrogativePastEnglish("he", "be")).toBe("was he?");
    expect(interrogativePastEnglish("she", "be")).toBe("was she?");
    expect(interrogativePastEnglish("it", "be")).toBe("was it?");
    expect(interrogativePastEnglish("we", "be")).toBe("were we?");
    expect(interrogativePastEnglish("they", "be")).toBe("were they?");
  });

  it("should correctly conjugate a selection of irregular verbs", () => {
    expect(interrogativePastEnglish("I", "go")).toBe("did I go?");
    expect(interrogativePastEnglish("she", "take")).toBe("did she take?");
    expect(interrogativePastEnglish("they", "see")).toBe("did they see?");
    expect(interrogativePastEnglish("we", "write")).toBe("did we write?");
  });

  it("should correctly conjugate verbs ending in 'y'", () => {
    expect(interrogativePastEnglish("I", "study")).toBe("did I study?");
    expect(interrogativePastEnglish("he", "try")).toBe("did he try?");
  });

  it("should correctly conjugate verbs ending in 'e'", () => {
    expect(interrogativePastEnglish("you", "love")).toBe("did you love?");
    expect(interrogativePastEnglish("they", "live")).toBe("did they live?");
  });

  it("should correctly conjugate regular verbs not ending in 'e' or 'y'", () => {
    expect(interrogativePastEnglish("she", "walk")).toBe("did she walk?");
    expect(interrogativePastEnglish("I", "play")).toBe("did I play?");
  });

  it("should handle additional cases or verbs with specific rules", () => {
    expect(interrogativePastEnglish("we", "hurry")).toBe("did we hurry?");
  });
});

describe("interrogativeNegativePastEnglish", () => {
  it("should handle the verb 'be' correctly for all pronouns", () => {
    expect(interrogativeNegativePastEnglish("I", "be")).toBe("wasn't I?");
    expect(interrogativeNegativePastEnglish("you", "be")).toBe("weren't you?");
    expect(interrogativeNegativePastEnglish("he", "be")).toBe("wasn't he?");
    expect(interrogativeNegativePastEnglish("she", "be")).toBe("wasn't she?");
    expect(interrogativeNegativePastEnglish("it", "be")).toBe("wasn't it?");
    expect(interrogativeNegativePastEnglish("we", "be")).toBe("weren't we?");
    expect(interrogativeNegativePastEnglish("they", "be")).toBe("weren't they?");
  });

  it("should correctly conjugate a selection of irregular verbs", () => {
    expect(interrogativeNegativePastEnglish("I", "go")).toBe("didn't I go?");
    expect(interrogativeNegativePastEnglish("she", "take")).toBe("didn't she take?");
    expect(interrogativeNegativePastEnglish("they", "see")).toBe("didn't they see?");
    expect(interrogativeNegativePastEnglish("we", "write")).toBe("didn't we write?");
  });

  it("should correctly conjugate verbs ending in 'y'", () => {
    expect(interrogativeNegativePastEnglish("I", "study")).toBe("didn't I study?");
    expect(interrogativeNegativePastEnglish("he", "try")).toBe("didn't he try?");
  });

  it("should correctly conjugate verbs ending in 'e'", () => {
    expect(interrogativeNegativePastEnglish("you", "love")).toBe("didn't you love?");
    expect(interrogativeNegativePastEnglish("they", "live")).toBe("didn't they live?");
  });

  it("should correctly conjugate regular verbs not ending in 'e' or 'y'", () => {
    expect(interrogativeNegativePastEnglish("she", "walk")).toBe("didn't she walk?");
    expect(interrogativeNegativePastEnglish("I", "play")).toBe("didn't I play?");
  });

  it("should handle additional cases or verbs with specific rules", () => {
    expect(interrogativeNegativePastEnglish("we", "hurry")).toBe("didn't we hurry?");
  });
});
