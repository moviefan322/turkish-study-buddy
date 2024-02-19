import { returnPastParticleNominal, returnPastNominalSuffix, pastNominalAffirmative } from "./pastNomimnal";

describe("returnPastParticleNominal", () => {
  it("should return 'd' + vowel if verbStem ends with consonant (NOT fstkçşhp)", () => {
    expect(returnPastParticleNominal("al")).toBe("dı");
    expect(returnPastParticleNominal("getir")).toBe("di");
    expect(returnPastParticleNominal("ol")).toBe("du");
    expect(returnPastParticleNominal("gör")).toBe("dü");
  });
  it("should return 'yd' + vowel if verbStem ends with vowel", () => {
    expect(returnPastParticleNominal("oyna")).toBe("ydı");
    expect(returnPastParticleNominal("iste")).toBe("ydi");
    expect(returnPastParticleNominal("uyu")).toBe("ydu");
    expect(returnPastParticleNominal("büyü")).toBe("ydü");
  });
  it("should return 't' + vowel if verbStem ends with fstkçşhp", () => {
    expect(returnPastParticleNominal("kes")).toBe("ti");
    expect(returnPastParticleNominal("hisset")).toBe("ti");
    expect(returnPastParticleNominal("bak")).toBe("tı");
    expect(returnPastParticleNominal("seç")).toBe("ti");
    expect(returnPastParticleNominal("tap")).toBe("tı");
  });
});

describe("returnPastNominalSuffix", () => {
  it("should return past nominal suffix for ben", () => {
    expect(returnPastNominalSuffix("ben", "al")).toBe("dım");
    expect(returnPastNominalSuffix("ben", "getir")).toBe("dim");
    expect(returnPastNominalSuffix("ben", "ol")).toBe("dum");
    expect(returnPastNominalSuffix("ben", "gör")).toBe("düm");
    expect(returnPastNominalSuffix("ben", "oyna")).toBe("ydım");
    expect(returnPastNominalSuffix("ben", "iste")).toBe("ydim");
    expect(returnPastNominalSuffix("ben", "uyu")).toBe("ydum");
    expect(returnPastNominalSuffix("ben", "büyü")).toBe("ydüm");
    expect(returnPastNominalSuffix("ben", "kes")).toBe("tim");
    expect(returnPastNominalSuffix("ben", "hisset")).toBe("tim");
    expect(returnPastNominalSuffix("ben", "bak")).toBe("tım");
    expect(returnPastNominalSuffix("ben", "seç")).toBe("tim");
    expect(returnPastNominalSuffix("ben", "tap")).toBe("tım");
  });

  it("should return past nominal suffix for sen", () => {
    expect(returnPastNominalSuffix("sen", "al")).toBe("dın");
    expect(returnPastNominalSuffix("sen", "getir")).toBe("din");
    expect(returnPastNominalSuffix("sen", "ol")).toBe("dun");
    expect(returnPastNominalSuffix("sen", "gör")).toBe("dün");
    expect(returnPastNominalSuffix("sen", "oyna")).toBe("ydın");
    expect(returnPastNominalSuffix("sen", "iste")).toBe("ydin");
    expect(returnPastNominalSuffix("sen", "uyu")).toBe("ydun");
    expect(returnPastNominalSuffix("sen", "büyü")).toBe("ydün");
    expect(returnPastNominalSuffix("sen", "kes")).toBe("tin");
    expect(returnPastNominalSuffix("sen", "hisset")).toBe("tin");
    expect(returnPastNominalSuffix("sen", "bak")).toBe("tın");
    expect(returnPastNominalSuffix("sen", "seç")).toBe("tin");
    expect(returnPastNominalSuffix("sen", "tap")).toBe("tın");
  });

  it("should return past nominal suffix for o", () => {
    expect(returnPastNominalSuffix("o", "al")).toBe("dı");
    expect(returnPastNominalSuffix("o", "getir")).toBe("di");
    expect(returnPastNominalSuffix("o", "ol")).toBe("du");
    expect(returnPastNominalSuffix("o", "gör")).toBe("dü");
    expect(returnPastNominalSuffix("o", "oyna")).toBe("ydı");
    expect(returnPastNominalSuffix("o", "iste")).toBe("ydi");
    expect(returnPastNominalSuffix("o", "uyu")).toBe("ydu");
    expect(returnPastNominalSuffix("o", "büyü")).toBe("ydü");
    expect(returnPastNominalSuffix("o", "kes")).toBe("ti");
    expect(returnPastNominalSuffix("o", "hisset")).toBe("ti");
    expect(returnPastNominalSuffix("o", "bak")).toBe("tı");
    expect(returnPastNominalSuffix("o", "seç")).toBe("ti");
    expect(returnPastNominalSuffix("o", "tap")).toBe("tı");
  });

  it("should return past nominal suffix for biz", () => {
    expect(returnPastNominalSuffix("biz", "al")).toBe("dık");
    expect(returnPastNominalSuffix("biz", "getir")).toBe("dik");
    expect(returnPastNominalSuffix("biz", "ol")).toBe("duk");
    expect(returnPastNominalSuffix("biz", "gör")).toBe("dük");
    expect(returnPastNominalSuffix("biz", "oyna")).toBe("ydık");
    expect(returnPastNominalSuffix("biz", "iste")).toBe("ydik");
    expect(returnPastNominalSuffix("biz", "uyu")).toBe("yduk");
    expect(returnPastNominalSuffix("biz", "büyü")).toBe("ydük");
    expect(returnPastNominalSuffix("biz", "kes")).toBe("tik");
    expect(returnPastNominalSuffix("biz", "hisset")).toBe("tik");
    expect(returnPastNominalSuffix("biz", "bak")).toBe("tık");
    expect(returnPastNominalSuffix("biz", "seç")).toBe("tik");
    expect(returnPastNominalSuffix("biz", "tap")).toBe("tık");
  });

  it("should return past nominal suffix for siz", () => {
    expect(returnPastNominalSuffix("siz", "al")).toBe("dınız");
    expect(returnPastNominalSuffix("siz", "getir")).toBe("diniz");
    expect(returnPastNominalSuffix("siz", "ol")).toBe("dunuz");
    expect(returnPastNominalSuffix("siz", "gör")).toBe("dünüz");
    expect(returnPastNominalSuffix("siz", "oyna")).toBe("ydınız");
    expect(returnPastNominalSuffix("siz", "iste")).toBe("ydiniz");
    expect(returnPastNominalSuffix("siz", "uyu")).toBe("ydunuz");
    expect(returnPastNominalSuffix("siz", "büyü")).toBe("ydünüz");
    expect(returnPastNominalSuffix("siz", "kes")).toBe("tiniz");
    expect(returnPastNominalSuffix("siz", "hisset")).toBe("tiniz");
    expect(returnPastNominalSuffix("siz", "bak")).toBe("tınız");
    expect(returnPastNominalSuffix("siz", "seç")).toBe("tiniz");
    expect(returnPastNominalSuffix("siz", "tap")).toBe("tınız");
  });

  it("should return past nominal suffix for onlar", () => {
    expect(returnPastNominalSuffix("onlar", "al")).toBe("dılar");
    expect(returnPastNominalSuffix("onlar", "getir")).toBe("diler");
    expect(returnPastNominalSuffix("onlar", "ol")).toBe("dular");
    expect(returnPastNominalSuffix("onlar", "gör")).toBe("düler");
    expect(returnPastNominalSuffix("onlar", "oyna")).toBe("ydılar");
    expect(returnPastNominalSuffix("onlar", "iste")).toBe("ydiler");
    expect(returnPastNominalSuffix("onlar", "uyu")).toBe("ydular");
    expect(returnPastNominalSuffix("onlar", "büyü")).toBe("ydüler");
    expect(returnPastNominalSuffix("onlar", "kes")).toBe("tiler");
    expect(returnPastNominalSuffix("onlar", "hisset")).toBe("tiler");
    expect(returnPastNominalSuffix("onlar", "bak")).toBe("tılar");
    expect(returnPastNominalSuffix("onlar", "seç")).toBe("tiler");
    expect(returnPastNominalSuffix("onlar", "tap")).toBe("tılar");
  });
});

describe("pastNominalAffirmative", () => {
  it("should return past nominal affirmative for ben", () => {
    expect(pastNominalAffirmative("ben", "aç")).toBe("açtım");
    expect(pastNominalAffirmative("ben", "öğretmen")).toBe("öğretmendim");
    expect(pastNominalAffirmative("ben", "yorgun")).toBe("yorgundum");
    expect(pastNominalAffirmative("ben", "üzgün")).toBe("üzgündüm");
  });

  it("should return past nominal affirmative for sen", () => {
    expect(pastNominalAffirmative("sen", "aç")).toBe("açtın");
    expect(pastNominalAffirmative("sen", "öğretmen")).toBe("öğretmendin");
    expect(pastNominalAffirmative("sen", "yorgun")).toBe("yorgundun");
    expect(pastNominalAffirmative("sen", "üzgün")).toBe("üzgündün");
  });

  it("should return past nominal affirmative for o", () => {
    expect(pastNominalAffirmative("o", "aç")).toBe("açtı");
    expect(pastNominalAffirmative("o", "öğretmen")).toBe("öğretmendi");
    expect(pastNominalAffirmative("o", "yorgun")).toBe("yorgundu");
    expect(pastNominalAffirmative("o", "üzgün")).toBe("üzgündü");
  });

  it("should return past nominal affirmative for biz", () => {
    expect(pastNominalAffirmative("biz", "aç")).toBe("açtık");
    expect(pastNominalAffirmative("biz", "öğretmen")).toBe("öğretmendik");
    expect(pastNominalAffirmative("biz", "yorgun")).toBe("yorgunduk");
    expect(pastNominalAffirmative("biz", "üzgün")).toBe("üzgündük");
  });

  it("should return past nominal affirmative for siz", () => {
    expect(pastNominalAffirmative("siz", "aç")).toBe("açtınız");
    expect(pastNominalAffirmative("siz", "öğretmen")).toBe("öğretmendiniz");
    expect(pastNominalAffirmative("siz", "yorgun")).toBe("yorgundunuz");
    expect(pastNominalAffirmative("siz", "üzgün")).toBe("üzgündünüz");
  });

  it("should return past nominal affirmative for onlar", () => {
    expect(pastNominalAffirmative("onlar", "aç")).toBe("açtılar");
    expect(pastNominalAffirmative("onlar", "öğretmen")).toBe("öğretmendiler");
    expect(pastNominalAffirmative("onlar", "yorgun")).toBe("yorgundular");
    expect(pastNominalAffirmative("onlar", "üzgün")).toBe("üzgündüler");
  });
});
