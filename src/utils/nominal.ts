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

export const degilWithSuffix = (pronoun: string) => {
  switch (pronoun.toLocaleLowerCase()) {
    case "ben":
      return "değilim";
    case "sen":
      return "değilsin";
    case "o":
      return "değil";
    case "biz":
      return "değiliz";
    case "siz":
      return "değilsiniz";
    case "onlar":
      return "değil";
  }
};

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

export const nominalConjugationNegative = (pronoun: string, nounjective: string) => {
  return nounjective + " " + degilWithSuffix(pronoun);
};

export const nominalConjugationInterrogative = (pronoun: string, nounjective: string) => {
  let conjugatedMi = "";
  const vowel = fourWayVowelHarmony(nounjective);
  switch (pronoun.toLocaleLowerCase()) {
    case "ben":
      conjugatedMi = `m${vowel}y${vowel}m`;
      break;
    case "sen":
      conjugatedMi = `m${vowel}s${vowel}n`;
      break;
    case "o":
      conjugatedMi = `m${vowel}`;
      break;
    case "biz":
      conjugatedMi = `m${vowel}y${vowel}z`;
      break;
    case "siz":
      conjugatedMi = `m${vowel}s${vowel}n${vowel}z`;
      break;
    case "onlar":
      conjugatedMi = `m${vowel}`;
      break;
  }

  if (pronoun.toLocaleLowerCase() === "onlar") {
    return `${nounjective}(l${twoWayVowelHarmony(nounjective)}r) ${conjugatedMi}?`;
  }

  return `${nounjective} ${conjugatedMi}?`;
};
