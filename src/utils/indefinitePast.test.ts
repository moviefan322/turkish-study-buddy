import {
  returnIndefinitePastSuffix,
  indefinitePastAffirmative,
  indefinitePastNegative,
  indefinitePastInterrogative,
  indefinitePastInterrogativeNegative,
  returnMişFormNominal,
  indefinitePastNominalAffirmative,
  indefinitePastNominalNegative,
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

describe("returnMişFormNominal", () => {
  it("should return the correct miş form nouns", () => {
    expect(returnMişFormNominal("hayat")).toBe("mış");
    expect(returnMişFormNominal("sayı")).toBe("ymış");
    expect(returnMişFormNominal("köpek")).toBe("miş");
    expect(returnMişFormNominal("hikaye")).toBe("ymiş");
    expect(returnMişFormNominal("yol")).toBe("muş");
    expect(returnMişFormNominal("mutlu")).toBe("ymuş");
    expect(returnMişFormNominal("göz")).toBe("müş");
    expect(returnMişFormNominal("kötü")).toBe("ymüş");
  });
});

describe("indefinitePastNominalAffirmative", () => {
  it("should return the correct forms for 'ben' pronoun", () => {
    expect(indefinitePastNominalAffirmative("ben", "hayat")).toBe("hayatmışım");
    expect(indefinitePastNominalAffirmative("ben", "sayı")).toBe("sayıymışım");
    expect(indefinitePastNominalAffirmative("ben", "köpek")).toBe("köpekmişim");
    expect(indefinitePastNominalAffirmative("ben", "hikaye")).toBe("hikayeymişim");
    expect(indefinitePastNominalAffirmative("ben", "yol")).toBe("yolmuşum");
    expect(indefinitePastNominalAffirmative("ben", "mutlu")).toBe("mutluymuşum");
    expect(indefinitePastNominalAffirmative("ben", "göz")).toBe("gözmüşüm");
    expect(indefinitePastNominalAffirmative("ben", "kötü")).toBe("kötüymüşüm");
  });

  it("should return the correct forms for 'sen' pronoun", () => {
    expect(indefinitePastNominalAffirmative("sen", "hayat")).toBe("hayatmışsın");
    expect(indefinitePastNominalAffirmative("sen", "sayı")).toBe("sayıymışsın");
    expect(indefinitePastNominalAffirmative("sen", "köpek")).toBe("köpekmişsin");
    expect(indefinitePastNominalAffirmative("sen", "hikaye")).toBe("hikayeymişsin");
    expect(indefinitePastNominalAffirmative("sen", "yol")).toBe("yolmuşsun");
    expect(indefinitePastNominalAffirmative("sen", "mutlu")).toBe("mutluymuşsun");
    expect(indefinitePastNominalAffirmative("sen", "göz")).toBe("gözmüşsün");
    expect(indefinitePastNominalAffirmative("sen", "kötü")).toBe("kötüymüşsün");
  });

  it("should return the correct forms for 'o' pronoun", () => {
    expect(indefinitePastNominalAffirmative("o", "hayat")).toBe("hayatmış");
    expect(indefinitePastNominalAffirmative("o", "sayı")).toBe("sayıymış");
    expect(indefinitePastNominalAffirmative("o", "köpek")).toBe("köpekmiş");
    expect(indefinitePastNominalAffirmative("o", "hikaye")).toBe("hikayeymiş");
    expect(indefinitePastNominalAffirmative("o", "yol")).toBe("yolmuş");
    expect(indefinitePastNominalAffirmative("o", "mutlu")).toBe("mutluymuş");
    expect(indefinitePastNominalAffirmative("o", "göz")).toBe("gözmüş");
    expect(indefinitePastNominalAffirmative("o", "kötü")).toBe("kötüymüş");
  });

  it("should return the correct forms for 'biz' pronoun", () => {
    expect(indefinitePastNominalAffirmative("biz", "hayat")).toBe("hayatmışız");
    expect(indefinitePastNominalAffirmative("biz", "sayı")).toBe("sayıymışız");
    expect(indefinitePastNominalAffirmative("biz", "köpek")).toBe("köpekmişiz");
    expect(indefinitePastNominalAffirmative("biz", "hikaye")).toBe("hikayeymişiz");
    expect(indefinitePastNominalAffirmative("biz", "yol")).toBe("yolmuşuz");
    expect(indefinitePastNominalAffirmative("biz", "mutlu")).toBe("mutluymuşuz");
    expect(indefinitePastNominalAffirmative("biz", "göz")).toBe("gözmüşüz");
    expect(indefinitePastNominalAffirmative("biz", "kötü")).toBe("kötüymüşüz");
  });

  it("should return the correct forms for 'siz' pronoun", () => {
    expect(indefinitePastNominalAffirmative("siz", "hayat")).toBe("hayatmışsınız");
    expect(indefinitePastNominalAffirmative("siz", "sayı")).toBe("sayıymışsınız");
    expect(indefinitePastNominalAffirmative("siz", "köpek")).toBe("köpekmişsiniz");
    expect(indefinitePastNominalAffirmative("siz", "hikaye")).toBe("hikayeymişsiniz");
    expect(indefinitePastNominalAffirmative("siz", "yol")).toBe("yolmuşsunuz");
    expect(indefinitePastNominalAffirmative("siz", "mutlu")).toBe("mutluymuşsunuz");
    expect(indefinitePastNominalAffirmative("siz", "göz")).toBe("gözmüşsünüz");
    expect(indefinitePastNominalAffirmative("siz", "kötü")).toBe("kötüymüşsünüz");
  });

  it("should return the correct forms for 'onlar' pronoun", () => {
    expect(indefinitePastNominalAffirmative("onlar", "hayat")).toBe("hayatlarmış");
    expect(indefinitePastNominalAffirmative("onlar", "sayı")).toBe("sayılarmış");
    expect(indefinitePastNominalAffirmative("onlar", "köpek")).toBe("köpeklermiş");
    expect(indefinitePastNominalAffirmative("onlar", "hikaye")).toBe("hikayelermiş");
    expect(indefinitePastNominalAffirmative("onlar", "yol")).toBe("yollarmış");
    expect(indefinitePastNominalAffirmative("onlar", "mutlu")).toBe("mutlularmış");
    expect(indefinitePastNominalAffirmative("onlar", "göz")).toBe("gözlermiş");
    expect(indefinitePastNominalAffirmative("onlar", "kötü")).toBe("kötülermiş");
  });
});

describe("indefinitePastNominalNegative", () => {
  it("should return the correct forms for 'ben' pronoun", () => {
    expect(indefinitePastNominalNegative("ben", "hayat")).toBe("hayat değilmişim");
    expect(indefinitePastNominalNegative("ben", "sayı")).toBe("sayı değilmişim");
    expect(indefinitePastNominalNegative("ben", "köpek")).toBe("köpek değilmişim");
    expect(indefinitePastNominalNegative("ben", "hikaye")).toBe("hikaye değilmişim");
    expect(indefinitePastNominalNegative("ben", "yol")).toBe("yol değilmişim");
    expect(indefinitePastNominalNegative("ben", "mutlu")).toBe("mutlu değilmişim");
    expect(indefinitePastNominalNegative("ben", "göz")).toBe("göz değilmişim");
  });

  it("should return the correct forms for 'sen' pronoun", () => {
    expect(indefinitePastNominalNegative("sen", "hayat")).toBe("hayat değilmişsin");
    expect(indefinitePastNominalNegative("sen", "sayı")).toBe("sayı değilmişsin");
    expect(indefinitePastNominalNegative("sen", "köpek")).toBe("köpek değilmişsin");
    expect(indefinitePastNominalNegative("sen", "hikaye")).toBe("hikaye değilmişsin");
    expect(indefinitePastNominalNegative("sen", "yol")).toBe("yol değilmişsin");
    expect(indefinitePastNominalNegative("sen", "mutlu")).toBe("mutlu değilmişsin");
    expect(indefinitePastNominalNegative("sen", "göz")).toBe("göz değilmişsin");
  });

  it("should return the correct forms for 'o' pronoun", () => {
    expect(indefinitePastNominalNegative("o", "hayat")).toBe("hayat değilmiş");
    expect(indefinitePastNominalNegative("o", "sayı")).toBe("sayı değilmiş");
    expect(indefinitePastNominalNegative("o", "köpek")).toBe("köpek değilmiş");
    expect(indefinitePastNominalNegative("o", "hikaye")).toBe("hikaye değilmiş");
    expect(indefinitePastNominalNegative("o", "yol")).toBe("yol değilmiş");
    expect(indefinitePastNominalNegative("o", "mutlu")).toBe("mutlu değilmiş");
    expect(indefinitePastNominalNegative("o", "göz")).toBe("göz değilmiş");
  });

  it("should return the correct forms for 'biz' pronoun", () => {
    expect(indefinitePastNominalNegative("biz", "hayat")).toBe("hayat değilmişiz");
    expect(indefinitePastNominalNegative("biz", "sayı")).toBe("sayı değilmişiz");
    expect(indefinitePastNominalNegative("biz", "köpek")).toBe("köpek değilmişiz");
    expect(indefinitePastNominalNegative("biz", "hikaye")).toBe("hikaye değilmişiz");
    expect(indefinitePastNominalNegative("biz", "yol")).toBe("yol değilmişiz");
    expect(indefinitePastNominalNegative("biz", "mutlu")).toBe("mutlu değilmişiz");
    expect(indefinitePastNominalNegative("biz", "göz")).toBe("göz değilmişiz");
  });

  it("should return the correct forms for 'siz' pronoun", () => {
    expect(indefinitePastNominalNegative("siz", "hayat")).toBe("hayat değilmişsiniz");
    expect(indefinitePastNominalNegative("siz", "sayı")).toBe("sayı değilmişsiniz");
    expect(indefinitePastNominalNegative("siz", "köpek")).toBe("köpek değilmişsiniz");
    expect(indefinitePastNominalNegative("siz", "hikaye")).toBe("hikaye değilmişsiniz");
    expect(indefinitePastNominalNegative("siz", "yol")).toBe("yol değilmişsiniz");
    expect(indefinitePastNominalNegative("siz", "mutlu")).toBe("mutlu değilmişsiniz");
    expect(indefinitePastNominalNegative("siz", "göz")).toBe("göz değilmişsiniz");
  });

  it("should return the correct forms for 'onlar' pronoun", () => {
    expect(indefinitePastNominalNegative("onlar", "hayat")).toBe("hayat değillermiş");
    expect(indefinitePastNominalNegative("onlar", "sayı")).toBe("sayı değillermiş");
    expect(indefinitePastNominalNegative("onlar", "köpek")).toBe("köpek değillermiş");
    expect(indefinitePastNominalNegative("onlar", "hikaye")).toBe("hikaye değillermiş");
    expect(indefinitePastNominalNegative("onlar", "yol")).toBe("yol değillermiş");
    expect(indefinitePastNominalNegative("onlar", "mutlu")).toBe("mutlu değillermiş");
    expect(indefinitePastNominalNegative("onlar", "göz")).toBe("göz değillermiş");
  });
});
