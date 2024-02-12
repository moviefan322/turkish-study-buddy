import { possessivePronoun, possessiveNounSuffix } from "./possessive";

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
