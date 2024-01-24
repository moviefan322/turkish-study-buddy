import {
  presentContinuous,
  conjugateTurkishVerb,
  conjugateTurkishVerbInterrogative,
  conjugateTurkishVerbNegative,
  conjugateTurkishVerbNegativeInterrogative,
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
    expect(conjugateTurkishVerbNegative("yapmak", "Onlar")).toBe("yapmıyor(lar)");
    expect(conjugateTurkishVerbNegative("çalışmak", "Onlar")).toBe("çalışmıyor(lar)");
    expect(conjugateTurkishVerbNegative("vermek", "Onlar")).toBe("vermiyor(lar)");
    expect(conjugateTurkishVerbNegative("bilmek", "Onlar")).toBe("bilmiyor(lar)");
    expect(conjugateTurkishVerbNegative("düşünmek", "Onlar")).toBe("düşünmüyor(lar)");
    expect(conjugateTurkishVerbNegative("görmek", "Onlar")).toBe("görmüyor(lar)");
    expect(conjugateTurkishVerbNegative("istemek", "Onlar")).toBe("istemiyor(lar)");
    expect(conjugateTurkishVerbNegative("ödemek", "Onlar")).toBe("ödemiyor(lar)");
    expect(conjugateTurkishVerbNegative("yemek", "Onlar")).toBe("yemiyor(lar)");
    expect(conjugateTurkishVerbNegative("demek", "Onlar")).toBe("demiyor(lar)");
    expect(conjugateTurkishVerbNegative("gitmek", "Onlar")).toBe("gidmiyor(lar)");
    expect(conjugateTurkishVerbNegative("etmek", "Onlar")).toBe("edmiyor(lar)");
    expect(conjugateTurkishVerbNegative("tatmek", "Onlar")).toBe("tadmıyor(lar)");
    expect(conjugateTurkishVerbNegative("seyretmek", "Onlar")).toBe("seyredmiyor(lar)");
  });
});

describe("conjugateTurkishVerbNegativeInterrogative", () => {
  test("conjugates properly for ben", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Ben")).toBe("yapmıyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Ben")).toBe("çalışmıyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Ben")).toBe("vermiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Ben")).toBe("bilmiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Ben")).toBe("düşünmüyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Ben")).toBe("görmüyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Ben")).toBe("istemiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Ben")).toBe("ödemiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Ben")).toBe("yemiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Ben")).toBe("demiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Ben")).toBe("gidmiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Ben")).toBe("edmiyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Ben")).toBe("tadmıyor muyum");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Ben")).toBe("seyredmiyor muyum");
  });

  test("conjugates properly for sen", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Sen")).toBe("yapmıyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Sen")).toBe("çalışmıyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Sen")).toBe("vermiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Sen")).toBe("bilmiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Sen")).toBe("düşünmüyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Sen")).toBe("görmüyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Sen")).toBe("istemiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Sen")).toBe("ödemiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Sen")).toBe("yemiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Sen")).toBe("demiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Sen")).toBe("gidmiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Sen")).toBe("edmiyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Sen")).toBe("tadmıyor musun");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Sen")).toBe("seyredmiyor musun");
  });

  test("conjugates properly for O", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "O")).toBe("yapmıyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "O")).toBe("çalışmıyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "O")).toBe("vermiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "O")).toBe("bilmiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "O")).toBe("düşünmüyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "O")).toBe("görmüyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "O")).toBe("istemiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "O")).toBe("ödemiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "O")).toBe("yemiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "O")).toBe("demiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "O")).toBe("gidmiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "O")).toBe("edmiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "O")).toBe("tadmıyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "O")).toBe("seyredmiyor mu");
  });

  test("conjugates properly for Biz", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Biz")).toBe("yapmıyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Biz")).toBe("çalışmıyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Biz")).toBe("vermiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Biz")).toBe("bilmiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Biz")).toBe("düşünmüyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Biz")).toBe("görmüyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Biz")).toBe("istemiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Biz")).toBe("ödemiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Biz")).toBe("yemiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Biz")).toBe("demiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Biz")).toBe("gidmiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Biz")).toBe("edmiyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Biz")).toBe("tadmıyor muyuz");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Biz")).toBe("seyredmiyor muyuz");
  });

  test("conjugates properly for Siz", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Siz")).toBe("yapmıyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Siz")).toBe("çalışmıyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Siz")).toBe("vermiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Siz")).toBe("bilmiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Siz")).toBe("düşünmüyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Siz")).toBe("görmüyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Siz")).toBe("istemiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Siz")).toBe("ödemiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Siz")).toBe("yemiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Siz")).toBe("demiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Siz")).toBe("gidmiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Siz")).toBe("edmiyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Siz")).toBe("tadmıyor musunuz");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Siz")).toBe("seyredmiyor musunuz");
  });

  test("conjugates properly for Onlar", () => {
    expect(conjugateTurkishVerbNegativeInterrogative("yapmak", "Onlar")).toBe("yapmıyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("çalışmak", "Onlar")).toBe("çalışmıyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("vermek", "Onlar")).toBe("vermiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("bilmek", "Onlar")).toBe("bilmiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("düşünmek", "Onlar")).toBe("düşünmüyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("görmek", "Onlar")).toBe("görmüyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("istemek", "Onlar")).toBe("istemiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("ödemek", "Onlar")).toBe("ödemiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("yemek", "Onlar")).toBe("yemiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("demek", "Onlar")).toBe("demiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("gitmek", "Onlar")).toBe("gidmiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("etmek", "Onlar")).toBe("edmiyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("tatmek", "Onlar")).toBe("tadmıyor mu");
    expect(conjugateTurkishVerbNegativeInterrogative("seyretmek", "Onlar")).toBe("seyredmiyor mu");
  });
});
