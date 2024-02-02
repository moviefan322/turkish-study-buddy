import {
  nominalConjugation,
  degilWithSuffix,
  nominalConjugationNegative,
  nominalConjugationInterrogative,
} from "./nominal";

describe("nominalConjugation", () => {
  it("conjugates the nounjective with the correct suffix for ben", () => {
    expect(nominalConjugation("Ben", "Fransız")).toBe("Fransızım");
    expect(nominalConjugation("Ben", "Öğretmen")).toBe("Öğretmenim");
    expect(nominalConjugation("Ben", "Yorgun")).toBe("Yorgunum");
    expect(nominalConjugation("Ben", "Türk")).toBe("Türküm");
  });

  it("conjugates the nounjective with the correct suffix for sen", () => {
    expect(nominalConjugation("Sen", "Fransız")).toBe("Fransızsın");
    expect(nominalConjugation("Sen", "Öğretmen")).toBe("Öğretmensin");
    expect(nominalConjugation("Sen", "Yorgun")).toBe("Yorgunsun");
    expect(nominalConjugation("Sen", "Türk")).toBe("Türksün");
  });

  it("conjugates the nounjective with the correct suffix for o", () => {
    expect(nominalConjugation("O", "Fransız")).toBe("Fransız");
    expect(nominalConjugation("O", "Öğretmen")).toBe("Öğretmen");
    expect(nominalConjugation("O", "Yorgun")).toBe("Yorgun");
    expect(nominalConjugation("O", "Türk")).toBe("Türk");
  });

  it("conjugates the nounjective with the correct suffix for biz", () => {
    expect(nominalConjugation("Biz", "Fransız")).toBe("Fransızız");
    expect(nominalConjugation("Biz", "Öğretmen")).toBe("Öğretmeniz");
    expect(nominalConjugation("Biz", "Yorgun")).toBe("Yorgunuz");
    expect(nominalConjugation("Biz", "Türk")).toBe("Türküz");
  });

  it("conjugates the nounjective with the correct suffix for siz", () => {
    expect(nominalConjugation("Siz", "Fransız")).toBe("Fransızsınız");
    expect(nominalConjugation("Siz", "Öğretmen")).toBe("Öğretmensiniz");
    expect(nominalConjugation("Siz", "Yorgun")).toBe("Yorgunsunuz");
    expect(nominalConjugation("Siz", "Türk")).toBe("Türksünüz");
  });

  it("conjugates the nounjective with the correct suffix for onlar", () => {
    expect(nominalConjugation("Onlar", "Fransız")).toBe("Fransızlar");
    expect(nominalConjugation("Onlar", "Öğretmen")).toBe("Öğretmenler");
    expect(nominalConjugation("Onlar", "Yorgun")).toBe("Yorgunlar");
    expect(nominalConjugation("Onlar", "Türk")).toBe("Türkler");
  });

  it("handles for words ending in vowels", () => {
    expect(nominalConjugation("Ben", "Kırmızı")).toBe("Kırmızıyım");
    expect(nominalConjugation("Sen", "Kırmızı")).toBe("Kırmızısın");
    expect(nominalConjugation("O", "Kırmızı")).toBe("Kırmızı");
    expect(nominalConjugation("Biz", "Kırmızı")).toBe("Kırmızıyız");
    expect(nominalConjugation("Siz", "Kırmızı")).toBe("Kırmızısınız");
    expect(nominalConjugation("Onlar", "Kırmızı")).toBe("Kırmızılar");
  });

  it("handles for words ending k", () => {
    expect(nominalConjugation("Ben", "yumuşak")).toBe("yumuşağım");
    expect(nominalConjugation("Sen", "yumuşak")).toBe("yumuşaksın");
    expect(nominalConjugation("O", "yumuşak")).toBe("yumuşak");
    expect(nominalConjugation("Biz", "yumuşak")).toBe("yumuşağız");
    expect(nominalConjugation("Siz", "yumuşak")).toBe("yumuşaksınız");
    expect(nominalConjugation("Onlar", "yumuşak")).toBe("yumuşaklar");
  });

  it("handles for words ending t", () => {
    expect(nominalConjugation("Ben", "basit")).toBe("basidim");
    expect(nominalConjugation("Sen", "basit")).toBe("basitsin");
    expect(nominalConjugation("O", "basit")).toBe("basit");
    expect(nominalConjugation("Biz", "basit")).toBe("basidiz");
    expect(nominalConjugation("Siz", "basit")).toBe("basitsiniz");
    expect(nominalConjugation("Onlar", "basit")).toBe("basitler");
  });

  it("handles for words ending ç", () => {
    expect(nominalConjugation("Ben", "genç")).toBe("gencim");
    expect(nominalConjugation("Sen", "genç")).toBe("gençsin");
    expect(nominalConjugation("O", "genç")).toBe("genç");
    expect(nominalConjugation("Biz", "genç")).toBe("genciz");
    expect(nominalConjugation("Siz", "genç")).toBe("gençsiniz");
    expect(nominalConjugation("Onlar", "genç")).toBe("gençler");
  });

  it("handles for words ending p", () => {
    expect(nominalConjugation("Ben", "kasap")).toBe("kasabım");
    expect(nominalConjugation("Sen", "kasap")).toBe("kasapsın");
    expect(nominalConjugation("O", "kasap")).toBe("kasap");
    expect(nominalConjugation("Biz", "kasap")).toBe("kasabız");
    expect(nominalConjugation("Siz", "kasap")).toBe("kasapsınız");
    expect(nominalConjugation("Onlar", "kasap")).toBe("kasaplar");
  });
});

describe("degilWithSuffix", () => {
  it("returns the correct negation for ben", () => {
    expect(degilWithSuffix("Ben")).toBe("değilim");
  });

  it("returns the correct negation for sen", () => {
    expect(degilWithSuffix("Sen")).toBe("değilsin");
  });

  it("returns the correct negation for o", () => {
    expect(degilWithSuffix("O")).toBe("değil");
  });

  it("returns the correct negation for biz", () => {
    expect(degilWithSuffix("Biz")).toBe("değiliz");
  });

  it("returns the correct negation for siz", () => {
    expect(degilWithSuffix("Siz")).toBe("değilsiniz");
  });

  it("returns the correct negation for onlar", () => {
    expect(degilWithSuffix("Onlar")).toBe("değil");
  });
});

describe("nominalConjugationNegative", () => {
  it("returns the correct negative conjugation", () => {
    expect(nominalConjugationNegative("Ben", "aç")).toBe("aç değilim");
    expect(nominalConjugationNegative("Sen", "öğretmen")).toBe("öğretmen değilsin");
    expect(nominalConjugationNegative("O", "yorgun")).toBe("yorgun değil");
    expect(nominalConjugationNegative("Biz", "Türk")).toBe("Türk değiliz");
    expect(nominalConjugationNegative("Siz", "mutlu")).toBe("mutlu değilsiniz");
    expect(nominalConjugationNegative("Onlar", "çalışkan")).toBe("çalışkan değil");
  });
});

describe("nominalConjugationInterrogative", () => {
  it("returns the correct interrogative conjugation for mı", () => {
    expect(nominalConjugationInterrogative("Ben", "aç")).toBe("aç mıyım?");
    expect(nominalConjugationInterrogative("Sen", "aç")).toBe("aç mısın?");
    expect(nominalConjugationInterrogative("O", "aç")).toBe("aç mı?");
    expect(nominalConjugationInterrogative("Biz", "aç")).toBe("aç mıyız?");
    expect(nominalConjugationInterrogative("Siz", "aç")).toBe("aç mısınız?");
    expect(nominalConjugationInterrogative("Onlar", "aç")).toBe("aç(lar) mı?");
  });

  it("returns the correct interrogative conjugation for mi", () => {
    expect(nominalConjugationInterrogative("Ben", "öğretmen")).toBe("öğretmen miyim?");
    expect(nominalConjugationInterrogative("Sen", "öğretmen")).toBe("öğretmen misin?");
    expect(nominalConjugationInterrogative("O", "öğretmen")).toBe("öğretmen mi?");
    expect(nominalConjugationInterrogative("Biz", "öğretmen")).toBe("öğretmen miyiz?");
    expect(nominalConjugationInterrogative("Siz", "öğretmen")).toBe("öğretmen misiniz?");
    expect(nominalConjugationInterrogative("Onlar", "öğretmen")).toBe("öğretmen(ler) mi?");
  });

  it("returns the correct interrogative conjugation for mu", () => {
    expect(nominalConjugationInterrogative("Ben", "yorgun")).toBe("yorgun muyum?");
    expect(nominalConjugationInterrogative("Sen", "yorgun")).toBe("yorgun musun?");
    expect(nominalConjugationInterrogative("O", "yorgun")).toBe("yorgun mu?");
    expect(nominalConjugationInterrogative("Biz", "yorgun")).toBe("yorgun muyuz?");
    expect(nominalConjugationInterrogative("Siz", "yorgun")).toBe("yorgun musunuz?");
    expect(nominalConjugationInterrogative("Onlar", "yorgun")).toBe("yorgun(lar) mu?");
  });

  it("returns the correct interrogative conjugation for mü", () => {
    expect(nominalConjugationInterrogative("Ben", "Türk")).toBe("Türk müyüm?");
    expect(nominalConjugationInterrogative("Sen", "Türk")).toBe("Türk müsün?");
    expect(nominalConjugationInterrogative("O", "Türk")).toBe("Türk mü?");
    expect(nominalConjugationInterrogative("Biz", "Türk")).toBe("Türk müyüz?");
    expect(nominalConjugationInterrogative("Siz", "Türk")).toBe("Türk müsünüz?");
    expect(nominalConjugationInterrogative("Onlar", "Türk")).toBe("Türk(ler) mü?");
  });
});
