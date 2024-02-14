import {
  possessivePronoun,
  possessiveNounSuffix,
  possessivePronounEnglish,
  englishPossessiveMaster,
  turkishPossessiveMaster,
  possessiveMaster,
} from "./possessive";

describe("possessivePronoun", () => {
  it("should return the correct possessive pronoun for 'ben'", () => {
    expect(possessivePronoun("ben")).toBe("benim");
  });
  it("should return the correct possessive pronoun for 'sen'", () => {
    expect(possessivePronoun("sen")).toBe("senin");
  });
  it("should return the correct possessive pronoun for 'o'", () => {
    expect(possessivePronoun("o")).toBe("onun");
  });
  it("should return the correct possessive pronoun for 'biz'", () => {
    expect(possessivePronoun("biz")).toBe("bizim");
  });
  it("should return the correct possessive pronoun for 'siz'", () => {
    expect(possessivePronoun("siz")).toBe("sizin");
  });
  it("should return the correct possessive pronoun for 'onlar'", () => {
    expect(possessivePronoun("onlar")).toBe("onların");
  });
});

describe("possessiveNounSuffix", () => {
  it("should return the correct possessive noun suffix for 'ben'", () => {
    expect(possessiveNounSuffix("ben", "baba")).toBe("babam");
    expect(possessiveNounSuffix("ben", "anne")).toBe("annem");
    expect(possessiveNounSuffix("ben", "manto")).toBe("mantom");
    expect(possessiveNounSuffix("ben", "ütü")).toBe("ütüm");
    expect(possessiveNounSuffix("ben", "anahtar")).toBe("anahtarım");
    expect(possessiveNounSuffix("ben", "ev")).toBe("evim");
    expect(possessiveNounSuffix("ben", "kol")).toBe("kolum");
    expect(possessiveNounSuffix("ben", "köy")).toBe("köyüm");
  });
  it("should return the correct possessive noun suffix for 'sen'", () => {
    expect(possessiveNounSuffix("sen", "baba")).toBe("baban");
    expect(possessiveNounSuffix("sen", "anne")).toBe("annen");
    expect(possessiveNounSuffix("sen", "ütü")).toBe("ütün");
    expect(possessiveNounSuffix("sen", "anahtar")).toBe("anahtarın");
    expect(possessiveNounSuffix("sen", "ev")).toBe("evin");
    expect(possessiveNounSuffix("sen", "kol")).toBe("kolun");
    expect(possessiveNounSuffix("sen", "köy")).toBe("köyün");
  });
  it("should return the correct possessive noun suffix for 'o'", () => {
    expect(possessiveNounSuffix("o", "baba")).toBe("babası");
    expect(possessiveNounSuffix("o", "anne")).toBe("annesi");
    expect(possessiveNounSuffix("o", "ütü")).toBe("ütüsü");
    expect(possessiveNounSuffix("o", "anahtar")).toBe("anahtarı");
    expect(possessiveNounSuffix("o", "ev")).toBe("evi");
    expect(possessiveNounSuffix("o", "kol")).toBe("kolu");
    expect(possessiveNounSuffix("o", "köy")).toBe("köyü");
  });
  it("should return the correct possessive noun suffix for 'biz'", () => {
    expect(possessiveNounSuffix("biz", "baba")).toBe("babamız");
    expect(possessiveNounSuffix("biz", "anne")).toBe("annemiz");
    expect(possessiveNounSuffix("biz", "manto")).toBe("mantomuz");
    expect(possessiveNounSuffix("biz", "ütü")).toBe("ütümüz");
    expect(possessiveNounSuffix("biz", "anahtar")).toBe("anahtarımız");
    expect(possessiveNounSuffix("biz", "ev")).toBe("evimiz");
    expect(possessiveNounSuffix("biz", "kol")).toBe("kolumuz");
    expect(possessiveNounSuffix("biz", "köy")).toBe("köyümüz");
  });
  it("should return the correct possessive noun suffix for 'siz'", () => {
    expect(possessiveNounSuffix("siz", "baba")).toBe("babanız");
    expect(possessiveNounSuffix("siz", "anne")).toBe("anneniz");
    expect(possessiveNounSuffix("siz", "manto")).toBe("mantonuz");
    expect(possessiveNounSuffix("siz", "ütü")).toBe("ütünüz");
    expect(possessiveNounSuffix("siz", "anahtar")).toBe("anahtarınız");
    expect(possessiveNounSuffix("siz", "ev")).toBe("eviniz");
    expect(possessiveNounSuffix("siz", "kol")).toBe("kolunuz");
    expect(possessiveNounSuffix("siz", "köy")).toBe("köyünüz");
  });
  it("should return the correct possessive noun suffix for 'onlar'", () => {
    expect(possessiveNounSuffix("onlar", "baba")).toBe("babaları");
    expect(possessiveNounSuffix("onlar", "anne")).toBe("anneleri");
    expect(possessiveNounSuffix("onlar", "manto")).toBe("mantoları");
    expect(possessiveNounSuffix("onlar", "ütü")).toBe("ütüleri");
    expect(possessiveNounSuffix("onlar", "anahtar")).toBe("anahtarları");
    expect(possessiveNounSuffix("onlar", "ev")).toBe("evleri");
    expect(possessiveNounSuffix("onlar", "kol")).toBe("kolları");
    expect(possessiveNounSuffix("onlar", "köy")).toBe("köyleri");
  });
});

describe("possessivePronounEnglish", () => {
  it("should return the correct English possessive pronoun for 'ben'", () => {
    expect(possessivePronounEnglish("i")).toBe("my");
  });
  it("should return the correct English possessive pronoun for 'sen'", () => {
    expect(possessivePronounEnglish("you")).toBe("your");
  });
  it("should return the correct English possessive pronoun for 'o'", () => {
    expect(possessivePronounEnglish("he")).toBe("his");
  });
  it("should return the correct English possessive pronoun for 'o'", () => {
    expect(possessivePronounEnglish("she")).toBe("her");
  });
  it("should return the correct English possessive pronoun for 'o'", () => {
    expect(possessivePronounEnglish("it")).toBe("its");
  });
  it("should return the correct English possessive pronoun for 'biz'", () => {
    expect(possessivePronounEnglish("we")).toBe("our");
  });
  it("should return the correct English possessive pronoun for 'siz'", () => {
    expect(possessivePronounEnglish("you (f)")).toBe("your (f)");
  });
  it("should return the correct English possessive pronoun for 'onlar'", () => {
    expect(possessivePronounEnglish("they")).toBe("their");
  });
  it("should handle invalid input", () => {
    expect(possessivePronounEnglish("invalid")).toBe("Invalid pronoun: invalid");
  });
});

describe("englishPossessiveMaster", () => {
  it("should return the correct English possessive master for 'ben'", () => {
    expect(englishPossessiveMaster("i", "father")).toBe("my father");
  });
  it("should return the correct English possessive master for 'sen'", () => {
    expect(englishPossessiveMaster("you", "father")).toBe("your father");
  });
  it("should return the correct English possessive master for 'o'", () => {
    expect(englishPossessiveMaster("he", "father")).toBe("his father");
  });
  it("should return the correct English possessive master for 'o'", () => {
    expect(englishPossessiveMaster("she", "father")).toBe("her father");
  });
  it("should return the correct English possessive master for 'o'", () => {
    expect(englishPossessiveMaster("it", "father")).toBe("its father");
  });
  it("should return the correct English possessive master for 'biz'", () => {
    expect(englishPossessiveMaster("we", "father")).toBe("our father");
  });
  it("should return the correct English possessive master for 'siz'", () => {
    expect(englishPossessiveMaster("you (f)", "father")).toBe("your (f) father");
  });
  it("should return the correct English possessive master for 'onlar'", () => {
    expect(englishPossessiveMaster("they", "father")).toBe("their fathers");
  });
  it("should handle invalid input", () => {
    expect(englishPossessiveMaster("invalid", "father")).toBe("Invalid pronoun: invalid father");
  });
});

describe("turkishPossessiveMaster", () => {
  it("should return the correct Turkish possessive master for 'ben'", () => {
    expect(turkishPossessiveMaster("ben", "baba")).toBe("benim babam");
  });
  it("should return the correct Turkish possessive master for 'sen'", () => {
    expect(turkishPossessiveMaster("sen", "baba")).toBe("senin baban");
  });
  it("should return the correct Turkish possessive master for 'o'", () => {
    expect(turkishPossessiveMaster("o", "baba")).toBe("onun babası");
  });
  it("should return the correct Turkish possessive master for 'biz'", () => {
    expect(turkishPossessiveMaster("biz", "baba")).toBe("bizim babamız");
  });
  it("should return the correct Turkish possessive master for 'siz'", () => {
    expect(turkishPossessiveMaster("siz", "baba")).toBe("sizin babanız");
  });
  it("should return the correct Turkish possessive master for 'onlar'", () => {
    expect(turkishPossessiveMaster("onlar", "baba")).toBe("onların babaları");
  });
});

describe("possessiveMaster", () => {
  it("should return the correct possessive master for 'ben'", () => {
    expect(possessiveMaster({ english: "i", turkish: "ben" }, { english: "father", turkish: "baba" })).toEqual({
      english: "my father",
      turkish: "benim babam",
    });
  });
  it("should return the correct possessive master for 'sen'", () => {
    expect(possessiveMaster({ english: "you", turkish: "sen" }, { english: "father", turkish: "baba" })).toEqual({
      english: "your father",
      turkish: "senin baban",
    });
  });
  it("should return the correct possessive master for 'o'", () => {
    expect(possessiveMaster({ english: "he", turkish: "o" }, { english: "father", turkish: "baba" })).toEqual({
      english: "his father",
      turkish: "onun babası",
    });
  });
  it("should return the correct possessive master for 'biz'", () => {
    expect(possessiveMaster({ english: "we", turkish: "biz" }, { english: "father", turkish: "baba" })).toEqual({
      english: "our father",
      turkish: "bizim babamız",
    });
  });
  it("should return the correct possessive master for 'siz'", () => {
    expect(possessiveMaster({ english: "you", turkish: "siz" }, { english: "father", turkish: "baba" })).toEqual({
      english: "your father",
      turkish: "sizin babanız",
    });
  });
  it("should return the correct possessive master for 'onlar'", () => {
    expect(possessiveMaster({ english: "they", turkish: "onlar" }, { english: "father", turkish: "baba" })).toEqual({
      english: "their fathers",
      turkish: "onların babaları",
    });
  });
});
