import { nominalConjugation } from "./nominal";

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
  })

  it("handles for words ending k", () => {
    expect(nominalConjugation("Ben", "yumuşak")).toBe("yumuşağım");
    expect(nominalConjugation("Sen", "yumuşak")).toBe("yumuşaksın");
    expect(nominalConjugation("O", "yumuşak")).toBe("yumuşak");
    expect(nominalConjugation("Biz", "yumuşak")).toBe("yumuşağız");
    expect(nominalConjugation("Siz", "yumuşak")).toBe("yumuşaksınız");
    expect(nominalConjugation("Onlar", "yumuşak")).toBe("yumuşaklar");
  })

  it("handles for words ending t", () => {
    expect(nominalConjugation("Ben", "basit")).toBe("basidim");
    expect(nominalConjugation("Sen", "basit")).toBe("basitsin");
    expect(nominalConjugation("O", "basit")).toBe("basit");
    expect(nominalConjugation("Biz", "basit")).toBe("basidiz");
    expect(nominalConjugation("Siz", "basit")).toBe("basitsiniz");
    expect(nominalConjugation("Onlar", "basit")).toBe("basitler");
  })

  it("handles for words ending ç", () => {
    expect(nominalConjugation("Ben", "genç")).toBe("gencim");
    expect(nominalConjugation("Sen", "genç")).toBe("gençsin");
    expect(nominalConjugation("O", "genç")).toBe("genç");
    expect(nominalConjugation("Biz", "genç")).toBe("genciz");
    expect(nominalConjugation("Siz", "genç")).toBe("gençsiniz");
    expect(nominalConjugation("Onlar", "genç")).toBe("gençler");
  })

  it("handles for words ending p", () => {
    expect(nominalConjugation("Ben", "kasap")).toBe("kasabım");
    expect(nominalConjugation("Sen", "kasap")).toBe("kasapsın");
    expect(nominalConjugation("O", "kasap")).toBe("kasap");
    expect(nominalConjugation("Biz", "kasap")).toBe("kasabız");
    expect(nominalConjugation("Siz", "kasap")).toBe("kasapsınız");
    expect(nominalConjugation("Onlar", "kasap")).toBe("kasaplar");
  })


});
