import {
  futureNominalAffirmativeEng,
  futureNominalNegativeEng,
  futureNominalInterrogativeEng,
  futureNominalNegativeInterrogativeEng,
  futureNominalEnglishMaster,
  affirmativeFutureEnglish,
  negativeFutureEnglish,
  interrogativeFutureEnglish,
  interrogativeNegativeFutureEnglish,
  englishFutureTenseMaster,
} from "./futureEng";

describe("futureNominalAffirmativeEng", () => {
  it("should return the correct string", () => {
    expect(futureNominalAffirmativeEng("I", "happy")).toBe("I will be happy");
  });
});

describe("futureNominalNegativeEng", () => {
  it("should return the correct string", () => {
    expect(futureNominalNegativeEng("he", "sad")).toBe("he won't be sad");
  });
});

describe("futureNominalInterrogativeEng", () => {
  it("should return the correct string", () => {
    expect(futureNominalInterrogativeEng("they", "tired")).toBe("will they be tired?");
  });
});

describe("futureNominalNegativeInterrogativeEng", () => {
  it("should return the correct string", () => {
    expect(futureNominalNegativeInterrogativeEng("you", "hungry")).toBe("won't you be hungry?");
  });
});

describe("futureNominalEnglishMaster", () => {
  it("should return the correct string", () => {
    expect(futureNominalEnglishMaster("I", "happy")).toBe("I will be happy");
    expect(futureNominalEnglishMaster("he", "sad", "negative")).toBe("he won't be sad");
    expect(futureNominalEnglishMaster("they", "tired", "interrogative")).toBe("will they be tired?");
    expect(futureNominalEnglishMaster("you", "hungry", "negativeInterrogative")).toBe("won't you be hungry?");
  });
});

describe("affirmativeFutureEnglish", () => {
  it("should return the correct string", () => {
    expect(affirmativeFutureEnglish("I", "eat")).toBe("I will eat");
  });
});

describe("negativeFutureEnglish", () => {
  it("should return the correct string", () => {
    expect(negativeFutureEnglish("he", "sleep")).toBe("he will not sleep");
  });
});

describe("interrogativeFutureEnglish", () => {
  it("should return the correct string", () => {
    expect(interrogativeFutureEnglish("they", "run")).toBe("will they run?");
  });
});

describe("interrogativeNegativeFutureEnglish", () => {
  it("should return the correct string", () => {
    expect(interrogativeNegativeFutureEnglish("you", "jump")).toBe("won't you jump?");
  });
});

describe("englishFutureTenseMaster", () => {
  it("should return the correct string", () => {
    expect(englishFutureTenseMaster("I", "to eat")).toBe("I will eat");
    expect(englishFutureTenseMaster("he", "to sleep", "negative")).toBe("he will not sleep");
    expect(englishFutureTenseMaster("they", "to run", "interrogative")).toBe("will they run?");
    expect(englishFutureTenseMaster("you", "to jump", "negativeInterrogative")).toBe("won't you jump?");
    expect(englishFutureTenseMaster("he", "to sleep", "invalidMood")).toBe("Invalid mood.");
  });
});
