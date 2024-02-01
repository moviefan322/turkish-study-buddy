import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

const conjugatedSuffix = (pronoun: string, word: string) => {
  const vowel = fourWayVowelHarmony(word);
  switch (pronoun.toLocaleLowerCase()) {
    case "ben":
      return vowel + "m";
    case "sen":
      return "s" + vowel + "n";
    case "o":
      return "";
    case "biz":
      return vowel + "z";
    case "siz":
      return "s" + vowel + "n" + vowel + "z";
    case "onlar":
      return "l" + twoWayVowelHarmony(word) + "r";
  }
};

export const nominalConjugation = (pronoun: string, nounjective: string) => {
  const ending = conjugatedSuffix(pronoun, nounjective);

  return nounjective + ending;
};
