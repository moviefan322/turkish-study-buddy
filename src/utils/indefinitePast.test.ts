import { returnIndefinitePastSuffix } from "./indefinitePast";

describe("indefinitePast", () => {
  describe("returnIndefinitePastSuffix", () => {
    it("should return the correct suffix for 'ben' pronoun", () => {
      expect(returnIndefinitePastSuffix("ben", "ayrıl")).toBe("mışım");
      expect(returnIndefinitePastSuffix("ben", "git")).toBe("mişim");
      expect(returnIndefinitePastSuffix("ben", "duy")).toBe("muşum");
      expect(returnIndefinitePastSuffix("ben", "öksür")).toBe("müşüm");
    });

    it("should return the correct suffix for 'sen' pronoun", () => {
      expect(returnIndefinitePastSuffix("sen", "ayrıl")).toBe("mışsın");
      expect(returnIndefinitePastSuffix("sen", "git")).toBe("mişsin");
      expect(returnIndefinitePastSuffix("sen", "duy")).toBe("muşsun");
      expect(returnIndefinitePastSuffix("sen", "öksür")).toBe("müşsün");
    });

    it("should return the correct suffix for 'o' pronoun", () => {
      expect(returnIndefinitePastSuffix("o", "ayrıl")).toBe("mış");
      expect(returnIndefinitePastSuffix("o", "git")).toBe("miş");
      expect(returnIndefinitePastSuffix("o", "duy")).toBe("muş");
      expect(returnIndefinitePastSuffix("o", "öksür")).toBe("müş");
    });

    it("should return the correct suffix for 'biz' pronoun", () => {
      expect(returnIndefinitePastSuffix("biz", "ayrıl")).toBe("mışız");
      expect(returnIndefinitePastSuffix("biz", "git")).toBe("mişiz");
      expect(returnIndefinitePastSuffix("biz", "duy")).toBe("muşuz");
      expect(returnIndefinitePastSuffix("biz", "öksür")).toBe("müşüz");
    });

    it("should return the correct suffix for 'siz' pronoun", () => {
      expect(returnIndefinitePastSuffix("siz", "ayrıl")).toBe("mışsınız");
      expect(returnIndefinitePastSuffix("siz", "git")).toBe("mişsiniz");
      expect(returnIndefinitePastSuffix("siz", "duy")).toBe("muşsunuz");
      expect(returnIndefinitePastSuffix("siz", "öksür")).toBe("müşsünüz");
    });

    it("should return the correct suffix for 'onlar' pronoun", () => {
      expect(returnIndefinitePastSuffix("onlar", "ayrıl")).toBe("mışlar");
      expect(returnIndefinitePastSuffix("onlar", "git")).toBe("mişler");
      expect(returnIndefinitePastSuffix("onlar", "duy")).toBe("muşlar");
      expect(returnIndefinitePastSuffix("onlar", "öksür")).toBe("müşler");
    });
  });
});
