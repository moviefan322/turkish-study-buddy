import {
  nominalConjugation,
  degilWithSuffix,
  nominalConjugationNegative,
  nominalConjugationInterrogative,
  nominalConjugationNegativeInterrogative,
  englishNominalPhraseAdjective,
  englishNominalPhraseAdjectiveNegative,
  englishNominalPhraseAdjectiveInterrogative,
  englishNominalPhraseAdjectiveNegativeInterrogative,
  englishNominalPhraseAdjectiveMaster,
  englishNominalPhraseNoun,
  englishNominalPhraseNounNegative,
  englishNominalPhraseNounInterrogative,
  englishNominalPhraseNounNegativeInterrogative,
  englishNominalPhraseNounMaster,
  turkishNominalPhraseMaster,
  nominalNounMaster,
  nominalAdjectiveMaster,
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

describe("nominalConjugationNegativeInterrogative", () => {
  it("returns the correct negative interrogative conjugation for ben", () => {
    expect(nominalConjugationNegativeInterrogative("Ben", "aç")).toBe("aç değil miyim?");
  });

  it("returns the correct negative interrogative conjugation for sen", () => {
    expect(nominalConjugationNegativeInterrogative("Sen", "aç")).toBe("aç değil misin?");
  });

  it("returns the correct negative interrogative conjugation for o", () => {
    expect(nominalConjugationNegativeInterrogative("O", "aç")).toBe("aç değil mi?");
  });

  it("returns the correct negative interrogative conjugation for biz", () => {
    expect(nominalConjugationNegativeInterrogative("Biz", "aç")).toBe("aç değil miyiz?");
  });

  it("returns the correct negative interrogative conjugation for siz", () => {
    expect(nominalConjugationNegativeInterrogative("Siz", "aç")).toBe("aç değil misiniz?");
  });

  it("returns the correct negative interrogative conjugation for onlar", () => {
    expect(nominalConjugationNegativeInterrogative("Onlar", "aç")).toBe("aç değil(ler) mi?");
  });
});

describe("englishNominalPhraseAdjective", () => {
  it("returns the correct English nominal phrase with adjective", () => {
    expect(englishNominalPhraseAdjective("I", "tired")).toBe("I am tired");
    expect(englishNominalPhraseAdjective("You", "happy")).toBe("You are happy");
    expect(englishNominalPhraseAdjective("He", "hungry")).toBe("He is hungry");
    expect(englishNominalPhraseAdjective("She", "hungry")).toBe("She is hungry");
    expect(englishNominalPhraseAdjective("It", "hungry")).toBe("It is hungry");
    expect(englishNominalPhraseAdjective("We", "excited")).toBe("We are excited");
    expect(englishNominalPhraseAdjective("They", "sad")).toBe("They are sad");
  });
});

describe("englishNominalPhraseAdjectiveNegative", () => {
  it("returns the correct English nominal phrase with adjective", () => {
    expect(englishNominalPhraseAdjectiveNegative("I", "tired")).toBe("I am not tired");
    expect(englishNominalPhraseAdjectiveNegative("You", "happy")).toBe("You aren't happy");
    expect(englishNominalPhraseAdjectiveNegative("He", "hungry")).toBe("He isn't hungry");
    expect(englishNominalPhraseAdjectiveNegative("She", "hungry")).toBe("She isn't hungry");
    expect(englishNominalPhraseAdjectiveNegative("It", "hungry")).toBe("It isn't hungry");
    expect(englishNominalPhraseAdjectiveNegative("We", "excited")).toBe("We aren't excited");
    expect(englishNominalPhraseAdjectiveNegative("They", "sad")).toBe("They aren't sad");
  });
});

describe("englishNominalPhraseAdjectiveInterrogative", () => {
  it("returns the correct English nominal phrase with adjective", () => {
    expect(englishNominalPhraseAdjectiveInterrogative("I", "tired")).toBe("Am I tired?");
    expect(englishNominalPhraseAdjectiveInterrogative("You", "happy")).toBe("Are you happy?");
    expect(englishNominalPhraseAdjectiveInterrogative("He", "hungry")).toBe("Is he hungry?");
    expect(englishNominalPhraseAdjectiveInterrogative("She", "hungry")).toBe("Is she hungry?");
    expect(englishNominalPhraseAdjectiveInterrogative("It", "hungry")).toBe("Is it hungry?");
    expect(englishNominalPhraseAdjectiveInterrogative("We", "excited")).toBe("Are we excited?");
    expect(englishNominalPhraseAdjectiveInterrogative("They", "sad")).toBe("Are they sad?");
  });
});

describe("englishNominalPhraseAdjectiveNegativeInterrogative", () => {
  it("returns the correct English nominal phrase with adjective", () => {
    expect(englishNominalPhraseAdjectiveNegativeInterrogative("I", "tired")).toBe("Aren't I tired?");
    expect(englishNominalPhraseAdjectiveNegativeInterrogative("You", "happy")).toBe("Aren't you happy?");
    expect(englishNominalPhraseAdjectiveNegativeInterrogative("He", "hungry")).toBe("Isn't he hungry?");
    expect(englishNominalPhraseAdjectiveNegativeInterrogative("She", "hungry")).toBe("Isn't she hungry?");
    expect(englishNominalPhraseAdjectiveNegativeInterrogative("It", "hungry")).toBe("Isn't it hungry?");
    expect(englishNominalPhraseAdjectiveNegativeInterrogative("We", "excited")).toBe("Aren't we excited?");
    expect(englishNominalPhraseAdjectiveNegativeInterrogative("They", "sad")).toBe("Aren't they sad?");
  });
});

describe("englishNominalPhraseAdjectiveMaster", () => {
  it("returns the correct English nominal phrase with adjective", () => {
    expect(englishNominalPhraseAdjectiveMaster("I", "tired", "standardMood")).toBe("I am tired");
    expect(englishNominalPhraseAdjectiveMaster("You", "happy", "negative")).toBe("You aren't happy");
    expect(englishNominalPhraseAdjectiveMaster("He", "hungry", "interrogative")).toBe("Is he hungry?");
    expect(englishNominalPhraseAdjectiveMaster("She", "hungry", "negativeInterrogative")).toBe("Isn't she hungry?");
  });
});

describe("englishNominalPhraseNoun", () => {
  it("returns the correct English nominal phrase with noun", () => {
    expect(englishNominalPhraseNoun("I", "teacher")).toBe("I am a teacher");
    expect(englishNominalPhraseNoun("You", "teacher")).toBe("You are a teacher");
    expect(englishNominalPhraseNoun("He", "teacher")).toBe("He is a teacher");
    expect(englishNominalPhraseNoun("She", "teacher")).toBe("She is a teacher");
    expect(englishNominalPhraseNoun("It", "teacher")).toBe("It is a teacher");
    expect(englishNominalPhraseNoun("We", "teacher")).toBe("We are teachers");
    expect(englishNominalPhraseNoun("They", "teacher")).toBe("They are teachers");
  });

  describe("turkishNominalPhraseMaster", () => {
    it("returns the correct Turkish nominal phrase", () => {
      expect(turkishNominalPhraseMaster("Ben", "Fransız", "standardMood")).toBe("Fransızım");
      expect(turkishNominalPhraseMaster("Sen", "Fransız", "negative")).toBe("Fransız değilsin");
      expect(turkishNominalPhraseMaster("O", "Fransız", "interrogative")).toBe("Fransız mı?");
      expect(turkishNominalPhraseMaster("Biz", "Fransız", "negativeInterrogative")).toBe("Fransız değil miyiz?");
      expect(turkishNominalPhraseMaster("Siz", "Fransız", "standardMood")).toBe("Fransızsınız");
    });
  });

  it("handles for words starting with vowels", () => {
    expect(englishNominalPhraseNoun("I", "actor")).toBe("I am an actor");
    expect(englishNominalPhraseNoun("You", "actor")).toBe("You are an actor");
    expect(englishNominalPhraseNoun("He", "actor")).toBe("He is an actor");
    expect(englishNominalPhraseNoun("She", "actor")).toBe("She is an actor");
    expect(englishNominalPhraseNoun("It", "actor")).toBe("It is an actor");
    expect(englishNominalPhraseNoun("We", "actor")).toBe("We are actors");
    expect(englishNominalPhraseNoun("They", "actor")).toBe("They are actors");
  });
});

describe("englishNominalPhraseNounNegative", () => {
  it("returns the correct English nominal phrase with noun", () => {
    expect(englishNominalPhraseNounNegative("I", "teacher")).toBe("I am not a teacher");
    expect(englishNominalPhraseNounNegative("You", "teacher")).toBe("You aren't a teacher");
    expect(englishNominalPhraseNounNegative("He", "teacher")).toBe("He isn't a teacher");
    expect(englishNominalPhraseNounNegative("She", "teacher")).toBe("She isn't a teacher");
    expect(englishNominalPhraseNounNegative("It", "teacher")).toBe("It isn't a teacher");
    expect(englishNominalPhraseNounNegative("We", "teacher")).toBe("We aren't teachers");
    expect(englishNominalPhraseNounNegative("They", "teacher")).toBe("They aren't teachers");
  });

  it("handles for words starting with vowels", () => {
    expect(englishNominalPhraseNounNegative("I", "actor")).toBe("I am not an actor");
    expect(englishNominalPhraseNounNegative("You", "actor")).toBe("You aren't an actor");
    expect(englishNominalPhraseNounNegative("He", "actor")).toBe("He isn't an actor");
    expect(englishNominalPhraseNounNegative("She", "actor")).toBe("She isn't an actor");
    expect(englishNominalPhraseNounNegative("It", "actor")).toBe("It isn't an actor");
    expect(englishNominalPhraseNounNegative("We", "actor")).toBe("We aren't actors");
    expect(englishNominalPhraseNounNegative("They", "actor")).toBe("They aren't actors");
  });
});

describe("englishNominalPhraseNounInterrogative", () => {
  it("returns the correct English nominal phrase with noun", () => {
    expect(englishNominalPhraseNounInterrogative("I", "teacher")).toBe("Am I a teacher?");
    expect(englishNominalPhraseNounInterrogative("You", "teacher")).toBe("Are you a teacher?");
    expect(englishNominalPhraseNounInterrogative("He", "teacher")).toBe("Is he a teacher?");
    expect(englishNominalPhraseNounInterrogative("She", "teacher")).toBe("Is she a teacher?");
    expect(englishNominalPhraseNounInterrogative("It", "teacher")).toBe("Is it a teacher?");
    expect(englishNominalPhraseNounInterrogative("We", "teacher")).toBe("Are we teachers?");
    expect(englishNominalPhraseNounInterrogative("They", "teacher")).toBe("Are they teachers?");
  });

  it("handles for words starting with vowels", () => {
    expect(englishNominalPhraseNounInterrogative("I", "actor")).toBe("Am I an actor?");
    expect(englishNominalPhraseNounInterrogative("You", "actor")).toBe("Are you an actor?");
    expect(englishNominalPhraseNounInterrogative("He", "actor")).toBe("Is he an actor?");
    expect(englishNominalPhraseNounInterrogative("She", "actor")).toBe("Is she an actor?");
    expect(englishNominalPhraseNounInterrogative("It", "actor")).toBe("Is it an actor?");
    expect(englishNominalPhraseNounInterrogative("We", "actor")).toBe("Are we actors?");
    expect(englishNominalPhraseNounInterrogative("They", "actor")).toBe("Are they actors?");
  });
});

describe("englishNominalPhraseNounNegativeInterrogative", () => {
  it("returns the correct English nominal phrase with noun", () => {
    expect(englishNominalPhraseNounNegativeInterrogative("I", "teacher")).toBe("Aren't I a teacher?");
    expect(englishNominalPhraseNounNegativeInterrogative("You", "teacher")).toBe("Aren't you a teacher?");
    expect(englishNominalPhraseNounNegativeInterrogative("He", "teacher")).toBe("Isn't he a teacher?");
    expect(englishNominalPhraseNounNegativeInterrogative("She", "teacher")).toBe("Isn't she a teacher?");
    expect(englishNominalPhraseNounNegativeInterrogative("It", "teacher")).toBe("Isn't it a teacher?");
    expect(englishNominalPhraseNounNegativeInterrogative("We", "teacher")).toBe("Aren't we teachers?");
    expect(englishNominalPhraseNounNegativeInterrogative("They", "teacher")).toBe("Aren't they teachers?");
  });

  it("handles for words starting with vowels", () => {
    expect(englishNominalPhraseNounNegativeInterrogative("I", "actor")).toBe("Aren't I an actor?");
    expect(englishNominalPhraseNounNegativeInterrogative("You", "actor")).toBe("Aren't you an actor?");
    expect(englishNominalPhraseNounNegativeInterrogative("He", "actor")).toBe("Isn't he an actor?");
    expect(englishNominalPhraseNounNegativeInterrogative("She", "actor")).toBe("Isn't she an actor?");
    expect(englishNominalPhraseNounNegativeInterrogative("It", "actor")).toBe("Isn't it an actor?");
    expect(englishNominalPhraseNounNegativeInterrogative("We", "actor")).toBe("Aren't we actors?");
    expect(englishNominalPhraseNounNegativeInterrogative("They", "actor")).toBe("Aren't they actors?");
  });
});

describe("englishNominalPhraseNounMaster", () => {
  it("returns the correct English nominal phrase with noun", () => {
    expect(englishNominalPhraseNounMaster("I", "teacher", "standardMood")).toBe("I am a teacher");
    expect(englishNominalPhraseNounMaster("You", "teacher", "negative")).toBe("You aren't a teacher");
    expect(englishNominalPhraseNounMaster("He", "teacher", "interrogative")).toBe("Is he a teacher?");
    expect(englishNominalPhraseNounMaster("She", "teacher", "negativeInterrogative")).toBe("Isn't she a teacher?");
  });
});

describe("nominalNounMaster", () => {
  it("returns the correct nominal noun", () => {
    expect(
      nominalNounMaster({ english: "teacher", turkish: "öğretmen" }, { english: "I", turkish: "Ben" }, "standardMood")
    ).toEqual({ english: "I am a teacher", turkish: "öğretmenim" });
    expect(
      nominalNounMaster({ english: "teacher", turkish: "öğretmen" }, { english: "You", turkish: "Sen" }, "negative")
    ).toEqual({ english: "You aren't a teacher", turkish: "öğretmen değilsin" });
    expect(
      nominalNounMaster({ english: "teacher", turkish: "öğretmen" }, { english: "He", turkish: "O" }, "interrogative")
    ).toEqual({ english: "Is he a teacher?", turkish: "öğretmen mi?" });
    expect(
      nominalNounMaster(
        { english: "teacher", turkish: "öğretmen" },
        { english: "He", turkish: "O" },
        "negativeInterrogative"
      )
    ).toEqual({ english: "Isn't he a teacher?", turkish: "öğretmen değil mi?" });
  });
});

describe("nominalAdjectiveMaster", () => {
  it("returns the correct nominal adjective", () => {
    expect(
      nominalAdjectiveMaster({ english: "tired", turkish: "yorgun" }, { english: "I", turkish: "Ben" }, "standardMood")
    ).toEqual({ english: "I am tired", turkish: "yorgunum" });
    expect(
      nominalAdjectiveMaster({ english: "happy", turkish: "mutlu" }, { english: "You", turkish: "Sen" }, "negative")
    ).toEqual({ english: "You aren't happy", turkish: "mutlu değilsin" });
    expect(
      nominalAdjectiveMaster({ english: "hungry", turkish: "aç" }, { english: "He", turkish: "O" }, "interrogative")
    ).toEqual({ english: "Is he hungry?", turkish: "aç mı?" });
    expect(
      nominalAdjectiveMaster(
        { english: "hungry", turkish: "aç" },
        { english: "She", turkish: "O" },
        "negativeInterrogative"
      )
    ).toEqual({ english: "Isn't she hungry?", turkish: "aç değil mi?" });
  });
});
