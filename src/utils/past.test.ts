import {
  returnPastParticle,
  returnParticleWithConjugatedEnding,
  conjugativePastAffirmative,
  conjugativePastNegative,
  conjugatePastInterrogative,
  conjugativePastNegativeInterrogative,
} from "./past";

describe("returnPastParticle", () => {
  it("should return the correct past particle for verbs with 'a' and 'ı'", () => {
    expect(returnPastParticle("aç")).toBe("tı");
    expect(returnPastParticle("çalış")).toBe("tı");
    expect(returnPastParticle("hoşlan")).toBe("dı");
    expect(returnPastParticle("ayrıl")).toBe("dı");
  });
  it("should return the correct past particle for verbs with 'e' and 'i'", () => {
    expect(returnPastParticle("sev")).toBe("di");
    expect(returnPastParticle("git")).toBe("ti");
    expect(returnPastParticle("bil")).toBe("di");
    expect(returnPastParticle("kaybet")).toBe("ti");
  });
  it("should return the correct past particle for verbs with 'o' and 'u'", () => {
    expect(returnPastParticle("ol")).toBe("du");
    expect(returnPastParticle("otur")).toBe("du");
    expect(returnPastParticle("buluş")).toBe("tu");
    expect(returnPastParticle("koş")).toBe("tu");
  });
  it("should return the correct past particle for verbs with 'ö' and 'ü'", () => {
    expect(returnPastParticle("gör")).toBe("dü");
    expect(returnPastParticle("ört")).toBe("tü");
    expect(returnPastParticle("gorün")).toBe("dü");
    expect(returnPastParticle("düş")).toBe("tü");
  });
});

describe("returnParticleWithConjugatedEnding", () => {
  it("should return the correct past particle with the correct conjugated ending for 'ben'", () => {
    expect(returnParticleWithConjugatedEnding("ben", "aç")).toBe("tım");
    expect(returnParticleWithConjugatedEnding("ben", "çalış")).toBe("tım");
    expect(returnParticleWithConjugatedEnding("ben", "hoşlan")).toBe("dım");
    expect(returnParticleWithConjugatedEnding("ben", "ayrıl")).toBe("dım");
    expect(returnParticleWithConjugatedEnding("ben", "sev")).toBe("dim");
    expect(returnParticleWithConjugatedEnding("ben", "git")).toBe("tim");
    expect(returnParticleWithConjugatedEnding("ben", "bil")).toBe("dim");
    expect(returnParticleWithConjugatedEnding("ben", "kaybet")).toBe("tim");
    expect(returnParticleWithConjugatedEnding("ben", "ol")).toBe("dum");
    expect(returnParticleWithConjugatedEnding("ben", "otur")).toBe("dum");
    expect(returnParticleWithConjugatedEnding("ben", "buluş")).toBe("tum");
    expect(returnParticleWithConjugatedEnding("ben", "koş")).toBe("tum");
    expect(returnParticleWithConjugatedEnding("ben", "gör")).toBe("düm");
    expect(returnParticleWithConjugatedEnding("ben", "ört")).toBe("tüm");
    expect(returnParticleWithConjugatedEnding("ben", "gorün")).toBe("düm");
    expect(returnParticleWithConjugatedEnding("ben", "düş")).toBe("tüm");
  });

  it("should return the correct past particle with the correct conjugated ending for 'sen'", () => {
    expect(returnParticleWithConjugatedEnding("sen", "aç")).toBe("tın");
    expect(returnParticleWithConjugatedEnding("sen", "çalış")).toBe("tın");
    expect(returnParticleWithConjugatedEnding("sen", "hoşlan")).toBe("dın");
    expect(returnParticleWithConjugatedEnding("sen", "ayrıl")).toBe("dın");
    expect(returnParticleWithConjugatedEnding("sen", "sev")).toBe("din");
    expect(returnParticleWithConjugatedEnding("sen", "git")).toBe("tin");
    expect(returnParticleWithConjugatedEnding("sen", "bil")).toBe("din");
    expect(returnParticleWithConjugatedEnding("sen", "kaybet")).toBe("tin");
    expect(returnParticleWithConjugatedEnding("sen", "ol")).toBe("dun");
    expect(returnParticleWithConjugatedEnding("sen", "otur")).toBe("dun");
    expect(returnParticleWithConjugatedEnding("sen", "buluş")).toBe("tun");
    expect(returnParticleWithConjugatedEnding("sen", "koş")).toBe("tun");
    expect(returnParticleWithConjugatedEnding("sen", "gör")).toBe("dün");
    expect(returnParticleWithConjugatedEnding("sen", "ört")).toBe("tün");
    expect(returnParticleWithConjugatedEnding("sen", "gorün")).toBe("dün");
    expect(returnParticleWithConjugatedEnding("sen", "düş")).toBe("tün");
  });

  it("should return the correct past particle with the correct conjugated ending for 'o'", () => {
    expect(returnParticleWithConjugatedEnding("o", "aç")).toBe("tı");
    expect(returnParticleWithConjugatedEnding("o", "çalış")).toBe("tı");
    expect(returnParticleWithConjugatedEnding("o", "hoşlan")).toBe("dı");
    expect(returnParticleWithConjugatedEnding("o", "ayrıl")).toBe("dı");
    expect(returnParticleWithConjugatedEnding("o", "sev")).toBe("di");
    expect(returnParticleWithConjugatedEnding("o", "git")).toBe("ti");
    expect(returnParticleWithConjugatedEnding("o", "bil")).toBe("di");
    expect(returnParticleWithConjugatedEnding("o", "kaybet")).toBe("ti");
    expect(returnParticleWithConjugatedEnding("o", "ol")).toBe("du");
    expect(returnParticleWithConjugatedEnding("o", "otur")).toBe("du");
    expect(returnParticleWithConjugatedEnding("o", "buluş")).toBe("tu");
    expect(returnParticleWithConjugatedEnding("o", "koş")).toBe("tu");
    expect(returnParticleWithConjugatedEnding("o", "gör")).toBe("dü");
    expect(returnParticleWithConjugatedEnding("o", "ört")).toBe("tü");
    expect(returnParticleWithConjugatedEnding("o", "gorün")).toBe("dü");
    expect(returnParticleWithConjugatedEnding("o", "düş")).toBe("tü");
  });

  it("should return the correct past particle with the correct conjugated ending for 'biz'", () => {
    expect(returnParticleWithConjugatedEnding("biz", "aç")).toBe("tık");
    expect(returnParticleWithConjugatedEnding("biz", "çalış")).toBe("tık");
    expect(returnParticleWithConjugatedEnding("biz", "hoşlan")).toBe("dık");
    expect(returnParticleWithConjugatedEnding("biz", "ayrıl")).toBe("dık");
    expect(returnParticleWithConjugatedEnding("biz", "sev")).toBe("dik");
    expect(returnParticleWithConjugatedEnding("biz", "git")).toBe("tik");
    expect(returnParticleWithConjugatedEnding("biz", "bil")).toBe("dik");
    expect(returnParticleWithConjugatedEnding("biz", "kaybet")).toBe("tik");
    expect(returnParticleWithConjugatedEnding("biz", "ol")).toBe("duk");
    expect(returnParticleWithConjugatedEnding("biz", "otur")).toBe("duk");
    expect(returnParticleWithConjugatedEnding("biz", "buluş")).toBe("tuk");
    expect(returnParticleWithConjugatedEnding("biz", "koş")).toBe("tuk");
    expect(returnParticleWithConjugatedEnding("biz", "gör")).toBe("dük");
    expect(returnParticleWithConjugatedEnding("biz", "ört")).toBe("tük");
    expect(returnParticleWithConjugatedEnding("biz", "gorün")).toBe("dük");
    expect(returnParticleWithConjugatedEnding("biz", "düş")).toBe("tük");
  });

  it("should return the correct past particle with the correct conjugated ending for 'siz'", () => {
    expect(returnParticleWithConjugatedEnding("siz", "aç")).toBe("tınız");
    expect(returnParticleWithConjugatedEnding("siz", "çalış")).toBe("tınız");
    expect(returnParticleWithConjugatedEnding("siz", "hoşlan")).toBe("dınız");
    expect(returnParticleWithConjugatedEnding("siz", "ayrıl")).toBe("dınız");
    expect(returnParticleWithConjugatedEnding("siz", "sev")).toBe("diniz");
    expect(returnParticleWithConjugatedEnding("siz", "git")).toBe("tiniz");
    expect(returnParticleWithConjugatedEnding("siz", "bil")).toBe("diniz");
    expect(returnParticleWithConjugatedEnding("siz", "kaybet")).toBe("tiniz");
    expect(returnParticleWithConjugatedEnding("siz", "ol")).toBe("dunuz");
    expect(returnParticleWithConjugatedEnding("siz", "otur")).toBe("dunuz");
    expect(returnParticleWithConjugatedEnding("siz", "buluş")).toBe("tunuz");
    expect(returnParticleWithConjugatedEnding("siz", "koş")).toBe("tunuz");
    expect(returnParticleWithConjugatedEnding("siz", "gör")).toBe("dünüz");
    expect(returnParticleWithConjugatedEnding("siz", "ört")).toBe("tünüz");
    expect(returnParticleWithConjugatedEnding("siz", "gorün")).toBe("dünüz");
    expect(returnParticleWithConjugatedEnding("siz", "düş")).toBe("tünüz");
  });

  it("should return the correct past particle with the correct conjugated ending for 'onlar'", () => {
    expect(returnParticleWithConjugatedEnding("onlar", "aç")).toBe("tılar");
    expect(returnParticleWithConjugatedEnding("onlar", "çalış")).toBe("tılar");
    expect(returnParticleWithConjugatedEnding("onlar", "hoşlan")).toBe("dılar");
    expect(returnParticleWithConjugatedEnding("onlar", "ayrıl")).toBe("dılar");
    expect(returnParticleWithConjugatedEnding("onlar", "sev")).toBe("diler");
    expect(returnParticleWithConjugatedEnding("onlar", "git")).toBe("tiler");
    expect(returnParticleWithConjugatedEnding("onlar", "bil")).toBe("diler");
    expect(returnParticleWithConjugatedEnding("onlar", "kaybet")).toBe("tiler");
    expect(returnParticleWithConjugatedEnding("onlar", "ol")).toBe("dular");
    expect(returnParticleWithConjugatedEnding("onlar", "otur")).toBe("dular");
    expect(returnParticleWithConjugatedEnding("onlar", "buluş")).toBe("tular");
    expect(returnParticleWithConjugatedEnding("onlar", "koş")).toBe("tular");
    expect(returnParticleWithConjugatedEnding("onlar", "gör")).toBe("düler");
    expect(returnParticleWithConjugatedEnding("onlar", "ört")).toBe("tüler");
    expect(returnParticleWithConjugatedEnding("onlar", "gorün")).toBe("düler");
    expect(returnParticleWithConjugatedEnding("onlar", "düş")).toBe("tüler");
  });
});

describe("conjugativePastAffirmative", () => {
  it("should return the correct past affirmative conjugation for 'ben'", () => {
    expect(conjugativePastAffirmative("ben", "izle")).toBe("izledim");
    expect(conjugativePastAffirmative("ben", "al")).toBe("aldım");
    expect(conjugativePastAffirmative("ben", "koş")).toBe("koştum");
    expect(conjugativePastAffirmative("ben", "gör")).toBe("gördüm");
  });
  it("should return the correct past affirmative conjugation for 'sen'", () => {
    expect(conjugativePastAffirmative("sen", "izle")).toBe("izledin");
    expect(conjugativePastAffirmative("sen", "al")).toBe("aldın");
    expect(conjugativePastAffirmative("sen", "koş")).toBe("koştun");
    expect(conjugativePastAffirmative("sen", "gör")).toBe("gördün");
  });
  it("should return the correct past affirmative conjugation for 'o'", () => {
    expect(conjugativePastAffirmative("o", "izle")).toBe("izledi");
    expect(conjugativePastAffirmative("o", "al")).toBe("aldı");
    expect(conjugativePastAffirmative("o", "koş")).toBe("koştu");
    expect(conjugativePastAffirmative("o", "gör")).toBe("gördü");
  });
  it("should return the correct past affirmative conjugation for 'biz'", () => {
    expect(conjugativePastAffirmative("biz", "izle")).toBe("izledik");
    expect(conjugativePastAffirmative("biz", "al")).toBe("aldık");
    expect(conjugativePastAffirmative("biz", "koş")).toBe("koştuk");
    expect(conjugativePastAffirmative("biz", "gör")).toBe("gördük");
  });
  it("should return the correct past affirmative conjugation for 'siz'", () => {
    expect(conjugativePastAffirmative("siz", "izle")).toBe("izlediniz");
    expect(conjugativePastAffirmative("siz", "al")).toBe("aldınız");
    expect(conjugativePastAffirmative("siz", "koş")).toBe("koştunuz");
    expect(conjugativePastAffirmative("siz", "gör")).toBe("gördünüz");
  });
  it("should return the correct past affirmative conjugation for 'onlar'", () => {
    expect(conjugativePastAffirmative("onlar", "izle")).toBe("izlediler");
    expect(conjugativePastAffirmative("onlar", "al")).toBe("aldılar");
    expect(conjugativePastAffirmative("onlar", "koş")).toBe("koştular");
    expect(conjugativePastAffirmative("onlar", "gör")).toBe("gördüler");
  });
});

describe("conjugativePastNegative", () => {
  it("should return the correct past negative conjugation for 'ben'", () => {
    expect(conjugativePastNegative("ben", "izle")).toBe("izlemedim");
    expect(conjugativePastNegative("ben", "al")).toBe("almadım");
    expect(conjugativePastNegative("ben", "koş")).toBe("koşmadım");
    expect(conjugativePastNegative("ben", "gör")).toBe("görmedim");
  });
  it("should return the correct past negative conjugation for 'sen'", () => {
    expect(conjugativePastNegative("sen", "izle")).toBe("izlemedin");
    expect(conjugativePastNegative("sen", "al")).toBe("almadın");
    expect(conjugativePastNegative("sen", "koş")).toBe("koşmadın");
    expect(conjugativePastNegative("sen", "gör")).toBe("görmedin");
  });
  it("should return the correct past negative conjugation for 'o'", () => {
    expect(conjugativePastNegative("o", "izle")).toBe("izlemedi");
    expect(conjugativePastNegative("o", "al")).toBe("almadı");
    expect(conjugativePastNegative("o", "koş")).toBe("koşmadı");
    expect(conjugativePastNegative("o", "gör")).toBe("görmedi");
  });
  it("should return the correct past negative conjugation for 'biz'", () => {
    expect(conjugativePastNegative("biz", "izle")).toBe("izlemedik");
    expect(conjugativePastNegative("biz", "al")).toBe("almadık");
    expect(conjugativePastNegative("biz", "koş")).toBe("koşmadık");
    expect(conjugativePastNegative("biz", "gör")).toBe("görmedik");
  });
  it("should return the correct past negative conjugation for 'siz'", () => {
    expect(conjugativePastNegative("siz", "izle")).toBe("izlemediniz");
    expect(conjugativePastNegative("siz", "al")).toBe("almadınız");
    expect(conjugativePastNegative("siz", "koş")).toBe("koşmadınız");
    expect(conjugativePastNegative("siz", "gör")).toBe("görmediniz");
  });
  it("should return the correct past negative conjugation for 'onlar'", () => {
    expect(conjugativePastNegative("onlar", "izle")).toBe("izlemediler");
    expect(conjugativePastNegative("onlar", "al")).toBe("almadılar");
    expect(conjugativePastNegative("onlar", "koş")).toBe("koşmadılar");
    expect(conjugativePastNegative("onlar", "gör")).toBe("görmediler");
  });
});

describe("conjugatePastInterrogative", () => {
  it("should return the correct past interrogative conjugation for 'ben'", () => {
    expect(conjugatePastInterrogative("ben", "izle")).toBe("izledim mi?");
    expect(conjugatePastInterrogative("ben", "al")).toBe("aldım mı?");
    expect(conjugatePastInterrogative("ben", "koş")).toBe("koştum mu?");
    expect(conjugatePastInterrogative("ben", "gör")).toBe("gördüm mü?");
  });
  it("should return the correct past interrogative conjugation for 'sen'", () => {
    expect(conjugatePastInterrogative("sen", "izle")).toBe("izledin mi?");
    expect(conjugatePastInterrogative("sen", "al")).toBe("aldın mı?");
    expect(conjugatePastInterrogative("sen", "koş")).toBe("koştun mu?");
    expect(conjugatePastInterrogative("sen", "gör")).toBe("gördün mü?");
  });
  it("should return the correct past interrogative conjugation for 'o'", () => {
    expect(conjugatePastInterrogative("o", "izle")).toBe("izledi mi?");
    expect(conjugatePastInterrogative("o", "al")).toBe("aldı mı?");
    expect(conjugatePastInterrogative("o", "koş")).toBe("koştu mu?");
    expect(conjugatePastInterrogative("o", "gör")).toBe("gördü mü?");
  });
  it("should return the correct past interrogative conjugation for 'biz'", () => {
    expect(conjugatePastInterrogative("biz", "izle")).toBe("izledik mi?");
    expect(conjugatePastInterrogative("biz", "al")).toBe("aldık mı?");
    expect(conjugatePastInterrogative("biz", "koş")).toBe("koştuk mu?");
    expect(conjugatePastInterrogative("biz", "gör")).toBe("gördük mü?");
  });
  it("should return the correct past interrogative conjugation for 'siz'", () => {
    expect(conjugatePastInterrogative("siz", "izle")).toBe("izlediniz mi?");
    expect(conjugatePastInterrogative("siz", "al")).toBe("aldınız mı?");
    expect(conjugatePastInterrogative("siz", "koş")).toBe("koştunuz mu?");
    expect(conjugatePastInterrogative("siz", "gör")).toBe("gördünüz mü?");
  });
  it("should return the correct past interrogative conjugation for 'onlar'", () => {
    expect(conjugatePastInterrogative("onlar", "izle")).toBe("izlediler mi?");
    expect(conjugatePastInterrogative("onlar", "al")).toBe("aldılar mı?");
    expect(conjugatePastInterrogative("onlar", "koş")).toBe("koştular mı?");
    expect(conjugatePastInterrogative("onlar", "gör")).toBe("gördüler mi?");
  });
});

describe("conjugativePastNegativeInterrogative", () => {
  it("should return the correct past negative interrogative conjugation for 'ben'", () => {
    expect(conjugativePastNegativeInterrogative("ben", "izle")).toBe("izlemedim mi?");
    expect(conjugativePastNegativeInterrogative("ben", "al")).toBe("almadım mı?");
    expect(conjugativePastNegativeInterrogative("ben", "koş")).toBe("koşmadım mı?");
    expect(conjugativePastNegativeInterrogative("ben", "gör")).toBe("görmedim mi?");
  });
  it("should return the correct past negative interrogative conjugation for 'sen'", () => {
    expect(conjugativePastNegativeInterrogative("sen", "izle")).toBe("izlemedin mi?");
    expect(conjugativePastNegativeInterrogative("sen", "al")).toBe("almadın mı?");
    expect(conjugativePastNegativeInterrogative("sen", "koş")).toBe("koşmadın mı?");
    expect(conjugativePastNegativeInterrogative("sen", "gör")).toBe("görmedin mi?");
  });
  it("should return the correct past negative interrogative conjugation for 'o'", () => {
    expect(conjugativePastNegativeInterrogative("o", "izle")).toBe("izlemedi mi?");
    expect(conjugativePastNegativeInterrogative("o", "al")).toBe("almadı mı?");
    expect(conjugativePastNegativeInterrogative("o", "koş")).toBe("koşmadı mı?");
    expect(conjugativePastNegativeInterrogative("o", "gör")).toBe("görmedi mi?");
  });
  it("should return the correct past negative interrogative conjugation for 'biz'", () => {
    expect(conjugativePastNegativeInterrogative("biz", "izle")).toBe("izlemedik mi?");
    expect(conjugativePastNegativeInterrogative("biz", "al")).toBe("almadık mı?");
    expect(conjugativePastNegativeInterrogative("biz", "koş")).toBe("koşmadık mı?");
    expect(conjugativePastNegativeInterrogative("biz", "gör")).toBe("görmedik mi?");
  });
  it("should return the correct past negative interrogative conjugation for 'siz'", () => {
    expect(conjugativePastNegativeInterrogative("siz", "izle")).toBe("izlemediniz mi?");
    expect(conjugativePastNegativeInterrogative("siz", "al")).toBe("almadınız mı?");
    expect(conjugativePastNegativeInterrogative("siz", "koş")).toBe("koşmadınız mı?");
    expect(conjugativePastNegativeInterrogative("siz", "gör")).toBe("görmediniz mi?");
  });
  it("should return the correct past negative interrogative conjugation for 'onlar'", () => {
    expect(conjugativePastNegativeInterrogative("onlar", "izle")).toBe("izlemediler mi?");
    expect(conjugativePastNegativeInterrogative("onlar", "al")).toBe("almadılar mı?");
    expect(conjugativePastNegativeInterrogative("onlar", "koş")).toBe("koşmadılar mı?");
    expect(conjugativePastNegativeInterrogative("onlar", "gör")).toBe("görmediler mi?");
  });
});
