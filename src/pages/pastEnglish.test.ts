import { affirmativePastEnglish } from "./pastEnglish";

describe("affirmativePastEnglish", () => {
  // Testing with the full infinitive, including handling of "be" with correct forms for "was" and "were"
  it("should handle the verb 'be' correctly for all pronouns", () => {
    expect(affirmativePastEnglish("I", "be")).toBe("I was");
    expect(affirmativePastEnglish("you", "be")).toBe("you were");
    expect(affirmativePastEnglish("he", "be")).toBe("he was");
    expect(affirmativePastEnglish("she", "be")).toBe("she was");
    expect(affirmativePastEnglish("it", "be")).toBe("it was");
    expect(affirmativePastEnglish("we", "be")).toBe("we were");
    expect(affirmativePastEnglish("they", "be")).toBe("they were");
  });

  // Testing irregular verbs
  it("should correctly conjugate a selection of irregular verbs", () => {
    expect(affirmativePastEnglish("I", "go")).toBe("I went");
    expect(affirmativePastEnglish("she", "take")).toBe("she took");
    expect(affirmativePastEnglish("they", "see")).toBe("they saw");
    expect(affirmativePastEnglish("we", "write")).toBe("we wrote");
  });

  // Testing regular verbs
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

  // Edge cases or additional regular verbs
  it("should handle additional cases or verbs with specific rules", () => {
    // Note: Add any specific edge cases or additional regular verbs that may have unique rules
    expect(affirmativePastEnglish("we", "hurry")).toBe("we hurried");
  });
});
