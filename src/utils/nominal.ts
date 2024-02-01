import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

const conjugatedSuffix = (vowel: string, pronoun: string, word: string) => {
  console.log(word, vowel);
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
  const vowel = fourWayVowelHarmony(nounjective);
  const ending = conjugatedSuffix(vowel, pronoun, nounjective);
  console.log(ending);

  return nounjective + ending;
};
