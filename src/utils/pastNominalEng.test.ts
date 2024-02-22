import {
  returnConjugatedBePast,
  pastNominalAffirmativeEng,
  pastNominalNegativeEng,
  pastNominalInterrogativeEng,
  pastNominalNegativeInterrogativeEng,
} from "./pastNominalEng";

describe("returnConjugatedBePast", () => {
  it("should return 'was' for 'I'", () => {
    expect(returnConjugatedBePast("I")).toBe("was");
  });
  it("should return 'was' for 'he'", () => {
    expect(returnConjugatedBePast("he")).toBe("was");
  });
  it("should return 'was' for 'she'", () => {
    expect(returnConjugatedBePast("she")).toBe("was");
  });
  it("should return 'was' for 'it'", () => {
    expect(returnConjugatedBePast("it")).toBe("was");
  });
  it("should return 'were' for 'we'", () => {
    expect(returnConjugatedBePast("we")).toBe("were");
  });
  it("should return 'were' for 'they'", () => {
    expect(returnConjugatedBePast("they")).toBe("were");
  });
  it("should return 'were' for 'you'", () => {
    expect(returnConjugatedBePast("you")).toBe("were");
  });
  it("should return 'were' for 'you (f)'", () => {
    expect(returnConjugatedBePast("you (f)")).toBe("were");
  });
});

describe("pastNominalAffirmativeEng", () => {
  it("should return 'I was happy' for 'I' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("I", "happy")).toBe("I was happy");
  });
  it("should return 'he was happy' for 'he' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("he", "happy")).toBe("he was happy");
  });
  it("should return 'she was happy' for 'she' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("she", "happy")).toBe("she was happy");
  });
  it("should return 'it was happy' for 'it' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("it", "happy")).toBe("it was happy");
  });
  it("should return 'we were happy' for 'we' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("we", "happy")).toBe("we were happy");
  });
  it("should return 'they were happy' for 'they' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("they", "happy")).toBe("they were happy");
  });
  it("should return 'you were happy' for 'you' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("you", "happy")).toBe("you were happy");
  });
  it("should return 'you (f) were happy' for 'you (f)' and 'happy'", () => {
    expect(pastNominalAffirmativeEng("you (f)", "happy")).toBe("you (f) were happy");
  });
});

describe("pastNominalNegativeEng", () => {
  it("should return 'I wasn't happy' for 'I' and 'happy'", () => {
    expect(pastNominalNegativeEng("I", "happy")).toBe("I wasn't happy");
  });
  it("should return 'he wasn't happy' for 'he' and 'happy'", () => {
    expect(pastNominalNegativeEng("he", "happy")).toBe("he wasn't happy");
  });
  it("should return 'she wasn't happy' for 'she' and 'happy'", () => {
    expect(pastNominalNegativeEng("she", "happy")).toBe("she wasn't happy");
  });
  it("should return 'it wasn't happy' for 'it' and 'happy'", () => {
    expect(pastNominalNegativeEng("it", "happy")).toBe("it wasn't happy");
  });
  it("should return 'we weren't happy' for 'we' and 'happy'", () => {
    expect(pastNominalNegativeEng("we", "happy")).toBe("we weren't happy");
  });
  it("should return 'they weren't happy' for 'they' and 'happy'", () => {
    expect(pastNominalNegativeEng("they", "happy")).toBe("they weren't happy");
  });
  it("should return 'you weren't happy' for 'you' and 'happy'", () => {
    expect(pastNominalNegativeEng("you", "happy")).toBe("you weren't happy");
  });
  it("should return 'you (f) weren't happy' for 'you (f)' and 'happy'", () => {
    expect(pastNominalNegativeEng("you (f)", "happy")).toBe("you (f) weren't happy");
  });
});

describe("pastNominalInterrogativeEng", () => {
  it("should return 'was I happy?' for 'I' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("I", "happy")).toBe("was I happy?");
  });
  it("should return 'was he happy?' for 'he' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("he", "happy")).toBe("was he happy?");
  });
  it("should return 'was she happy?' for 'she' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("she", "happy")).toBe("was she happy?");
  });
  it("should return 'was it happy?' for 'it' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("it", "happy")).toBe("was it happy?");
  });
  it("should return 'were we happy?' for 'we' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("we", "happy")).toBe("were we happy?");
  });
  it("should return 'were they happy?' for 'they' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("they", "happy")).toBe("were they happy?");
  });
  it("should return 'were you happy?' for 'you' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("you", "happy")).toBe("were you happy?");
  });
  it("should return 'were you (f) happy?' for 'you (f)' and 'happy'", () => {
    expect(pastNominalInterrogativeEng("you (f)", "happy")).toBe("were you (f) happy?");
  });
});

describe("pastNominalNegativeInterrogativeEng", () => {
  it("should return 'wasn't I happy?' for 'I' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("I", "happy")).toBe("wasn't I happy?");
  });
  it("should return 'wasn't he happy?' for 'he' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("he", "happy")).toBe("wasn't he happy?");
  });
  it("should return 'wasn't she happy?' for 'she' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("she", "happy")).toBe("wasn't she happy?");
  });
  it("should return 'wasn't it happy?' for 'it' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("it", "happy")).toBe("wasn't it happy?");
  });
  it("should return 'weren't we happy?' for 'we' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("we", "happy")).toBe("weren't we happy?");
  });
  it("should return 'weren't they happy?' for 'they' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("they", "happy")).toBe("weren't they happy?");
  });
  it("should return 'weren't you happy?' for 'you' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("you", "happy")).toBe("weren't you happy?");
  });
  it("should return 'weren't you (f) happy?' for 'you (f)' and 'happy'", () => {
    expect(pastNominalNegativeInterrogativeEng("you (f)", "happy")).toBe("weren't you (f) happy?");
  });
})