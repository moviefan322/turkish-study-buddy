import { returnPastParticle, returnParticleWithConjugatedEnding } from "./past";

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
    expect(returnParticleWithConjugatedEnding("aç", "ben")).toBe("tım");
    expect(returnParticleWithConjugatedEnding("çalış", "ben")).toBe("tım");
    expect(returnParticleWithConjugatedEnding("hoşlan", "ben")).toBe("dım");
    expect(returnParticleWithConjugatedEnding("ayrıl", "ben")).toBe("dım");
    expect(returnParticleWithConjugatedEnding("sev", "ben")).toBe("dim");
    expect(returnParticleWithConjugatedEnding("git", "ben")).toBe("tim");
    expect(returnParticleWithConjugatedEnding("bil", "ben")).toBe("dim");
    expect(returnParticleWithConjugatedEnding("kaybet", "ben")).toBe("tim");
    expect(returnParticleWithConjugatedEnding("ol", "ben")).toBe("dum");
    expect(returnParticleWithConjugatedEnding("otur", "ben")).toBe("dum");
    expect(returnParticleWithConjugatedEnding("buluş", "ben")).toBe("tum");
    expect(returnParticleWithConjugatedEnding("koş", "ben")).toBe("tum");
    expect(returnParticleWithConjugatedEnding("gör", "ben")).toBe("düm");
    expect(returnParticleWithConjugatedEnding("ört", "ben")).toBe("tüm");
    expect(returnParticleWithConjugatedEnding("gorün", "ben")).toBe("düm");
    expect(returnParticleWithConjugatedEnding("düş", "ben")).toBe("tüm");
  });

  it("should return the correct past particle with the correct conjugated ending for 'sen'", () => {
    expect(returnParticleWithConjugatedEnding("aç", "sen")).toBe("tın");
    expect(returnParticleWithConjugatedEnding("çalış", "sen")).toBe("tın");
    expect(returnParticleWithConjugatedEnding("hoşlan", "sen")).toBe("dın");
    expect(returnParticleWithConjugatedEnding("ayrıl", "sen")).toBe("dın");
    expect(returnParticleWithConjugatedEnding("sev", "sen")).toBe("din");
    expect(returnParticleWithConjugatedEnding("git", "sen")).toBe("tin");
    expect(returnParticleWithConjugatedEnding("bil", "sen")).toBe("din");
    expect(returnParticleWithConjugatedEnding("kaybet", "sen")).toBe("tin");
    expect(returnParticleWithConjugatedEnding("ol", "sen")).toBe("dun");
    expect(returnParticleWithConjugatedEnding("otur", "sen")).toBe("dun");
    expect(returnParticleWithConjugatedEnding("buluş", "sen")).toBe("tun");
    expect(returnParticleWithConjugatedEnding("koş", "sen")).toBe("tun");
    expect(returnParticleWithConjugatedEnding("gör", "sen")).toBe("dün");
    expect(returnParticleWithConjugatedEnding("ört", "sen")).toBe("tün");
    expect(returnParticleWithConjugatedEnding("gorün", "sen")).toBe("dün");
    expect(returnParticleWithConjugatedEnding("düş", "sen")).toBe("tün");
  });

  it("should return the correct past particle with the correct conjugated ending for 'o'", () => {
    expect(returnParticleWithConjugatedEnding("aç", "o")).toBe("tı");
    expect(returnParticleWithConjugatedEnding("çalış", "o")).toBe("tı");
    expect(returnParticleWithConjugatedEnding("hoşlan", "o")).toBe("dı");
    expect(returnParticleWithConjugatedEnding("ayrıl", "o")).toBe("dı");
    expect(returnParticleWithConjugatedEnding("sev", "o")).toBe("di");
    expect(returnParticleWithConjugatedEnding("git", "o")).toBe("ti");
    expect(returnParticleWithConjugatedEnding("bil", "o")).toBe("di");
    expect(returnParticleWithConjugatedEnding("kaybet", "o")).toBe("ti");
    expect(returnParticleWithConjugatedEnding("ol", "o")).toBe("du");
    expect(returnParticleWithConjugatedEnding("otur", "o")).toBe("du");
    expect(returnParticleWithConjugatedEnding("buluş", "o")).toBe("tu");
    expect(returnParticleWithConjugatedEnding("koş", "o")).toBe("tu");
    expect(returnParticleWithConjugatedEnding("gör", "o")).toBe("dü");
    expect(returnParticleWithConjugatedEnding("ört", "o")).toBe("tü");
    expect(returnParticleWithConjugatedEnding("gorün", "o")).toBe("dü");
    expect(returnParticleWithConjugatedEnding("düş", "o")).toBe("tü");
  });

  it("should return the correct past particle with the correct conjugated ending for 'biz'", () => {
    expect(returnParticleWithConjugatedEnding("aç", "biz")).toBe("tık");
    expect(returnParticleWithConjugatedEnding("çalış", "biz")).toBe("tık");
    expect(returnParticleWithConjugatedEnding("hoşlan", "biz")).toBe("dık");
    expect(returnParticleWithConjugatedEnding("ayrıl", "biz")).toBe("dık");
    expect(returnParticleWithConjugatedEnding("sev", "biz")).toBe("dik");
    expect(returnParticleWithConjugatedEnding("git", "biz")).toBe("tik");
    expect(returnParticleWithConjugatedEnding("bil", "biz")).toBe("dik");
    expect(returnParticleWithConjugatedEnding("kaybet", "biz")).toBe("tik");
    expect(returnParticleWithConjugatedEnding("ol", "biz")).toBe("duk");
    expect(returnParticleWithConjugatedEnding("otur", "biz")).toBe("duk");
    expect(returnParticleWithConjugatedEnding("buluş", "biz")).toBe("tuk");
    expect(returnParticleWithConjugatedEnding("koş", "biz")).toBe("tuk");
    expect(returnParticleWithConjugatedEnding("gör", "biz")).toBe("dük");
    expect(returnParticleWithConjugatedEnding("ört", "biz")).toBe("tük");
    expect(returnParticleWithConjugatedEnding("gorün", "biz")).toBe("dük");
    expect(returnParticleWithConjugatedEnding("düş", "biz")).toBe("tük");
  });

  it("should return the correct past particle with the correct conjugated ending for 'siz'", () => {
    expect(returnParticleWithConjugatedEnding("aç", "siz")).toBe("tınız");
    expect(returnParticleWithConjugatedEnding("çalış", "siz")).toBe("tınız");
    expect(returnParticleWithConjugatedEnding("hoşlan", "siz")).toBe("dınız");
    expect(returnParticleWithConjugatedEnding("ayrıl", "siz")).toBe("dınız");
    expect(returnParticleWithConjugatedEnding("sev", "siz")).toBe("diniz");
    expect(returnParticleWithConjugatedEnding("git", "siz")).toBe("tiniz");
    expect(returnParticleWithConjugatedEnding("bil", "siz")).toBe("diniz");
    expect(returnParticleWithConjugatedEnding("kaybet", "siz")).toBe("tiniz");
    expect(returnParticleWithConjugatedEnding("ol", "siz")).toBe("dunuz");
    expect(returnParticleWithConjugatedEnding("otur", "siz")).toBe("dunuz");
    expect(returnParticleWithConjugatedEnding("buluş", "siz")).toBe("tunuz");
    expect(returnParticleWithConjugatedEnding("koş", "siz")).toBe("tunuz");
    expect(returnParticleWithConjugatedEnding("gör", "siz")).toBe("dünüz");
    expect(returnParticleWithConjugatedEnding("ört", "siz")).toBe("tünüz");
    expect(returnParticleWithConjugatedEnding("gorün", "siz")).toBe("dünüz");
    expect(returnParticleWithConjugatedEnding("düş", "siz")).toBe("tünüz");
  });

  it("should return the correct past particle with the correct conjugated ending for 'onlar'", () => {
    expect(returnParticleWithConjugatedEnding("aç", "onlar")).toBe("tılar");
    expect(returnParticleWithConjugatedEnding("çalış", "onlar")).toBe("tılar");
    expect(returnParticleWithConjugatedEnding("hoşlan", "onlar")).toBe("dılar");
    expect(returnParticleWithConjugatedEnding("ayrıl", "onlar")).toBe("dılar");
    expect(returnParticleWithConjugatedEnding("sev", "onlar")).toBe("dilar");
    expect(returnParticleWithConjugatedEnding("git", "onlar")).toBe("tiler");
    expect(returnParticleWithConjugatedEnding("bil", "onlar")).toBe("dilar");
    expect(returnParticleWithConjugatedEnding("kaybet", "onlar")).toBe("tiler");
    expect(returnParticleWithConjugatedEnding("ol", "onlar")).toBe("dular");
    expect(returnParticleWithConjugatedEnding("otur", "onlar")).toBe("dular");
    expect(returnParticleWithConjugatedEnding("buluş", "onlar")).toBe("tular");
    expect(returnParticleWithConjugatedEnding("koş", "onlar")).toBe("tular");
    expect(returnParticleWithConjugatedEnding("gör", "onlar")).toBe("düler");
    expect(returnParticleWithConjugatedEnding("ört", "onlar")).toBe("tüler");
    expect(returnParticleWithConjugatedEnding("gorün", "onlar")).toBe("düler");
    expect(returnParticleWithConjugatedEnding("düş", "onlar")).toBe("tüler");
  });
});
