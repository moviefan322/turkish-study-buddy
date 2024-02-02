import { fourWayVowelHarmony, twoWayVowelHarmony, endsWithVowel, turkishVowels } from "./vowelHarmony";
import { conjugateBe, conjugateNotBe, vowels } from "./engGeneral";
import { pronounPairs } from "@/data/vocab/pronounPairs";
import { adjectives } from "@/data/vocab/adjectives";

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

export const nominalConjugationNegativeInterrogative = (pronoun: string, nounjective: string) => {
  switch (pronoun.toLocaleLowerCase()) {
    case "ben":
      return `${nounjective} değil miyim?`;
    case "sen":
      return `${nounjective} değil misin?`;
    case "o":
      return `${nounjective} değil mi?`;
    case "biz":
      return `${nounjective} değil miyiz?`;
    case "siz":
      return `${nounjective} değil misiniz?`;
    case "onlar":
      return `${nounjective} değil(ler) mi?`;
  }
};

export const englishNominalPhraseAdjective = (pronoun: string, adjective: string) => {
  return `${pronoun} ${conjugateBe(pronoun)} ${adjective}`;
};

export const englishNominalPhraseAdjectiveNegative = (pronoun: string, adjective: string) => {
  return `${pronoun} ${conjugateNotBe(pronoun)} ${adjective}`;
};

export const englishNominalPhraseAdjectiveInterrogative = (pronoun: string, adjective: string) => {
  const capitalizeBe = conjugateBe(pronoun).charAt(0).toUpperCase() + conjugateBe(pronoun).slice(1);
  return `${capitalizeBe} ${pronoun === "I" ? pronoun : pronoun.toLocaleLowerCase()} ${adjective}?`;
};

export const englishNominalPhraseAdjectiveNegativeInterrogative = (pronoun: string, adjective: string) => {
  const capitalizeBe = conjugateNotBe(pronoun).charAt(0).toUpperCase() + conjugateNotBe(pronoun).slice(1);

  if (pronoun === "I") {
    return `Aren't ${pronoun} ${adjective}?`;
  }
  return `${capitalizeBe} ${pronoun.toLocaleLowerCase()} ${adjective}?`;
};

export const englishNominalPhraseAdjectiveMaster = (pronoun: string, adjective: string, mood: string) => {
  switch (mood) {
    case "standardMood":
      return englishNominalPhraseAdjective(pronoun, adjective);
    case "negative":
      return englishNominalPhraseAdjectiveNegative(pronoun, adjective);
    case "interrogative":
      return englishNominalPhraseAdjectiveInterrogative(pronoun, adjective);
    case "negativeInterrogative":
      return englishNominalPhraseAdjectiveNegativeInterrogative(pronoun, adjective);
  }
};

export const turkishNominalPhraseMaster = (pronoun: string, nounjective: string, mood: string) => {
  switch (mood) {
    case "standardMood":
      return nominalConjugation(pronoun, nounjective);
    case "negative":
      return nominalConjugationNegative(pronoun, nounjective);
    case "interrogative":
      return nominalConjugationInterrogative(pronoun, nounjective);
    case "negativeInterrogative":
      return nominalConjugationNegativeInterrogative(pronoun, nounjective);
  }
};

const wordStartsWithVowel = (word: string) => {
  return vowels.includes(word[0]);
};

export const englishNominalPhraseNoun = (pronounInput: string, noun: string) => {
  const pronoun = pronounInput.toLocaleLowerCase();
  if (pronoun === "we" || pronoun === "they") {
    return `${pronounInput} ${conjugateBe(pronoun)} ${noun}s`;
  }
  if (wordStartsWithVowel(noun)) {
    return `${pronounInput} ${conjugateBe(pronoun)} an ${noun}`;
  }
  return `${pronounInput} ${conjugateBe(pronoun)} a ${noun}`;
};

export const englishNominalPhraseNounNegative = (pronounInput: string, noun: string) => {
  const pronoun = pronounInput.toLocaleLowerCase();
  if (pronoun === "we" || pronoun === "they") {
    return `${pronounInput} ${conjugateNotBe(pronoun)} ${noun}s`;
  }
  if (wordStartsWithVowel(noun)) {
    return `${pronounInput} ${conjugateNotBe(pronoun)} an ${noun}`;
  }
  return `${pronounInput} ${conjugateNotBe(pronoun)} a ${noun}`;
};

export const englishNominalPhraseNounInterrogative = (pronounInput: string, noun: string) => {
  const pronoun = pronounInput === "I" ? pronounInput : pronounInput.toLocaleLowerCase();
  const capitalizeBe = conjugateBe(pronoun).charAt(0).toUpperCase() + conjugateBe(pronoun).slice(1);

  if (pronoun === "we" || pronoun === "they") {
    return `${capitalizeBe} ${pronoun} ${noun}s?`;
  }

  if (wordStartsWithVowel(noun)) {
    return `${capitalizeBe} ${pronoun} an ${noun}?`;
  }

  return `${capitalizeBe} ${pronoun} a ${noun}?`;
};

export const englishNominalPhraseNounNegativeInterrogative = (pronounInput: string, noun: string) => {
  const pronoun = pronounInput === "I" ? pronounInput : pronounInput.toLocaleLowerCase();
  const capitalizeBe = conjugateNotBe(pronoun).charAt(0).toUpperCase() + conjugateNotBe(pronoun).slice(1);

  if (pronoun === "we" || pronoun === "they") {
    return `Aren't ${pronoun} ${noun}s?`;
  }

  if (pronoun === "I") {
    if (wordStartsWithVowel(noun)) {
      return `Aren't ${pronoun} an ${noun}?`;
    } else {
      return `Aren't ${pronoun} a ${noun}?`;
    }
  }

  if (wordStartsWithVowel(noun)) {
    return `${capitalizeBe} ${pronoun} an ${noun}?`;
  }

  return `${capitalizeBe} ${pronoun} a ${noun}?`;
};

export const englishNominalPhraseNounMaster = (pronoun: string, noun: string, mood: string) => {
  switch (mood) {
    case "standardMood":
      return englishNominalPhraseNoun(pronoun, noun);
    case "negative":
      return englishNominalPhraseNounNegative(pronoun, noun);
    case "interrogative":
      return englishNominalPhraseNounInterrogative(pronoun, noun);
    case "negativeInterrogative":
      return englishNominalPhraseNounNegativeInterrogative(pronoun, noun);
  }
};

export const nominalNounMaster = (
  noun: { english: string; turkish: string },
  pronoun: { english: string; turkish: string },
  mood: string = "standardMood"
) => {
  return {
    english: englishNominalPhraseNounMaster(pronoun.english, noun.english, mood),
    turkish: turkishNominalPhraseMaster(pronoun.turkish, noun.turkish, mood),
  };
};

export const nominalAdjectiveMaster = (
  adjective: { english: string; turkish: string },
  pronoun: { english: string; turkish: string },
  mood: string = "standardMood"
) => {
  return {
    english: englishNominalPhraseAdjectiveMaster(pronoun.english, adjective.english, mood),
    turkish: turkishNominalPhraseMaster(pronoun.turkish, adjective.turkish, mood),
  };
};
