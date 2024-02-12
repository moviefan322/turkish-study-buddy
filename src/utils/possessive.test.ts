import { conugativePossessive } from "./possessive";

describe("conugativePossessive", () => {
  it("should return the correct possessive suffix for 'ben'", () => {
    expect(conugativePossessive("ben", "Fransız")).toBe("Fransızım");
    expect(conugativePossessive("ben", "Öğretmen")).toBe("Öğretmenim");
    expect(conugativePossessive("ben", "Yorgun")).toBe("Yorgunum");
    expect(conugativePossessive("ben", "Türk")).toBe("Türküm");
  });
  it("should return the correct possessive suffix for 'sen'", () => {
    expect(conugativePossessive("sen", "Fransız")).toBe("Fransızsın");
    expect(conugativePossessive("sen", "Öğretmen")).toBe("Öğretmensin");
    expect(conugativePossessive("sen", "Yorgun")).toBe("Yorgunsun");
    expect(conugativePossessive("sen", "Türk")).toBe("Türksün");
  });
  it("should return the correct possessive suffix for 'o'", () => {
    expect(conugativePossessive("o", "Fransız")).toBe("Fransız");
    expect(conugativePossessive("o", "Öğretmen")).toBe("Öğretmen");
    expect(conugativePossessive("o", "Yorgun")).toBe("Yorgun");
    expect(conugativePossessive("o", "Türk")).toBe("Türk");
  });
  it("should return the correct possessive suffix for 'biz'", () => {
    expect(conugativePossessive("biz", "Fransız")).toBe("Fransızız");
    expect(conugativePossessive("biz", "Öğretmen")).toBe("Öğretmeniz");
    expect(conugativePossessive("biz", "Yorgun")).toBe("Yorgunuz");
    expect(conugativePossessive("biz", "Türk")).toBe("Türküz");
  });
  it("should return the correct possessive suffix for 'siz'", () => {
    expect(conugativePossessive("siz", "Fransız")).toBe("Fransızsınız");
    expect(conugativePossessive("siz", "Öğretmen")).toBe("Öğretmensiniz");
    expect(conugativePossessive("siz", "Yorgun")).toBe("Yorgunsunuz");
    expect(conugativePossessive("siz", "Türk")).toBe("Türksünüz");
  });
  it("should return the correct possessive suffix for 'onlar'", () => {
    expect(conugativePossessive("onlar", "Fransız")).toBe("Fransızlar");
    expect(conugativePossessive("onlar", "Öğretmen")).toBe("Öğretmenler");
    expect(conugativePossessive("onlar", "Yorgun")).toBe("Yorgunlar");
    expect(conugativePossessive("onlar", "Türk")).toBe("Türkler");
  });
  it("handles vowel ending correctly", () => {
    expect(conugativePossessive("ben", "mutlu")).toBe("mutluyum");
    expect(conugativePossessive("biz", "mutlu")).toBe("mutluyuz");
    expect(conugativePossessive("ben", "gülcü")).toBe("gülcüyüm");
    expect(conugativePossessive("biz", "gülcü")).toBe("gülcüyüz");
    expect(conugativePossessive("ben", "hasta")).toBe("hastayım");
    expect(conugativePossessive("biz", "hasta")).toBe("hastayız");
  });
  it("handles ketchup rule correctly", () => {
    expect(conugativePossessive("ben", "kitap")).toBe("kitabım");
    expect(conugativePossessive("biz", "kitap")).toBe("kitabız");
    expect(conugativePossessive("ben", "genç")).toBe("gencim");
    expect(conugativePossessive("biz", "genç")).toBe("genciz");
    expect(conugativePossessive("ben", "kasap")).toBe("kasabım");
    expect(conugativePossessive("biz", "kasap")).toBe("kasabız");
    expect(conugativePossessive("ben", "korkak")).toBe("korkağım");
    expect(conugativePossessive("biz", "korkak")).toBe("korkağız");
    expect(conugativePossessive("ben", "komik")).toBe("komiğim");
    expect(conugativePossessive("biz", "komik")).toBe("komiğiz");
  });
});
