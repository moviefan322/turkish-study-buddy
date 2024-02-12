import {
  addNominalSuffix,
  negativePossessive,
  interrogativePossessive,
  interrogativeNegativePossessive,
} from "./possessive";

describe("addNominalSuffix", () => {
  it("should return the correct possessive suffix for 'ben'", () => {
    expect(addNominalSuffix("ben", "Fransız")).toBe("Fransızım");
    expect(addNominalSuffix("ben", "Öğretmen")).toBe("Öğretmenim");
    expect(addNominalSuffix("ben", "Yorgun")).toBe("Yorgunum");
    expect(addNominalSuffix("ben", "Türk")).toBe("Türküm");
  });
  it("should return the correct possessive suffix for 'sen'", () => {
    expect(addNominalSuffix("sen", "Fransız")).toBe("Fransızsın");
    expect(addNominalSuffix("sen", "Öğretmen")).toBe("Öğretmensin");
    expect(addNominalSuffix("sen", "Yorgun")).toBe("Yorgunsun");
    expect(addNominalSuffix("sen", "Türk")).toBe("Türksün");
  });
  it("should return the correct possessive suffix for 'o'", () => {
    expect(addNominalSuffix("o", "Fransız")).toBe("Fransız");
    expect(addNominalSuffix("o", "Öğretmen")).toBe("Öğretmen");
    expect(addNominalSuffix("o", "Yorgun")).toBe("Yorgun");
    expect(addNominalSuffix("o", "Türk")).toBe("Türk");
  });
  it("should return the correct possessive suffix for 'biz'", () => {
    expect(addNominalSuffix("biz", "Fransız")).toBe("Fransızız");
    expect(addNominalSuffix("biz", "Öğretmen")).toBe("Öğretmeniz");
    expect(addNominalSuffix("biz", "Yorgun")).toBe("Yorgunuz");
    expect(addNominalSuffix("biz", "Türk")).toBe("Türküz");
  });
  it("should return the correct possessive suffix for 'siz'", () => {
    expect(addNominalSuffix("siz", "Fransız")).toBe("Fransızsınız");
    expect(addNominalSuffix("siz", "Öğretmen")).toBe("Öğretmensiniz");
    expect(addNominalSuffix("siz", "Yorgun")).toBe("Yorgunsunuz");
    expect(addNominalSuffix("siz", "Türk")).toBe("Türksünüz");
  });
  it("should return the correct possessive suffix for 'onlar'", () => {
    expect(addNominalSuffix("onlar", "Fransız")).toBe("Fransızlar");
    expect(addNominalSuffix("onlar", "Öğretmen")).toBe("Öğretmenler");
    expect(addNominalSuffix("onlar", "Yorgun")).toBe("Yorgunlar");
    expect(addNominalSuffix("onlar", "Türk")).toBe("Türkler");
  });
  it("handles vowel ending correctly", () => {
    expect(addNominalSuffix("ben", "mutlu")).toBe("mutluyum");
    expect(addNominalSuffix("biz", "mutlu")).toBe("mutluyuz");
    expect(addNominalSuffix("ben", "gülcü")).toBe("gülcüyüm");
    expect(addNominalSuffix("biz", "gülcü")).toBe("gülcüyüz");
    expect(addNominalSuffix("ben", "hasta")).toBe("hastayım");
    expect(addNominalSuffix("biz", "hasta")).toBe("hastayız");
  });
  it("handles ketchup rule correctly", () => {
    expect(addNominalSuffix("ben", "kitap")).toBe("kitabım");
    expect(addNominalSuffix("biz", "kitap")).toBe("kitabız");
    expect(addNominalSuffix("ben", "genç")).toBe("gencim");
    expect(addNominalSuffix("biz", "genç")).toBe("genciz");
    expect(addNominalSuffix("ben", "kasap")).toBe("kasabım");
    expect(addNominalSuffix("biz", "kasap")).toBe("kasabız");
    expect(addNominalSuffix("ben", "korkak")).toBe("korkağım");
    expect(addNominalSuffix("biz", "korkak")).toBe("korkağız");
    expect(addNominalSuffix("ben", "komik")).toBe("komiğim");
    expect(addNominalSuffix("biz", "komik")).toBe("komiğiz");
  });
});

describe("negativePossessive", () => {
  it("should return the correct negative possessive for 'ben'", () => {
    expect(negativePossessive("ben")).toBe("değilim");
  });
  it("should return the correct negative possessive for 'sen'", () => {
    expect(negativePossessive("sen")).toBe("değilsin");
  });
  it("should return the correct negative possessive for 'o'", () => {
    expect(negativePossessive("o")).toBe("değil");
  });
  it("should return the correct negative possessive for 'biz'", () => {
    expect(negativePossessive("biz")).toBe("değiliz");
  });
  it("should return the correct negative possessive for 'siz'", () => {
    expect(negativePossessive("siz")).toBe("değilsiniz");
  });
  it("should return the correct negative possessive for 'onlar'", () => {
    expect(negativePossessive("onlar")).toBe("değil");
  });
});

describe("interrogativePossessive", () => {
  it("should return the correct negative interrogative for 'ben'", () => {
    expect(interrogativePossessive("ben", "aç")).toBe("mıyım");
    expect(interrogativePossessive("ben", "öğretmen")).toBe("miyim");
    expect(interrogativePossessive("ben", "yorgun")).toBe("muyum");
    expect(interrogativePossessive("ben", "Türk")).toBe("müyüm");
    expect(interrogativePossessive("ben", "mutlu")).toBe("muyum");
    expect(interrogativePossessive("ben", "çalişkan")).toBe("mıyım");
  });
  it("should return the correct negative interrogative for 'sen'", () => {
    expect(interrogativePossessive("sen", "aç")).toBe("mısın");
    expect(interrogativePossessive("sen", "öğretmen")).toBe("misin");
    expect(interrogativePossessive("sen", "yorgun")).toBe("musun");
    expect(interrogativePossessive("sen", "Türk")).toBe("müsün");
    expect(interrogativePossessive("sen", "mutlu")).toBe("musun");
    expect(interrogativePossessive("sen", "çalişkan")).toBe("mısın");
  });
  it("should return the correct negative interrogative for 'o'", () => {
    expect(interrogativePossessive("o", "aç")).toBe("mı");
    expect(interrogativePossessive("o", "öğretmen")).toBe("mi");
    expect(interrogativePossessive("o", "yorgun")).toBe("mu");
    expect(interrogativePossessive("o", "Türk")).toBe("mü");
    expect(interrogativePossessive("o", "mutlu")).toBe("mu");
    expect(interrogativePossessive("o", "çalişkan")).toBe("mı");
  });
  it("should return the correct negative interrogative for 'biz'", () => {
    expect(interrogativePossessive("biz", "aç")).toBe("mıyız");
    expect(interrogativePossessive("biz", "öğretmen")).toBe("miyiz");
    expect(interrogativePossessive("biz", "yorgun")).toBe("muyuz");
    expect(interrogativePossessive("biz", "Türk")).toBe("müyüz");
    expect(interrogativePossessive("biz", "mutlu")).toBe("muyuz");
    expect(interrogativePossessive("biz", "çalişkan")).toBe("mıyız");
  });
  it("should return the correct negative interrogative for 'siz'", () => {
    expect(interrogativePossessive("siz", "aç")).toBe("mısınız");
    expect(interrogativePossessive("siz", "öğretmen")).toBe("misiniz");
    expect(interrogativePossessive("siz", "yorgun")).toBe("musunuz");
    expect(interrogativePossessive("siz", "Türk")).toBe("müsünüz");
    expect(interrogativePossessive("siz", "mutlu")).toBe("musunuz");
    expect(interrogativePossessive("siz", "çalişkan")).toBe("mısınız");
  });
  it("should return the correct negative interrogative for 'onlar'", () => {
    expect(interrogativePossessive("onlar", "aç")).toBe("mı");
    expect(interrogativePossessive("onlar", "öğretmen")).toBe("mi");
    expect(interrogativePossessive("onlar", "yorgun")).toBe("mu");
    expect(interrogativePossessive("onlar", "Türk")).toBe("mü");
    expect(interrogativePossessive("onlar", "mutlu")).toBe("mu");
    expect(interrogativePossessive("onlar", "çalişkan")).toBe("mı");
  });
});

describe("interrogativeNegativePossessive", () => {
  it("should return the correct negative interrogative for 'ben'", () => {
    expect(interrogativeNegativePossessive("ben")).toBe("değil miyim");
  });
  it("should return the correct negative interrogative for 'sen'", () => {
    expect(interrogativeNegativePossessive("sen")).toBe("değil misin");
  });
  it("should return the correct negative interrogative for 'o'", () => {
    expect(interrogativeNegativePossessive("o")).toBe("değil mi");
  });
  it("should return the correct negative interrogative for 'biz'", () => {
    expect(interrogativeNegativePossessive("biz")).toBe("değil miyiz");
  });
  it("should return the correct negative interrogative for 'siz'", () => {
    expect(interrogativeNegativePossessive("siz")).toBe("değil misiniz");
  });
  it("should return the correct negative interrogative for 'onlar'", () => {
    expect(interrogativeNegativePossessive("onlar")).toBe("değiller mi");
  });
});
