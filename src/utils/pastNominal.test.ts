import {
  returnPastParticleNominal,
  returnPastNominalSuffix,
  pastNominalAffirmative,
  pastNominalNegative,
  pastNominalInterrogative,
} from "./pastNomimnal";

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

describe("pastNominalNegative", () => {
  it("should return past nominal negative for ben", () => {
    expect(pastNominalNegative("ben", "aç")).toBe("aç değildim");
    expect(pastNominalNegative("ben", "öğretmen")).toBe("öğretmen değildim");
    expect(pastNominalNegative("ben", "yorgun")).toBe("yorgun değildim");
    expect(pastNominalNegative("ben", "üzgün")).toBe("üzgün değildim");
  });

  it("should return past nominal negative for sen", () => {
    expect(pastNominalNegative("sen", "aç")).toBe("aç değildin");
    expect(pastNominalNegative("sen", "öğretmen")).toBe("öğretmen değildin");
    expect(pastNominalNegative("sen", "yorgun")).toBe("yorgun değildin");
    expect(pastNominalNegative("sen", "üzgün")).toBe("üzgün değildin");
  });

  it("should return past nominal negative for o", () => {
    expect(pastNominalNegative("o", "aç")).toBe("aç değildi");
    expect(pastNominalNegative("o", "öğretmen")).toBe("öğretmen değildi");
    expect(pastNominalNegative("o", "yorgun")).toBe("yorgun değildi");
    expect(pastNominalNegative("o", "üzgün")).toBe("üzgün değildi");
  });

  it("should return past nominal negative for biz", () => {
    expect(pastNominalNegative("biz", "aç")).toBe("aç değildik");
    expect(pastNominalNegative("biz", "öğretmen")).toBe("öğretmen değildik");
    expect(pastNominalNegative("biz", "yorgun")).toBe("yorgun değildik");
    expect(pastNominalNegative("biz", "üzgün")).toBe("üzgün değildik");
  });

  it("should return past nominal negative for siz", () => {
    expect(pastNominalNegative("siz", "aç")).toBe("aç değildiniz");
    expect(pastNominalNegative("siz", "öğretmen")).toBe("öğretmen değildiniz");
    expect(pastNominalNegative("siz", "yorgun")).toBe("yorgun değildiniz");
    expect(pastNominalNegative("siz", "üzgün")).toBe("üzgün değildiniz");
  });

  it("should return past nominal negative for onlar", () => {
    expect(pastNominalNegative("onlar", "aç")).toBe("aç değillerdi");
    expect(pastNominalNegative("onlar", "öğretmen")).toBe("öğretmen değillerdi");
    expect(pastNominalNegative("onlar", "yorgun")).toBe("yorgun değillerdi");
    expect(pastNominalNegative("onlar", "üzgün")).toBe("üzgün değillerdi");
  });
});

describe("pastNominalInterrogative", () => {
  it("should return past nominal interrogative for ben", () => {
    expect(pastNominalInterrogative("ben", "aç")).toBe("aç mıydım?");
    expect(pastNominalInterrogative("ben", "öğretmen")).toBe("öğretmen miydim?");
    expect(pastNominalInterrogative("ben", "yorgun")).toBe("yorgun muydum?");
    expect(pastNominalInterrogative("ben", "üzgün")).toBe("üzgün müydüm?");
  });

  it("should return past nominal interrogative for sen", () => {
    expect(pastNominalInterrogative("sen", "aç")).toBe("aç mıydın?");
    expect(pastNominalInterrogative("sen", "öğretmen")).toBe("öğretmen miydin?");
    expect(pastNominalInterrogative("sen", "yorgun")).toBe("yorgun muydun?");
    expect(pastNominalInterrogative("sen", "üzgün")).toBe("üzgün müydün?");
  });

  it("should return past nominal interrogative for o", () => {
    expect(pastNominalInterrogative("o", "aç")).toBe("aç mıydı?");
    expect(pastNominalInterrogative("o", "öğretmen")).toBe("öğretmen miydi?");
    expect(pastNominalInterrogative("o", "yorgun")).toBe("yorgun muydu?");
    expect(pastNominalInterrogative("o", "üzgün")).toBe("üzgün müydü?");
  });

  it("should return past nominal interrogative for biz", () => {
    expect(pastNominalInterrogative("biz", "aç")).toBe("aç mıydık?");
    expect(pastNominalInterrogative("biz", "öğretmen")).toBe("öğretmen miydik?");
    expect(pastNominalInterrogative("biz", "yorgun")).toBe("yorgun muyduk?");
    expect(pastNominalInterrogative("biz", "üzgün")).toBe("üzgün müydük?");
  });

  it("should return past nominal interrogative for siz", () => {
    expect(pastNominalInterrogative("siz", "aç")).toBe("aç mıydınız?");
    expect(pastNominalInterrogative("siz", "öğretmen")).toBe("öğretmen miydiniz?");
    expect(pastNominalInterrogative("siz", "yorgun")).toBe("yorgun muydunuz?");
    expect(pastNominalInterrogative("siz", "üzgün")).toBe("üzgün müydünüz?");
  });

  it("should return past nominal interrogative for onlar", () => {
    expect(pastNominalInterrogative("onlar", "aç")).toBe("açlar mıydı?");
    expect(pastNominalInterrogative("onlar", "öğretmen")).toBe("öğretmenler miydi?");
    expect(pastNominalInterrogative("onlar", "yorgun")).toBe("yorgunlar mıydı?");
    expect(pastNominalInterrogative("onlar", "üzgün")).toBe("üzgünler miydi?");
  });
});
