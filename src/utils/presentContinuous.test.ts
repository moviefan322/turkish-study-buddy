import {
  presentContinuous,
  conjugateTurkishVerb,
  conjugateTurkishVerbInterrogative,
  conjugateTurkishVerbNegative,
  conjugateTurkishVerbNegativeInterrogative,
  getVerbStem,
  presentContinuousSentence,
  presentContinuousNegativeSentence,
  presentContinuousInterrogativeSentence,
  presentContinuousNegativeInterrogativeSentence,
  conjugateTurkishMaster,
  englishSentenceMaster,
} from "./presentContinuous";

describe("presentContinuous", () => {
  test('converts verbs ending in "ie" to "ying"', () => {
    expect(presentContinuous("to tie")).toBe("tying");
  });

  test('converts verbs ending in "e" to "ing" (dropping the "e")', () => {
    expect(presentContinuous("to make")).toBe("making");
  });

  test('converts verbs ending in "y" to "ing"', () => {
    expect(presentContinuous("to cry")).toBe("crying");
  });

  test('converts verbs ending in vowel+consonant to v+c+c+"ing"', () => {
    expect(presentContinuous("to run")).toBe("running");
    expect(presentContinuous("to sit")).toBe("sitting");
    expect(presentContinuous("to stab")).toBe("stabbing");
  });

  test('converts verbs ending in "vowel + y"/vowel + w to "ing"', () => {
    expect(presentContinuous("to stay")).toBe("staying");
    expect(presentContinuous("to show")).toBe("showing");
  });

  test('converts verbs ending in "c" to "cking"', () => {
    expect(presentContinuous("to picnic")).toBe("picnicking");
  });

  test("handles two word verbs correctly", () => {
    expect(presentContinuous("to look at")).toBe("looking at");
  });

  test("handles other verbs correctly", () => {
    expect(presentContinuous("to fuck")).toBe("fucking");
  });
});

describe("presentContinuousSentence", () => {
  test("handles first person (I)", () => {
    expect(presentContinuousSentence("to run", "I")).toBe("I am running");
  });

  test("handles second person (you)", () => {
    expect(presentContinuousSentence("to eat", "you")).toBe("you are eating");
  });

  test("handles third person (he)", () => {
    expect(presentContinuousSentence("to write", "he")).toBe("he is writing");
  });

  test("handles third person (she)", () => {
    expect(presentContinuousSentence("to sing", "she")).toBe("she is singing");
  });

  test("handles third person (it)", () => {
    expect(presentContinuousSentence("to paint", "it")).toBe("it is painting");
  });

  test("handles second person (you-f)", () => {
    expect(presentContinuousSentence("to read", "you (f)")).toBe("you (f) are reading");
  });

  test("handles first person plural (we)", () => {
    expect(presentContinuousSentence("to swim", "we")).toBe("we are swimming");
  });

  test("handles third person plural (they)", () => {
    expect(presentContinuousSentence("to dance", "they")).toBe("they are dancing");
  });

  test("handles random he/she/it", () => {
    expect(presentContinuousSentence("to jump", "s/he/it")).not.toBe("");
  });
});

describe("presentContinuousNegativeSentence", () => {
  test("handles first person (I)", () => {
    expect(presentContinuousNegativeSentence("to run", "I")).toBe("I am not running");
  });

  test("handles second person (you)", () => {
    expect(presentContinuousNegativeSentence("to eat", "you")).toBe("you aren't eating");
  });

  test("handles third person (he)", () => {
    expect(presentContinuousNegativeSentence("to write", "he")).toBe("he isn't writing");
  });

  test("handles third person (she)", () => {
    expect(presentContinuousNegativeSentence("to sing", "she")).toBe("she isn't singing");
  });

  test("handles third person (it)", () => {
    expect(presentContinuousNegativeSentence("to paint", "it")).toBe("it isn't painting");
  });

  test("handles second person (you-f)", () => {
    expect(presentContinuousNegativeSentence("to read", "you (f)")).toBe("you (f) aren't reading");
  });

  test("handles first person plural (we)", () => {
    expect(presentContinuousNegativeSentence("to swim", "we")).toBe("we aren't swimming");
  });

  test("handles third person plural (they)", () => {
    expect(presentContinuousNegativeSentence("to dance", "they")).toBe("they aren't dancing");
  });

  test("handles random he/she/it", () => {
    expect(presentContinuousNegativeSentence("to jump", "s/he/it")).not.toBe("");
  });
});

describe("presentContinuousInterrogativeSentence", () => {
  test("handles first person (I)", () => {
    expect(presentContinuousInterrogativeSentence("to run", "I")).toBe("am I running?");
  });

  test("handles second person (you)", () => {
    expect(presentContinuousInterrogativeSentence("to eat", "you")).toBe("are you eating?");
  });

  test("handles third person (he)", () => {
    expect(presentContinuousInterrogativeSentence("to write", "he")).toBe("is he writing?");
  });

  test("handles third person (she)", () => {
    expect(presentContinuousInterrogativeSentence("to sing", "she")).toBe("is she singing?");
  });

  test("handles third person (it)", () => {
    expect(presentContinuousInterrogativeSentence("to paint", "it")).toBe("is it painting?");
  });

  test("handles second person (you-f)", () => {
    expect(presentContinuousInterrogativeSentence("to read", "you (f)")).toBe("are you (f) reading?");
  });

  test("handles first person plural (we)", () => {
    expect(presentContinuousInterrogativeSentence("to swim", "we")).toBe("are we swimming?");
  });

  test("handles third person plural (they)", () => {
    expect(presentContinuousInterrogativeSentence("to dance", "they")).toBe("are they dancing?");
  });

  test("handles random he/she/it", () => {
    expect(presentContinuousInterrogativeSentence("to jump", "s/he/it")).not.toBe("");
  });
});

describe("presentContinuousNegativeInterrogativeSentence", () => {
  test("handles first person (I)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to run", "I")).toBe("aren't I running?");
  });

  test("handles second person (you)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to eat", "you")).toBe("aren't you eating?");
  });

  test("handles third person (he)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to write", "he")).toBe("isn't he writing?");
  });

  test("handles third person (she)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to sing", "she")).toBe("isn't she singing?");
  });

  test("handles third person (it)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to paint", "it")).toBe("isn't it painting?");
  });

  test("handles second person (you-f)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to read", "you (f)")).toBe("aren't you (f) reading?");
  });

  test("handles first person plural (we)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to swim", "we")).toBe("aren't we swimming?");
  });

  test("handles third person plural (they)", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to dance", "they")).toBe("aren't they dancing?");
  });

  test("handles random he/she/it", () => {
    expect(presentContinuousNegativeInterrogativeSentence("to jump", "s/he/it")).not.toBe("");
  });
});

describe("englishSentenceMaster", () => {
  it("should handle standard mood correctly", () => {
    const result = englishSentenceMaster("to run", "I", "standardMood");
    expect(result).toBe("I am running");
  });

  it("should handle interrogative mood correctly", () => {
    const result = englishSentenceMaster("to run", "I", "interrogative");
    expect(result).toBe("am I running?");
  });

  it("should handle negative mood correctly", () => {
    const result = englishSentenceMaster("to run", "I", "negative");
    expect(result).toBe("I am not running");
  });

  it("should handle negative interrogative mood correctly", () => {
    const result = englishSentenceMaster("to run", "I", "negativeInterrogative");
    expect(result).toBe("aren't I running?");
  });
});

describe("conjugateTurkishVerb", () => {
  test("Gets correct verb stem", () => {
    expect(getVerbStem("yapmak")).toBe("yap");
    expect(getVerbStem("çalışmak")).toBe("çalış");
    expect(getVerbStem("vermek")).toBe("ver");
    expect(getVerbStem("bilmek")).toBe("bil");
    expect(getVerbStem("düşünmek")).toBe("düşün");
    expect(getVerbStem("görmek")).toBe("gör");
    expect(getVerbStem("istemek")).toBe("iste");
    expect(getVerbStem("demek")).toBe("de");
  });
});

describe("conjugateTurkishVerb", () => {
  test("conjugates properly for ben", () => {
    expect(conjugateTurkishVerb("yapmak", "Ben")).toBe("yapıyorum");
    expect(conjugateTurkishVerb("çalışmak", "Ben")).toBe("çalışıyorum");
    expect(conjugateTurkishVerb("vermek", "Ben")).toBe("veriyorum");
    expect(conjugateTurkishVerb("bilmek", "Ben")).toBe("biliyorum");
    expect(conjugateTurkishVerb("düşünmek", "Ben")).toBe("düşünüyorum");
    expect(conjugateTurkishVerb("görmek", "Ben")).toBe("görüyorum");
    expect(conjugateTurkishVerb("istemek", "Ben")).toBe("istiyorum");
    expect(conjugateTurkishVerb("ödemek", "Ben")).toBe("ödüyorum");
    expect(conjugateTurkishVerb("yemek", "Ben")).toBe("yiyorum");
    expect(conjugateTurkishVerb("demek", "Ben")).toBe("diyorum");
    expect(conjugateTurkishVerb("gitmek", "Ben")).toBe("gidiyorum");
    expect(conjugateTurkishVerb("etmek", "Ben")).toBe("ediyorum");
    expect(conjugateTurkishVerb("tatmek", "Ben")).toBe("tadıyorum");
    expect(conjugateTurkishVerb("seyretmek", "Ben")).toBe("seyrediyorum");
  });

  test("conjugates properly for sen", () => {
    expect(conjugateTurkishVerb("yapmak", "Sen")).toBe("yapıyorsun");
    expect(conjugateTurkishVerb("çalışmak", "Sen")).toBe("çalışıyorsun");
    expect(conjugateTurkishVerb("vermek", "Sen")).toBe("veriyorsun");
    expect(conjugateTurkishVerb("bilmek", "Sen")).toBe("biliyorsun");
    expect(conjugateTurkishVerb("düşünmek", "Sen")).toBe("düşünüyorsun");
    expect(conjugateTurkishVerb("görmek", "Sen")).toBe("görüyorsun");
    expect(conjugateTurkishVerb("istemek", "Sen")).toBe("istiyorsun");
    expect(conjugateTurkishVerb("ödemek", "Sen")).toBe("ödüyorsun");
    expect(conjugateTurkishVerb("yemek", "Sen")).toBe("yiyorsun");
    expect(conjugateTurkishVerb("demek", "Sen")).toBe("diyorsun");
    expect(conjugateTurkishVerb("gitmek", "Sen")).toBe("gidiyorsun");
    expect(conjugateTurkishVerb("etmek", "Sen")).toBe("ediyorsun");
    expect(conjugateTurkishVerb("tatmek", "Sen")).toBe("tadıyorsun");
    expect(conjugateTurkishVerb("seyretmek", "Sen")).toBe("seyrediyorsun");
  });

  test("conjugates properly for O", () => {
    expect(conjugateTurkishVerb("yapmak", "O")).toBe("yapıyor");
    expect(conjugateTurkishVerb("çalışmak", "O")).toBe("çalışıyor");
    expect(conjugateTurkishVerb("vermek", "O")).toBe("veriyor");
    expect(conjugateTurkishVerb("bilmek", "O")).toBe("biliyor");
    expect(conjugateTurkishVerb("düşünmek", "O")).toBe("düşünüyor");
    expect(conjugateTurkishVerb("görmek", "O")).toBe("görüyor");
    expect(conjugateTurkishVerb("istemek", "O")).toBe("istiyor");
    expect(conjugateTurkishVerb("ödemek", "O")).toBe("ödüyor");
    expect(conjugateTurkishVerb("yemek", "O")).toBe("yiyor");
    expect(conjugateTurkishVerb("demek", "O")).toBe("diyor");
    expect(conjugateTurkishVerb("gitmek", "O")).toBe("gidiyor");
    expect(conjugateTurkishVerb("etmek", "O")).toBe("ediyor");
    expect(conjugateTurkishVerb("tatmek", "O")).toBe("tadıyor");
    expect(conjugateTurkishVerb("seyretmek", "O")).toBe("seyrediyor");
  });

  test("conjugates properly for Biz", () => {
    expect(conjugateTurkishVerb("yapmak", "Biz")).toBe("yapıyoruz");
    expect(conjugateTurkishVerb("çalışmak", "Biz")).toBe("çalışıyoruz");
    expect(conjugateTurkishVerb("vermek", "Biz")).toBe("veriyoruz");
    expect(conjugateTurkishVerb("bilmek", "Biz")).toBe("biliyoruz");
    expect(conjugateTurkishVerb("düşünmek", "Biz")).toBe("düşünüyoruz");
    expect(conjugateTurkishVerb("görmek", "Biz")).toBe("görüyoruz");
    expect(conjugateTurkishVerb("istemek", "Biz")).toBe("istiyoruz");
    expect(conjugateTurkishVerb("ödemek", "Biz")).toBe("ödüyoruz");
    expect(conjugateTurkishVerb("yemek", "Biz")).toBe("yiyoruz");
    expect(conjugateTurkishVerb("demek", "Biz")).toBe("diyoruz");
    expect(conjugateTurkishVerb("gitmek", "Biz")).toBe("gidiyoruz");
    expect(conjugateTurkishVerb("etmek", "Biz")).toBe("ediyoruz");
    expect(conjugateTurkishVerb("tatmek", "Biz")).toBe("tadıyoruz");
    expect(conjugateTurkishVerb("seyretmek", "Biz")).toBe("seyrediyoruz");
  });

  test("conjugates properly for Siz", () => {
    expect(conjugateTurkishVerb("yapmak", "Siz")).toBe("yapıyorsunuz");
    expect(conjugateTurkishVerb("çalışmak", "Siz")).toBe("çalışıyorsunuz");
    expect(conjugateTurkishVerb("vermek", "Siz")).toBe("veriyorsunuz");
    expect(conjugateTurkishVerb("bilmek", "Siz")).toBe("biliyorsunuz");
    expect(conjugateTurkishVerb("düşünmek", "Siz")).toBe("düşünüyorsunuz");
    expect(conjugateTurkishVerb("görmek", "Siz")).toBe("görüyorsunuz");
    expect(conjugateTurkishVerb("istemek", "Siz")).toBe("istiyorsunuz");
    expect(conjugateTurkishVerb("ödemek", "Siz")).toBe("ödüyorsunuz");
    expect(conjugateTurkishVerb("yemek", "Siz")).toBe("yiyorsunuz");
    expect(conjugateTurkishVerb("demek", "Siz")).toBe("diyorsunuz");
    expect(conjugateTurkishVerb("gitmek", "Siz")).toBe("gidiyorsunuz");
    expect(conjugateTurkishVerb("etmek", "Siz")).toBe("ediyorsunuz");
    expect(conjugateTurkishVerb("tatmek", "Siz")).toBe("tadıyorsunuz");
    expect(conjugateTurkishVerb("seyretmek", "Siz")).toBe("seyrediyorsunuz");
  });

  test("conjugates properly for Onlar", () => {
    expect(conjugateTurkishVerb("yapmak", "Onlar")).toBe("yapıyorlar");
    expect(conjugateTurkishVerb("çalışmak", "Onlar")).toBe("çalışıyorlar");
    expect(conjugateTurkishVerb("vermek", "Onlar")).toBe("veriyorlar");
    expect(conjugateTurkishVerb("bilmek", "Onlar")).toBe("biliyorlar");
    expect(conjugateTurkishVerb("düşünmek", "Onlar")).toBe("düşünüyorlar");
    expect(conjugateTurkishVerb("görmek", "Onlar")).toBe("görüyorlar");
    expect(conjugateTurkishVerb("istemek", "Onlar")).toBe("istiyorlar");
    expect(conjugateTurkishVerb("ödemek", "Onlar")).toBe("ödüyorlar");
    expect(conjugateTurkishVerb("yemek", "Onlar")).toBe("yiyorlar");
    expect(conjugateTurkishVerb("demek", "Onlar")).toBe("diyorlar");
    expect(conjugateTurkishVerb("gitmek", "Onlar")).toBe("gidiyorlar");
    expect(conjugateTurkishVerb("etmek", "Onlar")).toBe("ediyorlar");
    expect(conjugateTurkishVerb("tatmek", "Onlar")).toBe("tadıyorlar");
    expect(conjugateTurkishVerb("seyretmek", "Onlar")).toBe("seyrediyorlar");
  });
});

describe("conjugateTurkishVerbInterrogative", () => {
  test("conjugates properly for ben", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Ben")).toBe("yapıyor muyum?");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Ben")).toBe("çalışıyor muyum?");
    expect(conjugateTurkishVerbInterrogative("vermek", "Ben")).toBe("veriyor muyum?");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Ben")).toBe("biliyor muyum?");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Ben")).toBe("düşünüyor muyum?");
    expect(conjugateTurkishVerbInterrogative("görmek", "Ben")).toBe("görüyor muyum?");
    expect(conjugateTurkishVerbInterrogative("istemek", "Ben")).toBe("istiyor muyum?");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Ben")).toBe("ödüyor muyum?");
    expect(conjugateTurkishVerbInterrogative("yemek", "Ben")).toBe("yiyor muyum?");
    expect(conjugateTurkishVerbInterrogative("demek", "Ben")).toBe("diyor muyum?");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Ben")).toBe("gidiyor muyum?");
    expect(conjugateTurkishVerbInterrogative("etmek", "Ben")).toBe("ediyor muyum?");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Ben")).toBe("tadıyor muyum?");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Ben")).toBe("seyrediyor muyum?");
  });

  test("conjugates properly for sen", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Sen")).toBe("yapıyor musun?");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Sen")).toBe("çalışıyor musun?");
    expect(conjugateTurkishVerbInterrogative("vermek", "Sen")).toBe("veriyor musun?");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Sen")).toBe("biliyor musun?");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Sen")).toBe("düşünüyor musun?");
    expect(conjugateTurkishVerbInterrogative("görmek", "Sen")).toBe("görüyor musun?");
    expect(conjugateTurkishVerbInterrogative("istemek", "Sen")).toBe("istiyor musun?");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Sen")).toBe("ödüyor musun?");
    expect(conjugateTurkishVerbInterrogative("yemek", "Sen")).toBe("yiyor musun?");
    expect(conjugateTurkishVerbInterrogative("demek", "Sen")).toBe("diyor musun?");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Sen")).toBe("gidiyor musun?");
    expect(conjugateTurkishVerbInterrogative("etmek", "Sen")).toBe("ediyor musun?");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Sen")).toBe("tadıyor musun?");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Sen")).toBe("seyrediyor musun?");
  });

  test("conjugates properly for O", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "O")).toBe("yapıyor mu?");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "O")).toBe("çalışıyor mu?");
    expect(conjugateTurkishVerbInterrogative("vermek", "O")).toBe("veriyor mu?");
    expect(conjugateTurkishVerbInterrogative("bilmek", "O")).toBe("biliyor mu?");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "O")).toBe("düşünüyor mu?");
    expect(conjugateTurkishVerbInterrogative("görmek", "O")).toBe("görüyor mu?");
    expect(conjugateTurkishVerbInterrogative("istemek", "O")).toBe("istiyor mu?");
    expect(conjugateTurkishVerbInterrogative("ödemek", "O")).toBe("ödüyor mu?");
    expect(conjugateTurkishVerbInterrogative("yemek", "O")).toBe("yiyor mu?");
    expect(conjugateTurkishVerbInterrogative("demek", "O")).toBe("diyor mu?");
    expect(conjugateTurkishVerbInterrogative("gitmek", "O")).toBe("gidiyor mu?");
    expect(conjugateTurkishVerbInterrogative("etmek", "O")).toBe("ediyor mu?");
    expect(conjugateTurkishVerbInterrogative("tatmek", "O")).toBe("tadıyor mu?");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "O")).toBe("seyrediyor mu?");
  });

  test("conjugates properly for Biz", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Biz")).toBe("yapıyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Biz")).toBe("çalışıyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("vermek", "Biz")).toBe("veriyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Biz")).toBe("biliyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Biz")).toBe("düşünüyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("görmek", "Biz")).toBe("görüyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("istemek", "Biz")).toBe("istiyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Biz")).toBe("ödüyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("yemek", "Biz")).toBe("yiyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("demek", "Biz")).toBe("diyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Biz")).toBe("gidiyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("etmek", "Biz")).toBe("ediyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Biz")).toBe("tadıyor muyuz?");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Biz")).toBe("seyrediyor muyuz?");
  });

  test("conjugates properly for Siz", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Siz")).toBe("yapıyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Siz")).toBe("çalışıyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("vermek", "Siz")).toBe("veriyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Siz")).toBe("biliyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Siz")).toBe("düşünüyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("görmek", "Siz")).toBe("görüyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("istemek", "Siz")).toBe("istiyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Siz")).toBe("ödüyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("yemek", "Siz")).toBe("yiyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("demek", "Siz")).toBe("diyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Siz")).toBe("gidiyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("etmek", "Siz")).toBe("ediyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Siz")).toBe("tadıyor musunuz?");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Siz")).toBe("seyrediyor musunuz?");
  });

  test("conjugates properly for Onlar", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Onlar")).toBe("yapıyor mu?");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Onlar")).toBe("çalışıyor mu?");
    expect(conjugateTurkishVerbInterrogative("vermek", "Onlar")).toBe("veriyor mu?");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Onlar")).toBe("biliyor mu?");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Onlar")).toBe("düşünüyor mu?");
    expect(conjugateTurkishVerbInterrogative("görmek", "Onlar")).toBe("görüyor mu?");
    expect(conjugateTurkishVerbInterrogative("istemek", "Onlar")).toBe("istiyor mu?");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Onlar")).toBe("ödüyor mu?");
    expect(conjugateTurkishVerbInterrogative("yemek", "Onlar")).toBe("yiyor mu?");
    expect(conjugateTurkishVerbInterrogative("demek", "Onlar")).toBe("diyor mu?");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Onlar")).toBe("gidiyor mu?");
    expect(conjugateTurkishVerbInterrogative("etmek", "Onlar")).toBe("ediyor mu?");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Onlar")).toBe("tadıyor mu?");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Onlar")).toBe("seyrediyor mu?");
  });
});

describe("conjugateTurkishVerbNegative", () => {
  test("conjugates properly for ben", () => {
    expect(conjugateTurkishVerbNegative("yapmak", "Ben")).toBe("yapmıyorum");
    expect(conjugateTurkishVerbNegative("çalışmak", "Ben")).toBe("çalışmıyorum");
    expect(conjugateTurkishVerbNegative("vermek", "Ben")).toBe("vermiyorum");
    expect(conjugateTurkishVerbNegative("bilmek", "Ben")).toBe("bilmiyorum");
    expect(conjugateTurkishVerbNegative("düşünmek", "Ben")).toBe("düşünmüyorum");
    expect(conjugateTurkishVerbNegative("görmek", "Ben")).toBe("görmüyorum");
    expect(conjugateTurkishVerbNegative("istemek", "Ben")).toBe("istemiyorum");
    expect(conjugateTurkishVerbNegative("ödemek", "Ben")).toBe("ödemiyorum");
    expect(conjugateTurkishVerbNegative("yemek", "Ben")).toBe("yemiyorum");
    expect(conjugateTurkishVerbNegative("demek", "Ben")).toBe("demiyorum");
    expect(conjugateTurkishVerbNegative("gitmek", "Ben")).toBe("gidmiyorum");
    expect(conjugateTurkishVerbNegative("etmek", "Ben")).toBe("edmiyorum");
    expect(conjugateTurkishVerbNegative("tatmek", "Ben")).toBe("tadmıyorum");
    expect(conjugateTurkishVerbNegative("seyretmek", "Ben")).toBe("seyredmiyorum");
  });

  test("conjugates properly for sen", () => {
    expect(conjugateTurkishVerbNegative("yapmak", "Sen")).toBe("yapmıyorsun");
    expect(conjugateTurkishVerbNegative("çalışmak", "Sen")).toBe("çalışmıyorsun");
    expect(conjugateTurkishVerbNegative("vermek", "Sen")).toBe("vermiyorsun");
    expect(conjugateTurkishVerbNegative("bilmek", "Sen")).toBe("bilmiyorsun");
    expect(conjugateTurkishVerbNegative("düşünmek", "Sen")).toBe("düşünmüyorsun");
    expect(conjugateTurkishVerbNegative("görmek", "Sen")).toBe("görmüyorsun");
    expect(conjugateTurkishVerbNegative("istemek", "Sen")).toBe("istemiyorsun");
    expect(conjugateTurkishVerbNegative("ödemek", "Sen")).toBe("ödemiyorsun");
    expect(conjugateTurkishVerbNegative("yemek", "Sen")).toBe("yemiyorsun");
    expect(conjugateTurkishVerbNegative("demek", "Sen")).toBe("demiyorsun");
    expect(conjugateTurkishVerbNegative("gitmek", "Sen")).toBe("gidmiyorsun");
    expect(conjugateTurkishVerbNegative("etmek", "Sen")).toBe("edmiyorsun");
    expect(conjugateTurkishVerbNegative("tatmek", "Sen")).toBe("tadmıyorsun");
    expect(conjugateTurkishVerbNegative("seyretmek", "Sen")).toBe("seyredmiyorsun");
  });

  test("conjugates properly for O", () => {
    expect(conjugateTurkishVerbNegative("yapmak", "O")).toBe("yapmıyor");
    expect(conjugateTurkishVerbNegative("çalışmak", "O")).toBe("çalışmıyor");
    expect(conjugateTurkishVerbNegative("vermek", "O")).toBe("vermiyor");
    expect(conjugateTurkishVerbNegative("bilmek", "O")).toBe("bilmiyor");
    expect(conjugateTurkishVerbNegative("düşünmek", "O")).toBe("düşünmüyor");
    expect(conjugateTurkishVerbNegative("görmek", "O")).toBe("görmüyor");
    expect(conjugateTurkishVerbNegative("istemek", "O")).toBe("istemiyor");
    expect(conjugateTurkishVerbNegative("ödemek", "O")).toBe("ödemiyor");
    expect(conjugateTurkishVerbNegative("yemek", "O")).toBe("yemiyor");
    expect(conjugateTurkishVerbNegative("demek", "O")).toBe("demiyor");
    expect(conjugateTurkishVerbNegative("gitmek", "O")).toBe("gidmiyor");
    expect(conjugateTurkishVerbNegative("etmek", "O")).toBe("edmiyor");
    expect(conjugateTurkishVerbNegative("tatmek", "O")).toBe("tadmıyor");
    expect(conjugateTurkishVerbNegative("seyretmek", "O")).toBe("seyredmiyor");
  });

  test("conjugates properly for Biz", () => {
    expect(conjugateTurkishVerbNegative("yapmak", "Biz")).toBe("yapmıyoruz");
    expect(conjugateTurkishVerbNegative("çalışmak", "Biz")).toBe("çalışmıyoruz");
    expect(conjugateTurkishVerbNegative("vermek", "Biz")).toBe("vermiyoruz");
    expect(conjugateTurkishVerbNegative("bilmek", "Biz")).toBe("bilmiyoruz");
    expect(conjugateTurkishVerbNegative("düşünmek", "Biz")).toBe("düşünmüyoruz");
    expect(conjugateTurkishVerbNegative("görmek", "Biz")).toBe("görmüyoruz");
    expect(conjugateTurkishVerbNegative("istemek", "Biz")).toBe("istemiyoruz");
    expect(conjugateTurkishVerbNegative("ödemek", "Biz")).toBe("ödemiyoruz");
    expect(conjugateTurkishVerbNegative("yemek", "Biz")).toBe("yemiyoruz");
    expect(conjugateTurkishVerbNegative("demek", "Biz")).toBe("demiyoruz");
    expect(conjugateTurkishVerbNegative("gitmek", "Biz")).toBe("gidmiyoruz");
    expect(conjugateTurkishVerbNegative("etmek", "Biz")).toBe("edmiyoruz");
    expect(conjugateTurkishVerbNegative("tatmek", "Biz")).toBe("tadmıyoruz");
    expect(conjugateTurkishVerbNegative("seyretmek", "Biz")).toBe("seyredmiyoruz");
  });

  test("conjugates properly for Siz", () => {
    expect(conjugateTurkishVerbNegative("yapmak", "Siz")).toBe("yapmıyorsunuz");
    expect(conjugateTurkishVerbNegative("çalışmak", "Siz")).toBe("çalışmıyorsunuz");
    expect(conjugateTurkishVerbNegative("vermek", "Siz")).toBe("vermiyorsunuz");
    expect(conjugateTurkishVerbNegative("bilmek", "Siz")).toBe("bilmiyorsunuz");
    expect(conjugateTurkishVerbNegative("düşünmek", "Siz")).toBe("düşünmüyorsunuz");
    expect(conjugateTurkishVerbNegative("görmek", "Siz")).toBe("görmüyorsunuz");
    expect(conjugateTurkishVerbNegative("istemek", "Siz")).toBe("istemiyorsunuz");
    expect(conjugateTurkishVerbNegative("ödemek", "Siz")).toBe("ödemiyorsunuz");
    expect(conjugateTurkishVerbNegative("yemek", "Siz")).toBe("yemiyorsunuz");
    expect(conjugateTurkishVerbNegative("demek", "Siz")).toBe("demiyorsunuz");
    expect(conjugateTurkishVerbNegative("gitmek", "Siz")).toBe("gidmiyorsunuz");
    expect(conjugateTurkishVerbNegative("etmek", "Siz")).toBe("edmiyorsunuz");
    expect(conjugateTurkishVerbNegative("tatmek", "Siz")).toBe("tadmıyorsunuz");
    expect(conjugateTurkishVerbNegative("seyretmek", "Siz")).toBe("seyredmiyorsunuz");
  });

  test("conjugates properly for Onlar", () => {
    expect(conjugateTurkishVerbNegative("yapmak", "Onlar")).toBe("yapmıyorlar");
    expect(conjugateTurkishVerbNegative("çalışmak", "Onlar")).toBe("çalışmıyorlar");
    expect(conjugateTurkishVerbNegative("vermek", "Onlar")).toBe("vermiyorlar");
    expect(conjugateTurkishVerbNegative("bilmek", "Onlar")).toBe("bilmiyorlar");
    expect(conjugateTurkishVerbNegative("düşünmek", "Onlar")).toBe("düşünmüyorlar");
    expect(conjugateTurkishVerbNegative("görmek", "Onlar")).toBe("görmüyorlar");
    expect(conjugateTurkishVerbNegative("istemek", "Onlar")).toBe("istemiyorlar");
    expect(conjugateTurkishVerbNegative("ödemek", "Onlar")).toBe("ödemiyorlar");
    expect(conjugateTurkishVerbNegative("yemek", "Onlar")).toBe("yemiyorlar");
    expect(conjugateTurkishVerbNegative("demek", "Onlar")).toBe("demiyorlar");
    expect(conjugateTurkishVerbNegative("gitmek", "Onlar")).toBe("gidmiyorlar");
    expect(conjugateTurkishVerbNegative("etmek", "Onlar")).toBe("edmiyorlar");
    expect(conjugateTurkishVerbNegative("tatmek", "Onlar")).toBe("tadmıyorlar");
    expect(conjugateTurkishVerbNegative("seyretmek", "Onlar")).toBe("seyredmiyorlar");
  });
});

describe("conjugateTurkishVerbNegativeInterrogative", () => {
  test("conjugates properly for ben", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Ben")).toBe("yapmıyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Ben")).toBe("çalışmıyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Ben")).toBe("vermiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Ben")).toBe("bilmiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Ben")).toBe("düşünmüyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Ben")).toBe("görmüyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Ben")).toBe("istemiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Ben")).toBe("ödemiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Ben")).toBe("yemiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Ben")).toBe("demiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Ben")).toBe("gidmiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Ben")).toBe("edmiyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Ben")).toBe("tadmıyor muyum?");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Ben")).toBe("seyredmiyor muyum?");
  });

  test("conjugates properly for sen", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Sen")).toBe("yapmıyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Sen")).toBe("çalışmıyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Sen")).toBe("vermiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Sen")).toBe("bilmiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Sen")).toBe("düşünmüyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Sen")).toBe("görmüyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Sen")).toBe("istemiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Sen")).toBe("ödemiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Sen")).toBe("yemiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Sen")).toBe("demiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Sen")).toBe("gidmiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Sen")).toBe("edmiyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Sen")).toBe("tadmıyor musun?");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Sen")).toBe("seyredmiyor musun?");
  });

  test("conjugates properly for O", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "O")).toBe("yapmıyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "O")).toBe("çalışmıyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "O")).toBe("vermiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "O")).toBe("bilmiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "O")).toBe("düşünmüyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "O")).toBe("görmüyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "O")).toBe("istemiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "O")).toBe("ödemiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "O")).toBe("yemiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "O")).toBe("demiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "O")).toBe("gidmiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "O")).toBe("edmiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "O")).toBe("tadmıyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "O")).toBe("seyredmiyor mu?");
  });

  test("conjugates properly for Biz", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Biz")).toBe("yapmıyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Biz")).toBe("çalışmıyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Biz")).toBe("vermiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Biz")).toBe("bilmiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Biz")).toBe("düşünmüyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Biz")).toBe("görmüyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Biz")).toBe("istemiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Biz")).toBe("ödemiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Biz")).toBe("yemiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Biz")).toBe("demiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Biz")).toBe("gidmiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Biz")).toBe("edmiyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Biz")).toBe("tadmıyor muyuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Biz")).toBe("seyredmiyor muyuz?");
  });

  test("conjugates properly for Siz", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Siz")).toBe("yapmıyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Siz")).toBe("çalışmıyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Siz")).toBe("vermiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Siz")).toBe("bilmiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Siz")).toBe("düşünmüyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Siz")).toBe("görmüyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Siz")).toBe("istemiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Siz")).toBe("ödemiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Siz")).toBe("yemiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Siz")).toBe("demiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Siz")).toBe("gidmiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Siz")).toBe("edmiyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Siz")).toBe("tadmıyor musunuz?");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Siz")).toBe("seyredmiyor musunuz?");
  });

  test("conjugates properly for Onlar", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Onlar")).toBe("yapmıyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Onlar")).toBe("çalışmıyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Onlar")).toBe("vermiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Onlar")).toBe("bilmiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Onlar")).toBe("düşünmüyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Onlar")).toBe("görmüyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Onlar")).toBe("istemiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Onlar")).toBe("ödemiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Onlar")).toBe("yemiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Onlar")).toBe("demiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Onlar")).toBe("gidmiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Onlar")).toBe("edmiyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Onlar")).toBe("tadmıyor mu?");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Onlar")).toBe("seyredmiyor mu?");
  });
});

describe("conjugateTurkishMaster", () => {
  test("conjugates properly for ben", () => {
    expect(conjugateTurkishMaster("yapmak", "Ben")).toBe("yapıyorum");
    expect(conjugateTurkishMaster("çalışmak", "Ben")).toBe("çalışıyorum");
    expect(conjugateTurkishMaster("vermek", "Ben")).toBe("veriyorum");
    expect(conjugateTurkishMaster("bilmek", "Ben")).toBe("biliyorum");
    expect(conjugateTurkishMaster("düşünmek", "Ben")).toBe("düşünüyorum");
    expect(conjugateTurkishMaster("görmek", "Ben")).toBe("görüyorum");
    expect(conjugateTurkishMaster("istemek", "Ben")).toBe("istiyorum");
    expect(conjugateTurkishMaster("ödemek", "Ben")).toBe("ödüyorum");
    expect(conjugateTurkishMaster("yemek", "Ben")).toBe("yiyorum");
    expect(conjugateTurkishMaster("demek", "Ben")).toBe("diyorum");
    expect(conjugateTurkishMaster("gitmek", "Ben")).toBe("gidiyorum");
    expect(conjugateTurkishMaster("etmek", "Ben")).toBe("ediyorum");
    expect(conjugateTurkishMaster("tatmek", "Ben")).toBe("tadıyorum");
    expect(conjugateTurkishMaster("seyretmek", "Ben")).toBe("seyrediyorum");
    expect(conjugateTurkishMaster("yapmak", "Ben", "interrogative")).toBe("yapıyor muyum?");
    expect(conjugateTurkishMaster("çalışmak", "Ben", "interrogative")).toBe("çalışıyor muyum?");
    expect(conjugateTurkishMaster("vermek", "Ben", "interrogative")).toBe("veriyor muyum?");
    expect(conjugateTurkishMaster("bilmek", "Ben", "interrogative")).toBe("biliyor muyum?");
    expect(conjugateTurkishMaster("düşünmek", "Ben", "interrogative")).toBe("düşünüyor muyum?");
    expect(conjugateTurkishMaster("görmek", "Ben", "interrogative")).toBe("görüyor muyum?");
    expect(conjugateTurkishMaster("istemek", "Ben", "interrogative")).toBe("istiyor muyum?");
    expect(conjugateTurkishMaster("ödemek", "Ben", "interrogative")).toBe("ödüyor muyum?");
    expect(conjugateTurkishMaster("yemek", "Ben", "interrogative")).toBe("yiyor muyum?");
    expect(conjugateTurkishMaster("demek", "Ben", "interrogative")).toBe("diyor muyum?");
    expect(conjugateTurkishMaster("gitmek", "Ben", "interrogative")).toBe("gidiyor muyum?");
    expect(conjugateTurkishMaster("etmek", "Ben", "interrogative")).toBe("ediyor muyum?");
    expect(conjugateTurkishMaster("tatmek", "Ben", "interrogative")).toBe("tadıyor muyum?");
    expect(conjugateTurkishMaster("seyretmek", "Ben", "interrogative")).toBe("seyrediyor muyum?");
    expect(conjugateTurkishMaster("yapmak", "Ben", "negative")).toBe("yapmıyorum");
    expect(conjugateTurkishMaster("çalışmak", "Ben", "negative")).toBe("çalışmıyorum");
    expect(conjugateTurkishMaster("vermek", "Ben", "negative")).toBe("vermiyorum");
    expect(conjugateTurkishMaster("bilmek", "Ben", "negative")).toBe("bilmiyorum");
    expect(conjugateTurkishMaster("düşünmek", "Ben", "negative")).toBe("düşünmüyorum");
    expect(conjugateTurkishMaster("görmek", "Ben", "negative")).toBe("görmüyorum");
    expect(conjugateTurkishMaster("istemek", "Ben", "negative")).toBe("istemiyorum");
    expect(conjugateTurkishMaster("ödemek", "Ben", "negative")).toBe("ödemiyorum");
    expect(conjugateTurkishMaster("yemek", "Ben", "negative")).toBe("yemiyorum");
    expect(conjugateTurkishMaster("demek", "Ben", "negative")).toBe("demiyorum");
    expect(conjugateTurkishMaster("gitmek", "Ben", "negative")).toBe("gidmiyorum");
    expect(conjugateTurkishMaster("etmek", "Ben", "negative")).toBe("edmiyorum");
    expect(conjugateTurkishMaster("tatmek", "Ben", "negative")).toBe("tadmıyorum");
    expect(conjugateTurkishMaster("seyretmek", "Ben", "negative")).toBe("seyredmiyorum");
    expect(conjugateTurkishMaster("yapmak", "Ben", "negativeInterrogative")).toBe("yapmıyor muyum?");
    expect(conjugateTurkishMaster("çalışmak", "Ben", "negativeInterrogative")).toBe("çalışmıyor muyum?");
    expect(conjugateTurkishMaster("vermek", "Ben", "negativeInterrogative")).toBe("vermiyor muyum?");
    expect(conjugateTurkishMaster("bilmek", "Ben", "negativeInterrogative")).toBe("bilmiyor muyum?");
    expect(conjugateTurkishMaster("düşünmek", "Ben", "negativeInterrogative")).toBe("düşünmüyor muyum?");
    expect(conjugateTurkishMaster("görmek", "Ben", "negativeInterrogative")).toBe("görmüyor muyum?");
    expect(conjugateTurkishMaster("istemek", "Ben", "negativeInterrogative")).toBe("istemiyor muyum?");
    expect(conjugateTurkishMaster("ödemek", "Ben", "negativeInterrogative")).toBe("ödemiyor muyum?");
    expect(conjugateTurkishMaster("yemek", "Ben", "negativeInterrogative")).toBe("yemiyor muyum?");
    expect(conjugateTurkishMaster("demek", "Ben", "negativeInterrogative")).toBe("demiyor muyum?");
    expect(conjugateTurkishMaster("gitmek", "Ben", "negativeInterrogative")).toBe("gidmiyor muyum?");
    expect(conjugateTurkishMaster("etmek", "Ben", "negativeInterrogative")).toBe("edmiyor muyum?");
    expect(conjugateTurkishMaster("tatmek", "Ben", "negativeInterrogative")).toBe("tadmıyor muyum?");
    expect(conjugateTurkishMaster("seyretmek", "Ben", "negativeInterrogative")).toBe("seyredmiyor muyum?");
  });

  test("conjugates properly for sen", () => {
    expect(conjugateTurkishMaster("yapmak", "Sen")).toBe("yapıyorsun");
    expect(conjugateTurkishMaster("çalışmak", "Sen")).toBe("çalışıyorsun");
    expect(conjugateTurkishMaster("vermek", "Sen")).toBe("veriyorsun");
    expect(conjugateTurkishMaster("bilmek", "Sen")).toBe("biliyorsun");
    expect(conjugateTurkishMaster("düşünmek", "Sen")).toBe("düşünüyorsun");
    expect(conjugateTurkishMaster("görmek", "Sen")).toBe("görüyorsun");
    expect(conjugateTurkishMaster("istemek", "Sen")).toBe("istiyorsun");
    expect(conjugateTurkishMaster("ödemek", "Sen")).toBe("ödüyorsun");
    expect(conjugateTurkishMaster("yemek", "Sen")).toBe("yiyorsun");
    expect(conjugateTurkishMaster("demek", "Sen")).toBe("diyorsun");
    expect(conjugateTurkishMaster("gitmek", "Sen")).toBe("gidiyorsun");
    expect(conjugateTurkishMaster("etmek", "Sen")).toBe("ediyorsun");
    expect(conjugateTurkishMaster("tatmek", "Sen")).toBe("tadıyorsun");
    expect(conjugateTurkishMaster("seyretmek", "Sen")).toBe("seyrediyorsun");
    expect(conjugateTurkishMaster("yapmak", "Sen", "interrogative")).toBe("yapıyor musun?");
    expect(conjugateTurkishMaster("çalışmak", "Sen", "interrogative")).toBe("çalışıyor musun?");
    expect(conjugateTurkishMaster("vermek", "Sen", "interrogative")).toBe("veriyor musun?");
    expect(conjugateTurkishMaster("bilmek", "Sen", "interrogative")).toBe("biliyor musun?");
    expect(conjugateTurkishMaster("düşünmek", "Sen", "interrogative")).toBe("düşünüyor musun?");
    expect(conjugateTurkishMaster("görmek", "Sen", "interrogative")).toBe("görüyor musun?");
    expect(conjugateTurkishMaster("istemek", "Sen", "interrogative")).toBe("istiyor musun?");
    expect(conjugateTurkishMaster("ödemek", "Sen", "interrogative")).toBe("ödüyor musun?");
    expect(conjugateTurkishMaster("yemek", "Sen", "interrogative")).toBe("yiyor musun?");
    expect(conjugateTurkishMaster("demek", "Sen", "interrogative")).toBe("diyor musun?");
    expect(conjugateTurkishMaster("gitmek", "Sen", "interrogative")).toBe("gidiyor musun?");
    expect(conjugateTurkishMaster("etmek", "Sen", "interrogative")).toBe("ediyor musun?");
    expect(conjugateTurkishMaster("tatmek", "Sen", "interrogative")).toBe("tadıyor musun?");
    expect(conjugateTurkishMaster("seyretmek", "Sen", "interrogative")).toBe("seyrediyor musun?");
    expect(conjugateTurkishMaster("yapmak", "Sen", "negative")).toBe("yapmıyorsun");
    expect(conjugateTurkishMaster("çalışmak", "Sen", "negative")).toBe("çalışmıyorsun");
    expect(conjugateTurkishMaster("vermek", "Sen", "negative")).toBe("vermiyorsun");
    expect(conjugateTurkishMaster("bilmek", "Sen", "negative")).toBe("bilmiyorsun");
    expect(conjugateTurkishMaster("düşünmek", "Sen", "negative")).toBe("düşünmüyorsun");
    expect(conjugateTurkishMaster("görmek", "Sen", "negative")).toBe("görmüyorsun");
    expect(conjugateTurkishMaster("istemek", "Sen", "negative")).toBe("istemiyorsun");
    expect(conjugateTurkishMaster("ödemek", "Sen", "negative")).toBe("ödemiyorsun");
    expect(conjugateTurkishMaster("yemek", "Sen", "negative")).toBe("yemiyorsun");
    expect(conjugateTurkishMaster("demek", "Sen", "negative")).toBe("demiyorsun");
    expect(conjugateTurkishMaster("gitmek", "Sen", "negative")).toBe("gidmiyorsun");
    expect(conjugateTurkishMaster("etmek", "Sen", "negative")).toBe("edmiyorsun");
    expect(conjugateTurkishMaster("tatmek", "Sen", "negative")).toBe("tadmıyorsun");
    expect(conjugateTurkishMaster("seyretmek", "Sen", "negative")).toBe("seyredmiyorsun");
    expect(conjugateTurkishMaster("yapmak", "Sen", "negativeInterrogative")).toBe("yapmıyor musun?");
    expect(conjugateTurkishMaster("çalışmak", "Sen", "negativeInterrogative")).toBe("çalışmıyor musun?");
    expect(conjugateTurkishMaster("vermek", "Sen", "negativeInterrogative")).toBe("vermiyor musun?");
    expect(conjugateTurkishMaster("bilmek", "Sen", "negativeInterrogative")).toBe("bilmiyor musun?");
    expect(conjugateTurkishMaster("düşünmek", "Sen", "negativeInterrogative")).toBe("düşünmüyor musun?");
    expect(conjugateTurkishMaster("görmek", "Sen", "negativeInterrogative")).toBe("görmüyor musun?");
    expect(conjugateTurkishMaster("istemek", "Sen", "negativeInterrogative")).toBe("istemiyor musun?");
    expect(conjugateTurkishMaster("ödemek", "Sen", "negativeInterrogative")).toBe("ödemiyor musun?");
    expect(conjugateTurkishMaster("yemek", "Sen", "negativeInterrogative")).toBe("yemiyor musun?");
    expect(conjugateTurkishMaster("demek", "Sen", "negativeInterrogative")).toBe("demiyor musun?");
    expect(conjugateTurkishMaster("gitmek", "Sen", "negativeInterrogative")).toBe("gidmiyor musun?");
    expect(conjugateTurkishMaster("etmek", "Sen", "negativeInterrogative")).toBe("edmiyor musun?");
    expect(conjugateTurkishMaster("tatmek", "Sen", "negativeInterrogative")).toBe("tadmıyor musun?");
    expect(conjugateTurkishMaster("seyretmek", "Sen", "negativeInterrogative")).toBe("seyredmiyor musun?");
  });

  test("conjugates properly for O", () => {
    expect(conjugateTurkishMaster("yapmak", "O")).toBe("yapıyor");
    expect(conjugateTurkishMaster("çalışmak", "O")).toBe("çalışıyor");
    expect(conjugateTurkishMaster("vermek", "O")).toBe("veriyor");
    expect(conjugateTurkishMaster("bilmek", "O")).toBe("biliyor");
    expect(conjugateTurkishMaster("düşünmek", "O")).toBe("düşünüyor");
    expect(conjugateTurkishMaster("görmek", "O")).toBe("görüyor");
    expect(conjugateTurkishMaster("istemek", "O")).toBe("istiyor");
    expect(conjugateTurkishMaster("ödemek", "O")).toBe("ödüyor");
    expect(conjugateTurkishMaster("yemek", "O")).toBe("yiyor");
    expect(conjugateTurkishMaster("demek", "O")).toBe("diyor");
    expect(conjugateTurkishMaster("gitmek", "O")).toBe("gidiyor");
    expect(conjugateTurkishMaster("etmek", "O")).toBe("ediyor");
    expect(conjugateTurkishMaster("tatmek", "O")).toBe("tadıyor");
    expect(conjugateTurkishMaster("seyretmek", "O")).toBe("seyrediyor");
    expect(conjugateTurkishMaster("yapmak", "O", "interrogative")).toBe("yapıyor mu?");
    expect(conjugateTurkishMaster("çalışmak", "O", "interrogative")).toBe("çalışıyor mu?");
    expect(conjugateTurkishMaster("vermek", "O", "interrogative")).toBe("veriyor mu?");
    expect(conjugateTurkishMaster("bilmek", "O", "interrogative")).toBe("biliyor mu?");
    expect(conjugateTurkishMaster("düşünmek", "O", "interrogative")).toBe("düşünüyor mu?");
    expect(conjugateTurkishMaster("görmek", "O", "interrogative")).toBe("görüyor mu?");
    expect(conjugateTurkishMaster("istemek", "O", "interrogative")).toBe("istiyor mu?");
    expect(conjugateTurkishMaster("ödemek", "O", "interrogative")).toBe("ödüyor mu?");
    expect(conjugateTurkishMaster("yemek", "O", "interrogative")).toBe("yiyor mu?");
    expect(conjugateTurkishMaster("demek", "O", "interrogative")).toBe("diyor mu?");
    expect(conjugateTurkishMaster("gitmek", "O", "interrogative")).toBe("gidiyor mu?");
    expect(conjugateTurkishMaster("etmek", "O", "interrogative")).toBe("ediyor mu?");
    expect(conjugateTurkishMaster("tatmek", "O", "interrogative")).toBe("tadıyor mu?");
    expect(conjugateTurkishMaster("seyretmek", "O", "interrogative")).toBe("seyrediyor mu?");
    expect(conjugateTurkishMaster("yapmak", "O", "negative")).toBe("yapmıyor");
    expect(conjugateTurkishMaster("çalışmak", "O", "negative")).toBe("çalışmıyor");
    expect(conjugateTurkishMaster("vermek", "O", "negative")).toBe("vermiyor");
    expect(conjugateTurkishMaster("bilmek", "O", "negative")).toBe("bilmiyor");
    expect(conjugateTurkishMaster("düşünmek", "O", "negative")).toBe("düşünmüyor");
    expect(conjugateTurkishMaster("görmek", "O", "negative")).toBe("görmüyor");
    expect(conjugateTurkishMaster("istemek", "O", "negative")).toBe("istemiyor");
    expect(conjugateTurkishMaster("ödemek", "O", "negative")).toBe("ödemiyor");
    expect(conjugateTurkishMaster("yemek", "O", "negative")).toBe("yemiyor");
    expect(conjugateTurkishMaster("demek", "O", "negative")).toBe("demiyor");
    expect(conjugateTurkishMaster("gitmek", "O", "negative")).toBe("gidmiyor");
    expect(conjugateTurkishMaster("etmek", "O", "negative")).toBe("edmiyor");
    expect(conjugateTurkishMaster("tatmek", "O", "negative")).toBe("tadmıyor");
    expect(conjugateTurkishMaster("seyretmek", "O", "negative")).toBe("seyredmiyor");
    expect(conjugateTurkishMaster("yapmak", "O", "negativeInterrogative")).toBe("yapmıyor mu?");
    expect(conjugateTurkishMaster("çalışmak", "O", "negativeInterrogative")).toBe("çalışmıyor mu?");
    expect(conjugateTurkishMaster("vermek", "O", "negativeInterrogative")).toBe("vermiyor mu?");
    expect(conjugateTurkishMaster("bilmek", "O", "negativeInterrogative")).toBe("bilmiyor mu?");
    expect(conjugateTurkishMaster("düşünmek", "O", "negativeInterrogative")).toBe("düşünmüyor mu?");
    expect(conjugateTurkishMaster("görmek", "O", "negativeInterrogative")).toBe("görmüyor mu?");
    expect(conjugateTurkishMaster("istemek", "O", "negativeInterrogative")).toBe("istemiyor mu?");
    expect(conjugateTurkishMaster("ödemek", "O", "negativeInterrogative")).toBe("ödemiyor mu?");
    expect(conjugateTurkishMaster("yemek", "O", "negativeInterrogative")).toBe("yemiyor mu?");
    expect(conjugateTurkishMaster("demek", "O", "negativeInterrogative")).toBe("demiyor mu?");
    expect(conjugateTurkishMaster("gitmek", "O", "negativeInterrogative")).toBe("gidmiyor mu?");
    expect(conjugateTurkishMaster("etmek", "O", "negativeInterrogative")).toBe("edmiyor mu?");
    expect(conjugateTurkishMaster("tatmek", "O", "negativeInterrogative")).toBe("tadmıyor mu?");
    expect(conjugateTurkishMaster("seyretmek", "O", "negativeInterrogative")).toBe("seyredmiyor mu?");
  });

  test("conjugates properly for Biz", () => {
    expect(conjugateTurkishMaster("yapmak", "Biz")).toBe("yapıyoruz");
    expect(conjugateTurkishMaster("çalışmak", "Biz")).toBe("çalışıyoruz");
    expect(conjugateTurkishMaster("vermek", "Biz")).toBe("veriyoruz");
    expect(conjugateTurkishMaster("bilmek", "Biz")).toBe("biliyoruz");
    expect(conjugateTurkishMaster("düşünmek", "Biz")).toBe("düşünüyoruz");
    expect(conjugateTurkishMaster("görmek", "Biz")).toBe("görüyoruz");
    expect(conjugateTurkishMaster("istemek", "Biz")).toBe("istiyoruz");
    expect(conjugateTurkishMaster("ödemek", "Biz")).toBe("ödüyoruz");
    expect(conjugateTurkishMaster("yemek", "Biz")).toBe("yiyoruz");
    expect(conjugateTurkishMaster("demek", "Biz")).toBe("diyoruz");
    expect(conjugateTurkishMaster("gitmek", "Biz")).toBe("gidiyoruz");
    expect(conjugateTurkishMaster("etmek", "Biz")).toBe("ediyoruz");
    expect(conjugateTurkishMaster("tatmek", "Biz")).toBe("tadıyoruz");
    expect(conjugateTurkishMaster("seyretmek", "Biz")).toBe("seyrediyoruz");
    expect(conjugateTurkishMaster("yapmak", "Biz", "interrogative")).toBe("yapıyor muyuz?");
    expect(conjugateTurkishMaster("çalışmak", "Biz", "interrogative")).toBe("çalışıyor muyuz?");
    expect(conjugateTurkishMaster("vermek", "Biz", "interrogative")).toBe("veriyor muyuz?");
    expect(conjugateTurkishMaster("bilmek", "Biz", "interrogative")).toBe("biliyor muyuz?");
    expect(conjugateTurkishMaster("düşünmek", "Biz", "interrogative")).toBe("düşünüyor muyuz?");
    expect(conjugateTurkishMaster("görmek", "Biz", "interrogative")).toBe("görüyor muyuz?");
    expect(conjugateTurkishMaster("istemek", "Biz", "interrogative")).toBe("istiyor muyuz?");
    expect(conjugateTurkishMaster("ödemek", "Biz", "interrogative")).toBe("ödüyor muyuz?");
    expect(conjugateTurkishMaster("yemek", "Biz", "interrogative")).toBe("yiyor muyuz?");
    expect(conjugateTurkishMaster("demek", "Biz", "interrogative")).toBe("diyor muyuz?");
    expect(conjugateTurkishMaster("gitmek", "Biz", "interrogative")).toBe("gidiyor muyuz?");
    expect(conjugateTurkishMaster("etmek", "Biz", "interrogative")).toBe("ediyor muyuz?");
    expect(conjugateTurkishMaster("tatmek", "Biz", "interrogative")).toBe("tadıyor muyuz?");
    expect(conjugateTurkishMaster("seyretmek", "Biz", "interrogative")).toBe("seyrediyor muyuz?");
    expect(conjugateTurkishMaster("yapmak", "Biz", "negative")).toBe("yapmıyoruz");
    expect(conjugateTurkishMaster("çalışmak", "Biz", "negative")).toBe("çalışmıyoruz");
    expect(conjugateTurkishMaster("vermek", "Biz", "negative")).toBe("vermiyoruz");
    expect(conjugateTurkishMaster("bilmek", "Biz", "negative")).toBe("bilmiyoruz");
    expect(conjugateTurkishMaster("düşünmek", "Biz", "negative")).toBe("düşünmüyoruz");
    expect(conjugateTurkishMaster("görmek", "Biz", "negative")).toBe("görmüyoruz");
    expect(conjugateTurkishMaster("istemek", "Biz", "negative")).toBe("istemiyoruz");
    expect(conjugateTurkishMaster("ödemek", "Biz", "negative")).toBe("ödemiyoruz");
    expect(conjugateTurkishMaster("yemek", "Biz", "negative")).toBe("yemiyoruz");
    expect(conjugateTurkishMaster("demek", "Biz", "negative")).toBe("demiyoruz");
    expect(conjugateTurkishMaster("gitmek", "Biz", "negative")).toBe("gidmiyoruz");
    expect(conjugateTurkishMaster("etmek", "Biz", "negative")).toBe("edmiyoruz");
    expect(conjugateTurkishMaster("tatmek", "Biz", "negative")).toBe("tadmıyoruz");
    expect(conjugateTurkishMaster("seyretmek", "Biz", "negative")).toBe("seyredmiyoruz");
    expect(conjugateTurkishMaster("yapmak", "Biz", "negativeInterrogative")).toBe("yapmıyor muyuz?");
    expect(conjugateTurkishMaster("çalışmak", "Biz", "negativeInterrogative")).toBe("çalışmıyor muyuz?");
    expect(conjugateTurkishMaster("vermek", "Biz", "negativeInterrogative")).toBe("vermiyor muyuz?");
    expect(conjugateTurkishMaster("bilmek", "Biz", "negativeInterrogative")).toBe("bilmiyor muyuz?");
    expect(conjugateTurkishMaster("düşünmek", "Biz", "negativeInterrogative")).toBe("düşünmüyor muyuz?");
    expect(conjugateTurkishMaster("görmek", "Biz", "negativeInterrogative")).toBe("görmüyor muyuz?");
    expect(conjugateTurkishMaster("istemek", "Biz", "negativeInterrogative")).toBe("istemiyor muyuz?");
    expect(conjugateTurkishMaster("ödemek", "Biz", "negativeInterrogative")).toBe("ödemiyor muyuz?");
    expect(conjugateTurkishMaster("yemek", "Biz", "negativeInterrogative")).toBe("yemiyor muyuz?");
    expect(conjugateTurkishMaster("demek", "Biz", "negativeInterrogative")).toBe("demiyor muyuz?");
    expect(conjugateTurkishMaster("gitmek", "Biz", "negativeInterrogative")).toBe("gidmiyor muyuz?");
    expect(conjugateTurkishMaster("etmek", "Biz", "negativeInterrogative")).toBe("edmiyor muyuz?");
    expect(conjugateTurkishMaster("tatmek", "Biz", "negativeInterrogative")).toBe("tadmıyor muyuz?");
    expect(conjugateTurkishMaster("seyretmek", "Biz", "negativeInterrogative")).toBe("seyredmiyor muyuz?");
  });

  test("conjugates properly for Siz", () => {
    expect(conjugateTurkishMaster("yapmak", "Siz")).toBe("yapıyorsunuz");
    expect(conjugateTurkishMaster("çalışmak", "Siz")).toBe("çalışıyorsunuz");
    expect(conjugateTurkishMaster("vermek", "Siz")).toBe("veriyorsunuz");
    expect(conjugateTurkishMaster("bilmek", "Siz")).toBe("biliyorsunuz");
    expect(conjugateTurkishMaster("düşünmek", "Siz")).toBe("düşünüyorsunuz");
    expect(conjugateTurkishMaster("görmek", "Siz")).toBe("görüyorsunuz");
    expect(conjugateTurkishMaster("istemek", "Siz")).toBe("istiyorsunuz");
    expect(conjugateTurkishMaster("ödemek", "Siz")).toBe("ödüyorsunuz");
    expect(conjugateTurkishMaster("yemek", "Siz")).toBe("yiyorsunuz");
    expect(conjugateTurkishMaster("demek", "Siz")).toBe("diyorsunuz");
    expect(conjugateTurkishMaster("gitmek", "Siz")).toBe("gidiyorsunuz");
    expect(conjugateTurkishMaster("etmek", "Siz")).toBe("ediyorsunuz");
    expect(conjugateTurkishMaster("tatmek", "Siz")).toBe("tadıyorsunuz");
    expect(conjugateTurkishMaster("seyretmek", "Siz")).toBe("seyrediyorsunuz");
    expect(conjugateTurkishMaster("yapmak", "Siz", "interrogative")).toBe("yapıyor musunuz?");
    expect(conjugateTurkishMaster("çalışmak", "Siz", "interrogative")).toBe("çalışıyor musunuz?");
    expect(conjugateTurkishMaster("vermek", "Siz", "interrogative")).toBe("veriyor musunuz?");
    expect(conjugateTurkishMaster("bilmek", "Siz", "interrogative")).toBe("biliyor musunuz?");
    expect(conjugateTurkishMaster("düşünmek", "Siz", "interrogative")).toBe("düşünüyor musunuz?");
    expect(conjugateTurkishMaster("görmek", "Siz", "interrogative")).toBe("görüyor musunuz?");
    expect(conjugateTurkishMaster("istemek", "Siz", "interrogative")).toBe("istiyor musunuz?");
    expect(conjugateTurkishMaster("ödemek", "Siz", "interrogative")).toBe("ödüyor musunuz?");
    expect(conjugateTurkishMaster("yemek", "Siz", "interrogative")).toBe("yiyor musunuz?");
    expect(conjugateTurkishMaster("demek", "Siz", "interrogative")).toBe("diyor musunuz?");
    expect(conjugateTurkishMaster("gitmek", "Siz", "interrogative")).toBe("gidiyor musunuz?");
    expect(conjugateTurkishMaster("etmek", "Siz", "interrogative")).toBe("ediyor musunuz?");
    expect(conjugateTurkishMaster("tatmek", "Siz", "interrogative")).toBe("tadıyor musunuz?");
    expect(conjugateTurkishMaster("seyretmek", "Siz", "interrogative")).toBe("seyrediyor musunuz?");
    expect(conjugateTurkishMaster("yapmak", "Siz", "negative")).toBe("yapmıyorsunuz");
    expect(conjugateTurkishMaster("çalışmak", "Siz", "negative")).toBe("çalışmıyorsunuz");
    expect(conjugateTurkishMaster("vermek", "Siz", "negative")).toBe("vermiyorsunuz");
    expect(conjugateTurkishMaster("bilmek", "Siz", "negative")).toBe("bilmiyorsunuz");
    expect(conjugateTurkishMaster("düşünmek", "Siz", "negative")).toBe("düşünmüyorsunuz");
    expect(conjugateTurkishMaster("görmek", "Siz", "negative")).toBe("görmüyorsunuz");
    expect(conjugateTurkishMaster("istemek", "Siz", "negative")).toBe("istemiyorsunuz");
    expect(conjugateTurkishMaster("ödemek", "Siz", "negative")).toBe("ödemiyorsunuz");
    expect(conjugateTurkishMaster("yemek", "Siz", "negative")).toBe("yemiyorsunuz");
    expect(conjugateTurkishMaster("demek", "Siz", "negative")).toBe("demiyorsunuz");
    expect(conjugateTurkishMaster("gitmek", "Siz", "negative")).toBe("gidmiyorsunuz");
    expect(conjugateTurkishMaster("etmek", "Siz", "negative")).toBe("edmiyorsunuz");
    expect(conjugateTurkishMaster("tatmek", "Siz", "negative")).toBe("tadmıyorsunuz");
    expect(conjugateTurkishMaster("seyretmek", "Siz", "negative")).toBe("seyredmiyorsunuz");
    expect(conjugateTurkishMaster("yapmak", "Siz", "negativeInterrogative")).toBe("yapmıyor musunuz?");
    expect(conjugateTurkishMaster("çalışmak", "Siz", "negativeInterrogative")).toBe("çalışmıyor musunuz?");
    expect(conjugateTurkishMaster("vermek", "Siz", "negativeInterrogative")).toBe("vermiyor musunuz?");
    expect(conjugateTurkishMaster("bilmek", "Siz", "negativeInterrogative")).toBe("bilmiyor musunuz?");
    expect(conjugateTurkishMaster("düşünmek", "Siz", "negativeInterrogative")).toBe("düşünmüyor musunuz?");
    expect(conjugateTurkishMaster("görmek", "Siz", "negativeInterrogative")).toBe("görmüyor musunuz?");
    expect(conjugateTurkishMaster("istemek", "Siz", "negativeInterrogative")).toBe("istemiyor musunuz?");
    expect(conjugateTurkishMaster("ödemek", "Siz", "negativeInterrogative")).toBe("ödemiyor musunuz?");
    expect(conjugateTurkishMaster("yemek", "Siz", "negativeInterrogative")).toBe("yemiyor musunuz?");
    expect(conjugateTurkishMaster("demek", "Siz", "negativeInterrogative")).toBe("demiyor musunuz?");
    expect(conjugateTurkishMaster("gitmek", "Siz", "negativeInterrogative")).toBe("gidmiyor musunuz?");
    expect(conjugateTurkishMaster("etmek", "Siz", "negativeInterrogative")).toBe("edmiyor musunuz?");
    expect(conjugateTurkishMaster("tatmek", "Siz", "negativeInterrogative")).toBe("tadmıyor musunuz?");
    expect(conjugateTurkishMaster("seyretmek", "Siz", "negativeInterrogative")).toBe("seyredmiyor musunuz?");
  });

  test("conjugates properly for Onlar", () => {
    expect(conjugateTurkishMaster("yapmak", "Onlar")).toBe("yapıyorlar");
    expect(conjugateTurkishMaster("çalışmak", "Onlar")).toBe("çalışıyorlar");
    expect(conjugateTurkishMaster("vermek", "Onlar")).toBe("veriyorlar");
    expect(conjugateTurkishMaster("bilmek", "Onlar")).toBe("biliyorlar");
    expect(conjugateTurkishMaster("düşünmek", "Onlar")).toBe("düşünüyorlar");
    expect(conjugateTurkishMaster("görmek", "Onlar")).toBe("görüyorlar");
    expect(conjugateTurkishMaster("istemek", "Onlar")).toBe("istiyorlar");
    expect(conjugateTurkishMaster("ödemek", "Onlar")).toBe("ödüyorlar");
    expect(conjugateTurkishMaster("yemek", "Onlar")).toBe("yiyorlar");
    expect(conjugateTurkishMaster("demek", "Onlar")).toBe("diyorlar");
    expect(conjugateTurkishMaster("gitmek", "Onlar")).toBe("gidiyorlar");
    expect(conjugateTurkishMaster("etmek", "Onlar")).toBe("ediyorlar");
    expect(conjugateTurkishMaster("tatmek", "Onlar")).toBe("tadıyorlar");
    expect(conjugateTurkishMaster("seyretmek", "Onlar")).toBe("seyrediyorlar");
    expect(conjugateTurkishMaster("yapmak", "Onlar", "interrogative")).toBe("yapıyor mu?");
    expect(conjugateTurkishMaster("çalışmak", "Onlar", "interrogative")).toBe("çalışıyor mu?");
    expect(conjugateTurkishMaster("vermek", "Onlar", "interrogative")).toBe("veriyor mu?");
    expect(conjugateTurkishMaster("bilmek", "Onlar", "interrogative")).toBe("biliyor mu?");
    expect(conjugateTurkishMaster("düşünmek", "Onlar", "interrogative")).toBe("düşünüyor mu?");
    expect(conjugateTurkishMaster("görmek", "Onlar", "interrogative")).toBe("görüyor mu?");
    expect(conjugateTurkishMaster("istemek", "Onlar", "interrogative")).toBe("istiyor mu?");
    expect(conjugateTurkishMaster("ödemek", "Onlar", "interrogative")).toBe("ödüyor mu?");
    expect(conjugateTurkishMaster("yemek", "Onlar", "interrogative")).toBe("yiyor mu?");
    expect(conjugateTurkishMaster("demek", "Onlar", "interrogative")).toBe("diyor mu?");
    expect(conjugateTurkishMaster("gitmek", "Onlar", "interrogative")).toBe("gidiyor mu?");
    expect(conjugateTurkishMaster("etmek", "Onlar", "interrogative")).toBe("ediyor mu?");
    expect(conjugateTurkishMaster("tatmek", "Onlar", "interrogative")).toBe("tadıyor mu?");
    expect(conjugateTurkishMaster("seyretmek", "Onlar", "interrogative")).toBe("seyrediyor mu?");
    expect(conjugateTurkishMaster("yapmak", "Onlar", "negative")).toBe("yapmıyorlar");
    expect(conjugateTurkishMaster("çalışmak", "Onlar", "negative")).toBe("çalışmıyorlar");
    expect(conjugateTurkishMaster("vermek", "Onlar", "negative")).toBe("vermiyorlar");
    expect(conjugateTurkishMaster("bilmek", "Onlar", "negative")).toBe("bilmiyorlar");
    expect(conjugateTurkishMaster("düşünmek", "Onlar", "negative")).toBe("düşünmüyorlar");
    expect(conjugateTurkishMaster("görmek", "Onlar", "negative")).toBe("görmüyorlar");
    expect(conjugateTurkishMaster("istemek", "Onlar", "negative")).toBe("istemiyorlar");
    expect(conjugateTurkishMaster("ödemek", "Onlar", "negative")).toBe("ödemiyorlar");
    expect(conjugateTurkishMaster("yemek", "Onlar", "negative")).toBe("yemiyorlar");
    expect(conjugateTurkishMaster("demek", "Onlar", "negative")).toBe("demiyorlar");
    expect(conjugateTurkishMaster("gitmek", "Onlar", "negative")).toBe("gidmiyorlar");
    expect(conjugateTurkishMaster("etmek", "Onlar", "negative")).toBe("edmiyorlar");
    expect(conjugateTurkishMaster("tatmek", "Onlar", "negative")).toBe("tadmıyorlar");
    expect(conjugateTurkishMaster("seyretmek", "Onlar", "negative")).toBe("seyredmiyorlar");
    expect(conjugateTurkishMaster("yapmak", "Onlar", "negativeInterrogative")).toBe("yapmıyor mu?");
    expect(conjugateTurkishMaster("çalışmak", "Onlar", "negativeInterrogative")).toBe("çalışmıyor mu?");
    expect(conjugateTurkishMaster("vermek", "Onlar", "negativeInterrogative")).toBe("vermiyor mu?");
    expect(conjugateTurkishMaster("bilmek", "Onlar", "negativeInterrogative")).toBe("bilmiyor mu?");
    expect(conjugateTurkishMaster("düşünmek", "Onlar", "negativeInterrogative")).toBe("düşünmüyor mu?");
    expect(conjugateTurkishMaster("görmek", "Onlar", "negativeInterrogative")).toBe("görmüyor mu?");
    expect(conjugateTurkishMaster("istemek", "Onlar", "negativeInterrogative")).toBe("istemiyor mu?");
    expect(conjugateTurkishMaster("ödemek", "Onlar", "negativeInterrogative")).toBe("ödemiyor mu?");
    expect(conjugateTurkishMaster("yemek", "Onlar", "negativeInterrogative")).toBe("yemiyor mu?");
    expect(conjugateTurkishMaster("demek", "Onlar", "negativeInterrogative")).toBe("demiyor mu?");
    expect(conjugateTurkishMaster("gitmek", "Onlar", "negativeInterrogative")).toBe("gidmiyor mu?");
    expect(conjugateTurkishMaster("etmek", "Onlar", "negativeInterrogative")).toBe("edmiyor mu?");
    expect(conjugateTurkishMaster("tatmek", "Onlar", "negativeInterrogative")).toBe("tadmıyor mu?");
    expect(conjugateTurkishMaster("seyretmek", "Onlar", "negativeInterrogative")).toBe("seyredmiyor mu?");
  });
});
