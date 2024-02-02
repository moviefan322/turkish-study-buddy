import { fourWayVowelHarmony, twoWayVowelHarmony, endsWithVowel, turkishVowels } from "./vowelHarmony";

const conjugatedSuffix = (pronoun: string, word: string) => {
  const vowel = fourWayVowelHarmony(word);
  switch (pronoun.toLocaleLowerCase()) {
    case "ben":
      if (endsWithVowel(word)) {
        return "y" + vowel + "m";
      }
      return vowel + "m";
    case "sen":
      return "s" + vowel + "n";
    case "o":
      return "";
    case "biz":
      if (endsWithVowel(word)) {
        return "y" + vowel + "z";
      }
      return vowel + "z";
    case "siz":
      return "s" + vowel + "n" + vowel + "z";
    case "onlar":
      return "l" + twoWayVowelHarmony(word) + "r";
  }
};

const ketchupRuleExceptions = ["Türk"];

export const nominalConjugation = (pronoun: string, nounjective: string) => {
  const suffix = conjugatedSuffix(pronoun, nounjective);
  const lastLetter = nounjective[nounjective.length - 1];
  const suffixStartsWithVowel = turkishVowels.includes(suffix![0]);
  const ketchup = lastLetter === "k" || lastLetter === "t" || lastLetter === "ç" || lastLetter === "p";

  if (suffixStartsWithVowel && ketchup && !ketchupRuleExceptions.includes(nounjective)) {
    switch (lastLetter) {
      case "k":
        return nounjective.slice(0, -1) + "ğ" + suffix;
      case "t":
        return nounjective.slice(0, -1) + "d" + suffix;
      case "ç":
        return nounjective.slice(0, -1) + "c" + suffix;
      case "p":
        return nounjective.slice(0, -1) + "b" + suffix;
    }
  }

  return nounjective + suffix;
};
