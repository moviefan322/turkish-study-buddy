import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

const turkishVowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
const conjugatedSuffix = (vowel: string, pronoun: string, word: string) => {
  switch (pronoun) {
    case "Ben":
      return vowel + "m";
    case "Sen":
      return vowel + "n";
    case "O":
      return "";
    case "Biz":
      return vowel + "z";
    case "Siz":
      return vowel + "nuz";
    case "Onlar":
      return vowel + "l" + twoWayVowelHarmony(word) + "r";
  }
};

export const nominalConjugation = (pronoun: string, nounjective: string) => {
  const vowel = fourWayVowelHarmony(nounjective);
  const ending = conjugatedSuffix(vowel, pronoun, nounjective);

  return nounjective + ending;
};
