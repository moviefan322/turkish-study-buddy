import {
  returnFutureSuffix,
  returnFutureSuffixNegative,
  returnFutureSuffixQuestion,
  returnFutureSuffixNegativeQuestion,
  futureNominalAffirmative,
  futureNominalNegative,
  futureNominalQuestion,
  futureNominaQuestionNegative
} from "./future";

describe("returnFutureSuffix", () => {
  it("should return the correct future suffix", () => {
    expect(returnFutureSuffix("ben", "gel")).toBe("geleceğim");
    expect(returnFutureSuffix("sen", "gel")).toBe("geleceksin");
    expect(returnFutureSuffix("o", "gel")).toBe("gelecek");
    expect(returnFutureSuffix("biz", "gel")).toBe("geleceğiz");
    expect(returnFutureSuffix("siz", "gel")).toBe("geleceksiniz");
    expect(returnFutureSuffix("onlar", "gel")).toBe("gelecekler");
  });

  it("should return the correct future suffix", () => {
    expect(returnFutureSuffix("ben", "yap")).toBe("yapacağım");
    expect(returnFutureSuffix("sen", "yap")).toBe("yapacaksın");
    expect(returnFutureSuffix("o", "yap")).toBe("yapacak");
    expect(returnFutureSuffix("biz", "yap")).toBe("yapacağız");
    expect(returnFutureSuffix("siz", "yap")).toBe("yapacaksınız");
    expect(returnFutureSuffix("onlar", "yap")).toBe("yapacaklar");
  });

  it("should return the correct future suffix for -t stem verbs", () => {
    expect(returnFutureSuffix("ben", "git")).toBe("gideceğim");
    expect(returnFutureSuffix("sen", "git")).toBe("gideceksin");
    expect(returnFutureSuffix("o", "git")).toBe("gidecek");
    expect(returnFutureSuffix("biz", "git")).toBe("gideceğiz");
    expect(returnFutureSuffix("siz", "git")).toBe("gideceksiniz");
    expect(returnFutureSuffix("onlar", "git")).toBe("gidecekler");
  });

  it("should return the correct future suffix for verbs ending in vowel", () => {
    expect(returnFutureSuffix("ben", "izle")).toBe("izleyeceğim");
    expect(returnFutureSuffix("sen", "izle")).toBe("izleyeceksin");
    expect(returnFutureSuffix("o", "izle")).toBe("izleyecek");
    expect(returnFutureSuffix("biz", "izle")).toBe("izleyeceğiz");
    expect(returnFutureSuffix("siz", "izle")).toBe("izleyeceksiniz");
    expect(returnFutureSuffix("onlar", "izle")).toBe("izleyecekler");
  });

  it("should return toe correct form for 'ben'", () => {
    expect(returnFutureSuffix("ben", "izle")).toBe("izleyeceğim");
    expect(returnFutureSuffix("ben", "al")).toBe("alacağım");
    expect(returnFutureSuffix("ben", "koş")).toBe("koşacağım");
    expect(returnFutureSuffix("ben", "gör")).toBe("göreceğim");
  });

  it("should return toe correct form for 'sen'", () => {
    expect(returnFutureSuffix("sen", "izle")).toBe("izleyeceksin");
    expect(returnFutureSuffix("sen", "al")).toBe("alacaksın");
    expect(returnFutureSuffix("sen", "koş")).toBe("koşacaksın");
    expect(returnFutureSuffix("sen", "gör")).toBe("göreceksin");
  });

  it("should return toe correct form for 'o'", () => {
    expect(returnFutureSuffix("o", "izle")).toBe("izleyecek");
    expect(returnFutureSuffix("o", "al")).toBe("alacak");
    expect(returnFutureSuffix("o", "koş")).toBe("koşacak");
    expect(returnFutureSuffix("o", "gör")).toBe("görecek");
  });

  it("should return toe correct form for 'biz'", () => {
    expect(returnFutureSuffix("biz", "izle")).toBe("izleyeceğiz");
    expect(returnFutureSuffix("biz", "al")).toBe("alacağız");
    expect(returnFutureSuffix("biz", "koş")).toBe("koşacağız");
    expect(returnFutureSuffix("biz", "gör")).toBe("göreceğiz");
  });

  it("should return toe correct form for 'siz'", () => {
    expect(returnFutureSuffix("siz", "izle")).toBe("izleyeceksiniz");
    expect(returnFutureSuffix("siz", "al")).toBe("alacaksınız");
    expect(returnFutureSuffix("siz", "koş")).toBe("koşacaksınız");
    expect(returnFutureSuffix("siz", "gör")).toBe("göreceksiniz");
  });

  it("should return toe correct form for 'onlar'", () => {
    expect(returnFutureSuffix("onlar", "izle")).toBe("izleyecekler");
    expect(returnFutureSuffix("onlar", "al")).toBe("alacaklar");
    expect(returnFutureSuffix("onlar", "koş")).toBe("koşacaklar");
    expect(returnFutureSuffix("onlar", "gör")).toBe("görecekler");
  });
});

describe("returnFutureSuffixNegative", () => {
  it("should return the correct negative future suffix", () => {
    expect(returnFutureSuffixNegative("ben", "gel")).toBe("gelmeyeceğim");
    expect(returnFutureSuffixNegative("sen", "gel")).toBe("gelmeyeceksin");
    expect(returnFutureSuffixNegative("o", "gel")).toBe("gelmeyecek");
    expect(returnFutureSuffixNegative("biz", "gel")).toBe("gelmeyeceğiz");
    expect(returnFutureSuffixNegative("siz", "gel")).toBe("gelmeyeceksiniz");
    expect(returnFutureSuffixNegative("onlar", "gel")).toBe("gelmeyecekler");
  });

  it("it should return the correct form for 'git'", () => {
    expect(returnFutureSuffixNegative("ben", "git")).toBe("gitmeyeceğim");
    expect(returnFutureSuffixNegative("sen", "git")).toBe("gitmeyeceksin");
    expect(returnFutureSuffixNegative("o", "git")).toBe("gitmeyecek");
    expect(returnFutureSuffixNegative("biz", "git")).toBe("gitmeyeceğiz");
    expect(returnFutureSuffixNegative("siz", "git")).toBe("gitmeyeceksiniz");
    expect(returnFutureSuffixNegative("onlar", "git")).toBe("gitmeyecekler");
  });

  it("should return the correct negative form for 'ben'", () => {
    expect(returnFutureSuffixNegative("ben", "izle")).toBe("izlemeyeceğim");
    expect(returnFutureSuffixNegative("ben", "al")).toBe("almayacağım");
    expect(returnFutureSuffixNegative("ben", "koş")).toBe("koşmayacağım");
    expect(returnFutureSuffixNegative("ben", "gör")).toBe("görmeyeceğim");
  });

  it("should return the correct negative form for 'sen'", () => {
    expect(returnFutureSuffixNegative("sen", "izle")).toBe("izlemeyeceksin");
    expect(returnFutureSuffixNegative("sen", "al")).toBe("almayacaksın");
    expect(returnFutureSuffixNegative("sen", "koş")).toBe("koşmayacaksın");
    expect(returnFutureSuffixNegative("sen", "gör")).toBe("görmeyeceksin");
  });

  it("should return the correct negative form for 'o'", () => {
    expect(returnFutureSuffixNegative("o", "izle")).toBe("izlemeyecek");
    expect(returnFutureSuffixNegative("o", "al")).toBe("almayacak");
    expect(returnFutureSuffixNegative("o", "koş")).toBe("koşmayacak");
    expect(returnFutureSuffixNegative("o", "gör")).toBe("görmeyecek");
  });

  it("should return the correct negative form for 'biz'", () => {
    expect(returnFutureSuffixNegative("biz", "izle")).toBe("izlemeyeceğiz");
    expect(returnFutureSuffixNegative("biz", "al")).toBe("almayacağız");
    expect(returnFutureSuffixNegative("biz", "koş")).toBe("koşmayacağız");
    expect(returnFutureSuffixNegative("biz", "gör")).toBe("görmeyeceğiz");
  });

  it("should return the correct negative form for 'siz'", () => {
    expect(returnFutureSuffixNegative("siz", "izle")).toBe("izlemeyeceksiniz");
    expect(returnFutureSuffixNegative("siz", "al")).toBe("almayacaksınız");
    expect(returnFutureSuffixNegative("siz", "koş")).toBe("koşmayacaksınız");
    expect(returnFutureSuffixNegative("siz", "gör")).toBe("görmeyeceksiniz");
  });

  it("should return the correct negative form for 'onlar'", () => {
    expect(returnFutureSuffixNegative("onlar", "izle")).toBe("izlemeyecekler");
    expect(returnFutureSuffixNegative("onlar", "al")).toBe("almayacaklar");
    expect(returnFutureSuffixNegative("onlar", "koş")).toBe("koşmayacaklar");
    expect(returnFutureSuffixNegative("onlar", "gör")).toBe("görmeyecekler");
  });
});

describe("returnFutureSuffixQuestion", () => {
  it("should return the correct question future suffix", () => {
    expect(returnFutureSuffixQuestion("ben", "gel")).toBe("gelecek miyim");
    expect(returnFutureSuffixQuestion("sen", "gel")).toBe("gelecek misin");
    expect(returnFutureSuffixQuestion("o", "gel")).toBe("gelecek mi");
    expect(returnFutureSuffixQuestion("biz", "gel")).toBe("gelecek miyiz");
    expect(returnFutureSuffixQuestion("siz", "gel")).toBe("gelecek misiniz");
    expect(returnFutureSuffixQuestion("onlar", "gel")).toBe("gelecekler mi");
  });
});

describe("returnFutureSuffixNegativeQuestion", () => {
  it("should return the correct negative question future suffix", () => {
    expect(returnFutureSuffixNegativeQuestion("ben", "gel")).toBe("gelmeyecek miyim");
    expect(returnFutureSuffixNegativeQuestion("sen", "gel")).toBe("gelmeyecek misin");
    expect(returnFutureSuffixNegativeQuestion("o", "gel")).toBe("gelmeyecek mi");
    expect(returnFutureSuffixNegativeQuestion("biz", "gel")).toBe("gelmeyecek miyiz");
    expect(returnFutureSuffixNegativeQuestion("siz", "gel")).toBe("gelmeyecek misiniz");
    expect(returnFutureSuffixNegativeQuestion("onlar", "gel")).toBe("gelmeyecekler mi");
  });

  it("should return the correct negative question for 'ben'", () => {
    expect(returnFutureSuffixNegativeQuestion("ben", "izle")).toBe("izlemeyecek miyim");
    expect(returnFutureSuffixNegativeQuestion("ben", "al")).toBe("almayacak mıyım");
    expect(returnFutureSuffixNegativeQuestion("ben", "koş")).toBe("koşmayacak mıyım");
    expect(returnFutureSuffixNegativeQuestion("ben", "gör")).toBe("görmeyecek miyim");
  });

  it("should return the correct negative question for 'sen'", () => {
    expect(returnFutureSuffixNegativeQuestion("sen", "izle")).toBe("izlemeyecek misin");
    expect(returnFutureSuffixNegativeQuestion("sen", "al")).toBe("almayacak mısın");
    expect(returnFutureSuffixNegativeQuestion("sen", "koş")).toBe("koşmayacak mısın");
    expect(returnFutureSuffixNegativeQuestion("sen", "gör")).toBe("görmeyecek misin");
  });

  it("should return the correct negative question for 'o'", () => {
    expect(returnFutureSuffixNegativeQuestion("o", "izle")).toBe("izlemeyecek mi");
    expect(returnFutureSuffixNegativeQuestion("o", "al")).toBe("almayacak mı");
    expect(returnFutureSuffixNegativeQuestion("o", "koş")).toBe("koşmayacak mı");
    expect(returnFutureSuffixNegativeQuestion("o", "gör")).toBe("görmeyecek mi");
  });

  it("should return the correct negative question for 'biz'", () => {
    expect(returnFutureSuffixNegativeQuestion("biz", "izle")).toBe("izlemeyecek miyiz");
    expect(returnFutureSuffixNegativeQuestion("biz", "al")).toBe("almayacak mıyız");
    expect(returnFutureSuffixNegativeQuestion("biz", "koş")).toBe("koşmayacak mıyız");
    expect(returnFutureSuffixNegativeQuestion("biz", "gör")).toBe("görmeyecek miyiz");
  });

  it("should return the correct negative question for 'siz'", () => {
    expect(returnFutureSuffixNegativeQuestion("siz", "izle")).toBe("izlemeyecek misiniz");
    expect(returnFutureSuffixNegativeQuestion("siz", "al")).toBe("almayacak mısınız");
    expect(returnFutureSuffixNegativeQuestion("siz", "koş")).toBe("koşmayacak mısınız");
    expect(returnFutureSuffixNegativeQuestion("siz", "gör")).toBe("görmeyecek misiniz");
  });

  it("should return the correct negative question for 'onlar'", () => {
    expect(returnFutureSuffixNegativeQuestion("onlar", "izle")).toBe("izlemeyecekler mi");
    expect(returnFutureSuffixNegativeQuestion("onlar", "al")).toBe("almayacaklar mı");
    expect(returnFutureSuffixNegativeQuestion("onlar", "koş")).toBe("koşmayacaklar mı");
    expect(returnFutureSuffixNegativeQuestion("onlar", "gör")).toBe("görmeyecekler mi");
  });
});

describe("futureNominalAffirmative", () => {
  it("should return the correct future nominal affirmative", () => {
    expect(futureNominalAffirmative("ben", "iyi")).toBe("iyi olacağım");
    expect(futureNominalAffirmative("sen", "iyi")).toBe("iyi olacaksın");
    expect(futureNominalAffirmative("o", "iyi")).toBe("iyi olacak");
    expect(futureNominalAffirmative("biz", "iyi")).toBe("iyi olacağız");
    expect(futureNominalAffirmative("siz", "iyi")).toBe("iyi olacaksınız");
    expect(futureNominalAffirmative("onlar", "iyi")).toBe("iyi olacaklar");
  });
});

describe("futureNominalNegative", () => {
  it("should return the correct future nominal negative", () => {
    expect(futureNominalNegative("ben", "güçlü")).toBe("güçlü olmayacağım");
    expect(futureNominalNegative("sen", "güçlü")).toBe("güçlü olmayacaksın");
    expect(futureNominalNegative("o", "güçlü")).toBe("güçlü olmayacak");
    expect(futureNominalNegative("biz", "güçlü")).toBe("güçlü olmayacağız");
    expect(futureNominalNegative("siz", "güçlü")).toBe("güçlü olmayacaksınız");
    expect(futureNominalNegative("onlar", "güçlü")).toBe("güçlü olmayacaklar");
  });
});

describe("futureNominalQuestion", () => {
  it("should return the correct future nominal question", () => {
    expect(futureNominalQuestion("ben", "hasta")).toBe("hasta olacak mıyım");
    expect(futureNominalQuestion("sen", "hasta")).toBe("hasta olacak mısın");
    expect(futureNominalQuestion("o", "hasta")).toBe("hasta olacak mı");
    expect(futureNominalQuestion("biz", "hasta")).toBe("hasta olacak mıyız");
    expect(futureNominalQuestion("siz", "hasta")).toBe("hasta olacak mısınız");
    expect(futureNominalQuestion("onlar", "hasta")).toBe("hasta olacaklar mı");
  });
})

describe("futureNominalQuestionNegative", () => {
  it("should return the correct future nominal question negative", () => {
    expect(futureNominaQuestionNegative("ben", "mutlu")).toBe("mutlu olmayacak mıyım");
    expect(futureNominaQuestionNegative("sen", "mutlu")).toBe("mutlu olmayacak mısın");
    expect(futureNominaQuestionNegative("o", "mutlu")).toBe("mutlu olmayacak mı");
    expect(futureNominaQuestionNegative("biz", "mutlu")).toBe("mutlu olmayacak mıyız");
    expect(futureNominaQuestionNegative("siz", "mutlu")).toBe("mutlu olmayacak mısınız");
    expect(futureNominaQuestionNegative("onlar", "mutlu")).toBe("mutlu olmayacaklar mı");
  });
})