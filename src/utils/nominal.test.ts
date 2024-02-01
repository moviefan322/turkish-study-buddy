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
});
