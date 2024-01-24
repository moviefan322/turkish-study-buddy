import {
  presentContinuous,
  conjugateTurkishVerb,
  conjugateTurkishVerbInterrogative,
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

describe("conjugateTurkishVerbInterrogative", () => {
  test("conjugates properly for ben", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Ben")).toBe("yapıyor muyum");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Ben")).toBe("çalışıyor muyum");
    expect(conjugateTurkishVerbInterrogative("vermek", "Ben")).toBe("veriyor muyum");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Ben")).toBe("biliyor muyum");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Ben")).toBe("düşünüyor muyum");
    expect(conjugateTurkishVerbInterrogative("görmek", "Ben")).toBe("görüyor muyum");
    expect(conjugateTurkishVerbInterrogative("istemek", "Ben")).toBe("istiyor muyum");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Ben")).toBe("ödüyor muyum");
    expect(conjugateTurkishVerbInterrogative("yemek", "Ben")).toBe("yiyor muyum");
    expect(conjugateTurkishVerbInterrogative("demek", "Ben")).toBe("diyor muyum");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Ben")).toBe("gidiyor muyum");
    expect(conjugateTurkishVerbInterrogative("etmek", "Ben")).toBe("ediyor muyum");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Ben")).toBe("tadıyor muyum");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Ben")).toBe("seyrediyor muyum");
  });

  test("conjugates properly for sen", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Sen")).toBe("yapıyor musun");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Sen")).toBe("çalışıyor musun");
    expect(conjugateTurkishVerbInterrogative("vermek", "Sen")).toBe("veriyor musun");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Sen")).toBe("biliyor musun");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Sen")).toBe("düşünüyor musun");
    expect(conjugateTurkishVerbInterrogative("görmek", "Sen")).toBe("görüyor musun");
    expect(conjugateTurkishVerbInterrogative("istemek", "Sen")).toBe("istiyor musun");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Sen")).toBe("ödüyor musun");
    expect(conjugateTurkishVerbInterrogative("yemek", "Sen")).toBe("yiyor musun");
    expect(conjugateTurkishVerbInterrogative("demek", "Sen")).toBe("diyor musun");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Sen")).toBe("gidiyor musun");
    expect(conjugateTurkishVerbInterrogative("etmek", "Sen")).toBe("ediyor musun");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Sen")).toBe("tadıyor musun");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Sen")).toBe("seyrediyor musun");
  });

  test("conjugates properly for O", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "O")).toBe("yapıyor mu");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "O")).toBe("çalışıyor mu");
    expect(conjugateTurkishVerbInterrogative("vermek", "O")).toBe("veriyor mu");
    expect(conjugateTurkishVerbInterrogative("bilmek", "O")).toBe("biliyor mu");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "O")).toBe("düşünüyor mu");
    expect(conjugateTurkishVerbInterrogative("görmek", "O")).toBe("görüyor mu");
    expect(conjugateTurkishVerbInterrogative("istemek", "O")).toBe("istiyor mu");
    expect(conjugateTurkishVerbInterrogative("ödemek", "O")).toBe("ödüyor mu");
    expect(conjugateTurkishVerbInterrogative("yemek", "O")).toBe("yiyor mu");
    expect(conjugateTurkishVerbInterrogative("demek", "O")).toBe("diyor mu");
    expect(conjugateTurkishVerbInterrogative("gitmek", "O")).toBe("gidiyor mu");
    expect(conjugateTurkishVerbInterrogative("etmek", "O")).toBe("ediyor mu");
    expect(conjugateTurkishVerbInterrogative("tatmek", "O")).toBe("tadıyor mu");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "O")).toBe("seyrediyor mu");
  });

  test("conjugates properly for Biz", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Biz")).toBe("yapıyor muyuz");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Biz")).toBe("çalışıyor muyuz");
    expect(conjugateTurkishVerbInterrogative("vermek", "Biz")).toBe("veriyor muyuz");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Biz")).toBe("biliyor muyuz");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Biz")).toBe("düşünüyor muyuz");
    expect(conjugateTurkishVerbInterrogative("görmek", "Biz")).toBe("görüyor muyuz");
    expect(conjugateTurkishVerbInterrogative("istemek", "Biz")).toBe("istiyor muyuz");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Biz")).toBe("ödüyor muyuz");
    expect(conjugateTurkishVerbInterrogative("yemek", "Biz")).toBe("yiyor muyuz");
    expect(conjugateTurkishVerbInterrogative("demek", "Biz")).toBe("diyor muyuz");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Biz")).toBe("gidiyor muyuz");
    expect(conjugateTurkishVerbInterrogative("etmek", "Biz")).toBe("ediyor muyuz");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Biz")).toBe("tadıyor muyuz");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Biz")).toBe("seyrediyor muyuz");
  });

  test("conjugates properly for Siz", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Siz")).toBe("yapıyor musunuz");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Siz")).toBe("çalışıyor musunuz");
    expect(conjugateTurkishVerbInterrogative("vermek", "Siz")).toBe("veriyor musunuz");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Siz")).toBe("biliyor musunuz");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Siz")).toBe("düşünüyor musunuz");
    expect(conjugateTurkishVerbInterrogative("görmek", "Siz")).toBe("görüyor musunuz");
    expect(conjugateTurkishVerbInterrogative("istemek", "Siz")).toBe("istiyor musunuz");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Siz")).toBe("ödüyor musunuz");
    expect(conjugateTurkishVerbInterrogative("yemek", "Siz")).toBe("yiyor musunuz");
    expect(conjugateTurkishVerbInterrogative("demek", "Siz")).toBe("diyor musunuz");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Siz")).toBe("gidiyor musunuz");
    expect(conjugateTurkishVerbInterrogative("etmek", "Siz")).toBe("ediyor musunuz");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Siz")).toBe("tadıyor musunuz");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Siz")).toBe("seyrediyor musunuz");
  });

  test("conjugates properly for Onlar", () => {
    expect(conjugateTurkishVerbInterrogative("yapmak", "Onlar")).toBe("yapıyor mu");
    expect(conjugateTurkishVerbInterrogative("çalışmak", "Onlar")).toBe("çalışıyor mu");
    expect(conjugateTurkishVerbInterrogative("vermek", "Onlar")).toBe("veriyor mu");
    expect(conjugateTurkishVerbInterrogative("bilmek", "Onlar")).toBe("biliyor mu");
    expect(conjugateTurkishVerbInterrogative("düşünmek", "Onlar")).toBe("düşünüyor mu");
    expect(conjugateTurkishVerbInterrogative("görmek", "Onlar")).toBe("görüyor mu");
    expect(conjugateTurkishVerbInterrogative("istemek", "Onlar")).toBe("istiyor mu");
    expect(conjugateTurkishVerbInterrogative("ödemek", "Onlar")).toBe("ödüyor mu");
    expect(conjugateTurkishVerbInterrogative("yemek", "Onlar")).toBe("yiyor mu");
    expect(conjugateTurkishVerbInterrogative("demek", "Onlar")).toBe("diyor mu");
    expect(conjugateTurkishVerbInterrogative("gitmek", "Onlar")).toBe("gidiyor mu");
    expect(conjugateTurkishVerbInterrogative("etmek", "Onlar")).toBe("ediyor mu");
    expect(conjugateTurkishVerbInterrogative("tatmek", "Onlar")).toBe("tadıyor mu");
    expect(conjugateTurkishVerbInterrogative("seyretmek", "Onlar")).toBe("seyrediyor mu");
  });
});