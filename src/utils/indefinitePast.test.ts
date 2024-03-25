import {
  returnIndefinitePastSuffix,
  indefinitePastAffirmative,
  indefinitePastNegative,
  indefinitePastInterrogative,
  indefinitePastInterrogativeNegative,
} from "./indefinitePast";

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

describe("indefinitePastAffirmative", () => {
  it("should return the correct indefinite past affirmative for 'ben' pronoun", () => {
    expect(indefinitePastAffirmative("ben", "ayrıl")).toBe("ayrılmışım");
    expect(indefinitePastAffirmative("ben", "git")).toBe("gitmişim");
    expect(indefinitePastAffirmative("ben", "duy")).toBe("duymuşum");
    expect(indefinitePastAffirmative("ben", "öksür")).toBe("öksürmüşüm");
  });

  it("should return the correct indefinite past affirmative for 'sen' pronoun", () => {
    expect(indefinitePastAffirmative("sen", "ayrıl")).toBe("ayrılmışsın");
    expect(indefinitePastAffirmative("sen", "git")).toBe("gitmişsin");
    expect(indefinitePastAffirmative("sen", "duy")).toBe("duymuşsun");
    expect(indefinitePastAffirmative("sen", "öksür")).toBe("öksürmüşsün");
  });

  it("should return the correct indefinite past affirmative for 'o' pronoun", () => {
    expect(indefinitePastAffirmative("o", "ayrıl")).toBe("ayrılmış");
    expect(indefinitePastAffirmative("o", "git")).toBe("gitmiş");
    expect(indefinitePastAffirmative("o", "duy")).toBe("duymuş");
    expect(indefinitePastAffirmative("o", "öksür")).toBe("öksürmüş");
  });

  it("should return the correct indefinite past affirmative for 'biz' pronoun", () => {
    expect(indefinitePastAffirmative("biz", "ayrıl")).toBe("ayrılmışız");
    expect(indefinitePastAffirmative("biz", "git")).toBe("gitmişiz");
    expect(indefinitePastAffirmative("biz", "duy")).toBe("duymuşuz");
    expect(indefinitePastAffirmative("biz", "öksür")).toBe("öksürmüşüz");
  });

  it("should return the correct indefinite past affirmative for 'siz' pronoun", () => {
    expect(indefinitePastAffirmative("siz", "ayrıl")).toBe("ayrılmışsınız");
    expect(indefinitePastAffirmative("siz", "git")).toBe("gitmişsiniz");
    expect(indefinitePastAffirmative("siz", "duy")).toBe("duymuşsunuz");
    expect(indefinitePastAffirmative("siz", "öksür")).toBe("öksürmüşsünüz");
  });

  it("should return the correct indefinite past affirmative for 'onlar' pronoun", () => {
    expect(indefinitePastAffirmative("onlar", "ayrıl")).toBe("ayrılmışlar");
    expect(indefinitePastAffirmative("onlar", "git")).toBe("gitmişler");
    expect(indefinitePastAffirmative("onlar", "duy")).toBe("duymuşlar");
    expect(indefinitePastAffirmative("onlar", "öksür")).toBe("öksürmüşler");
  });
});

describe("indefinitePastNegative", () => {
  it("should return the correct indefinite past negative for 'ben' pronoun", () => {
    expect(indefinitePastNegative("ben", "ayrıl")).toBe("ayrılmamışım");
    expect(indefinitePastNegative("ben", "git")).toBe("gitmemişim");
    expect(indefinitePastNegative("ben", "duy")).toBe("duymamışım");
    expect(indefinitePastNegative("ben", "öksür")).toBe("öksürmemişim");
  });

  it("should return the correct indefinite past negative for 'sen' pronoun", () => {
    expect(indefinitePastNegative("sen", "ayrıl")).toBe("ayrılmamışsın");
    expect(indefinitePastNegative("sen", "git")).toBe("gitmemişsin");
    expect(indefinitePastNegative("sen", "duy")).toBe("duymamışsın");
    expect(indefinitePastNegative("sen", "öksür")).toBe("öksürmemişsin");
  });

  it("should return the correct indefinite past negative for 'o' pronoun", () => {
    expect(indefinitePastNegative("o", "ayrıl")).toBe("ayrılmamış");
    expect(indefinitePastNegative("o", "git")).toBe("gitmemiş");
    expect(indefinitePastNegative("o", "duy")).toBe("duymamış");
    expect(indefinitePastNegative("o", "öksür")).toBe("öksürmemiş");
  });

  it("should return the correct indefinite past negative for 'biz' pronoun", () => {
    expect(indefinitePastNegative("biz", "ayrıl")).toBe("ayrılmamışız");
    expect(indefinitePastNegative("biz", "git")).toBe("gitmemişiz");
    expect(indefinitePastNegative("biz", "duy")).toBe("duymamışız");
    expect(indefinitePastNegative("biz", "öksür")).toBe("öksürmemişiz");
  });

  it("should return the correct indefinite past negative for 'siz' pronoun", () => {
    expect(indefinitePastNegative("siz", "ayrıl")).toBe("ayrılmamışsınız");
    expect(indefinitePastNegative("siz", "git")).toBe("gitmemişsiniz");
    expect(indefinitePastNegative("siz", "duy")).toBe("duymamışsınız");
    expect(indefinitePastNegative("siz", "öksür")).toBe("öksürmemişsiniz");
  });

  it("should return the correct indefinite past negative for 'onlar' pronoun", () => {
    expect(indefinitePastNegative("onlar", "ayrıl")).toBe("ayrılmamışlar");
    expect(indefinitePastNegative("onlar", "git")).toBe("gitmemişler");
    expect(indefinitePastNegative("onlar", "duy")).toBe("duymamışlar");
    expect(indefinitePastNegative("onlar", "öksür")).toBe("öksürmemişler");
  });
});

describe("indefinitePastInterrogative", () => {
  it("should return the correct indefinite past interrogative for 'ben' pronoun", () => {
    expect(indefinitePastInterrogative("ben", "ayrıl")).toBe("ayrılmış mıyım");
    expect(indefinitePastInterrogative("ben", "git")).toBe("gitmiş miyim");
    expect(indefinitePastInterrogative("ben", "duy")).toBe("duymuş muyum");
    expect(indefinitePastInterrogative("ben", "öksür")).toBe("öksürmüş müyüm");
  });

  it("should return the correct indefinite past interrogative for 'sen' pronoun", () => {
    expect(indefinitePastInterrogative("sen", "ayrıl")).toBe("ayrılmış mısın");
    expect(indefinitePastInterrogative("sen", "git")).toBe("gitmiş misin");
    expect(indefinitePastInterrogative("sen", "duy")).toBe("duymuş musun");
    expect(indefinitePastInterrogative("sen", "öksür")).toBe("öksürmüş müsün");
  });

  it("should return the correct indefinite past interrogative for 'o' pronoun", () => {
    expect(indefinitePastInterrogative("o", "ayrıl")).toBe("ayrılmış mı");
    expect(indefinitePastInterrogative("o", "git")).toBe("gitmiş mi");
    expect(indefinitePastInterrogative("o", "duy")).toBe("duymuş mu");
    expect(indefinitePastInterrogative("o", "öksür")).toBe("öksürmüş mü");
  });

  it("should return the correct indefinite past interrogative for 'biz' pronoun", () => {
    expect(indefinitePastInterrogative("biz", "ayrıl")).toBe("ayrılmış mıyız");
    expect(indefinitePastInterrogative("biz", "git")).toBe("gitmiş miyiz");
    expect(indefinitePastInterrogative("biz", "duy")).toBe("duymuş muyuz");
    expect(indefinitePastInterrogative("biz", "öksür")).toBe("öksürmüş müyüz");
  });

  it("should return the correct indefinite past interrogative for 'siz' pronoun", () => {
    expect(indefinitePastInterrogative("siz", "ayrıl")).toBe("ayrılmış mısınız");
    expect(indefinitePastInterrogative("siz", "git")).toBe("gitmiş misiniz");
    expect(indefinitePastInterrogative("siz", "duy")).toBe("duymuş musunuz");
    expect(indefinitePastInterrogative("siz", "öksür")).toBe("öksürmüş müsünüz");
  });

  it("should return the correct indefinite past interrogative for 'onlar' pronoun", () => {
    expect(indefinitePastInterrogative("onlar", "ayrıl")).toBe("ayrılmışlar mı");
    expect(indefinitePastInterrogative("onlar", "git")).toBe("gitmişler mi");
    expect(indefinitePastInterrogative("onlar", "duy")).toBe("duymuşlar mı");
    expect(indefinitePastInterrogative("onlar", "öksür")).toBe("öksürmüşler mi");
  });
});

describe("indefinitePastInterrogativeNegative", () => {
  it("should return the correct indefinite past interrogative negative for 'ben' pronoun", () => {
    expect(indefinitePastInterrogativeNegative("ben", "ayrıl")).toBe("ayrılmamış mıyım");
    expect(indefinitePastInterrogativeNegative("ben", "git")).toBe("gitmemiş miyim");
    expect(indefinitePastInterrogativeNegative("ben", "duy")).toBe("duymamış mıyım");
    expect(indefinitePastInterrogativeNegative("ben", "öksür")).toBe("öksürmemiş miyim");
  });

  it("should return the correct indefinite past interrogative negative for 'sen' pronoun", () => {
    expect(indefinitePastInterrogativeNegative("sen", "ayrıl")).toBe("ayrılmamış mısın");
    expect(indefinitePastInterrogativeNegative("sen", "git")).toBe("gitmemiş misin");
    expect(indefinitePastInterrogativeNegative("sen", "duy")).toBe("duymamış mısın");
    expect(indefinitePastInterrogativeNegative("sen", "öksür")).toBe("öksürmemiş misin");
  });

  it("should return the correct indefinite past interrogative negative for 'o' pronoun", () => {
    expect(indefinitePastInterrogativeNegative("o", "ayrıl")).toBe("ayrılmamış mı");
    expect(indefinitePastInterrogativeNegative("o", "git")).toBe("gitmemiş mi");
    expect(indefinitePastInterrogativeNegative("o", "duy")).toBe("duymamış mı");
    expect(indefinitePastInterrogativeNegative("o", "öksür")).toBe("öksürmemiş mi");
  });

  it("should return the correct indefinite past interrogative negative for 'biz' pronoun", () => {
    expect(indefinitePastInterrogativeNegative("biz", "ayrıl")).toBe("ayrılmamış mıyız");
    expect(indefinitePastInterrogativeNegative("biz", "git")).toBe("gitmemiş miyiz");
    expect(indefinitePastInterrogativeNegative("biz", "duy")).toBe("duymamış mıyız");
    expect(indefinitePastInterrogativeNegative("biz", "öksür")).toBe("öksürmemiş miyiz");
  });

  it("should return the correct indefinite past interrogative negative for 'siz' pronoun", () => {
    expect(indefinitePastInterrogativeNegative("siz", "ayrıl")).toBe("ayrılmamış mısınız");
    expect(indefinitePastInterrogativeNegative("siz", "git")).toBe("gitmemiş misiniz");
    expect(indefinitePastInterrogativeNegative("siz", "duy")).toBe("duymamış mısınız");
    expect(indefinitePastInterrogativeNegative("siz", "öksür")).toBe("öksürmemiş misiniz");
  });

  it("should return the correct indefinite past interrogative negative for 'onlar' pronoun", () => {
    expect(indefinitePastInterrogativeNegative("onlar", "ayrıl")).toBe("ayrılmamışlar mı");
    expect(indefinitePastInterrogativeNegative("onlar", "git")).toBe("gitmemişler mi");
    expect(indefinitePastInterrogativeNegative("onlar", "duy")).toBe("duymamışlar mı");
    expect(indefinitePastInterrogativeNegative("onlar", "öksür")).toBe("öksürmemişler mi");
  });
});
