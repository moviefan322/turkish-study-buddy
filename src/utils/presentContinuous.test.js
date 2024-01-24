import {
  presentContinuous,
  conjugateTurkishVerb,
  getVerbStem,
} from "./presentContinuous";

describe("presentContinuous", () => {
  test('converts verbs ending in "ie" to "ying"', () => {
    expect(presentContinuous("tie")).toBe("tying");
  });

  test('converts verbs ending in "e" to "ing" (dropping the "e")', () => {
    expect(presentContinuous("make")).toBe("making");
  });

  test('converts verbs ending in "y" to "ing"', () => {
    expect(presentContinuous("cry")).toBe("crying");
  });

  test('converts verbs ending in vowel+consonant to v+c+c+"ing"', () => {
    expect(presentContinuous("run")).toBe("running");
    expect(presentContinuous("sit")).toBe("sitting");
    expect(presentContinuous("stab")).toBe("stabbing");
  });

  test('converts verbs ending in "vowel + y"/vowel + w to "ing"', () => {
    expect(presentContinuous("stay")).toBe("staying");
    expect(presentContinuous("show")).toBe("showing");
  });

  test('converts verbs ending in "c" to "cking"', () => {
    expect(presentContinuous("picnic")).toBe("picnicking");
  });

  test("handles other verbs correctly", () => {
    expect(presentContinuous("fuck")).toBe("fucking");
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
    expect(conjugateTurkishVerb("yapmak", "Onlar")).toBe("yapıyor(lar)");
    expect(conjugateTurkishVerb("çalışmak", "Onlar")).toBe("çalışıyor(lar)");
    expect(conjugateTurkishVerb("vermek", "Onlar")).toBe("veriyor(lar)");
    expect(conjugateTurkishVerb("bilmek", "Onlar")).toBe("biliyor(lar)");
    expect(conjugateTurkishVerb("düşünmek", "Onlar")).toBe("düşünüyor(lar)");
    expect(conjugateTurkishVerb("görmek", "Onlar")).toBe("görüyor(lar)");
    expect(conjugateTurkishVerb("istemek", "Onlar")).toBe("istiyor(lar)");
    expect(conjugateTurkishVerb("ödemek", "Onlar")).toBe("ödüyor(lar)");
    expect(conjugateTurkishVerb("yemek", "Onlar")).toBe("yiyor(lar)");
    expect(conjugateTurkishVerb("demek", "Onlar")).toBe("diyor(lar)");
    expect(conjugateTurkishVerb("gitmek", "Onlar")).toBe("gidiyor(lar)");
    expect(conjugateTurkishVerb("etmek", "Onlar")).toBe("ediyor(lar)");
    expect(conjugateTurkishVerb("tatmek", "Onlar")).toBe("tadıyor(lar)");
    expect(conjugateTurkishVerb("seyretmek", "Onlar")).toBe("seyrediyor(lar)");
  });
});
