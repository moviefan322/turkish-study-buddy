import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";
import { endsWithFstkçşhp } from "./past";
import { endsWithVowel } from "./vowelHarmony";
import { pastNominalEnglishMaster } from "./pastNominalEng";

export const returnPastParticleNominal = (verbStem: string) => {
  const vowel = fourWayVowelHarmony(verbStem);
  if (endsWithFstkçşhp(verbStem)) {
    return "t" + vowel;
  }
  if (endsWithVowel(verbStem)) {
    return "yd" + vowel;
  }
  return "d" + vowel;
};

export const returnPastNominalSuffix = (pronoun: string, verbStem: string) => {
  const pastParticleNominal = returnPastParticleNominal(verbStem);
  const vowel = fourWayVowelHarmony(pastParticleNominal);
  const twoWayVowel = twoWayVowelHarmony(pastParticleNominal);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return pastParticleNominal + "m";
    case "sen":
      return pastParticleNominal + "n";
    case "o":
      return pastParticleNominal;
    case "biz":
      return pastParticleNominal + "k";
    case "siz":
      return pastParticleNominal + "n" + vowel + "z";
    case "onlar":
      return pastParticleNominal + "l" + twoWayVowel + "r";
    default:
      return "invalid pronoun/verbStem combination";
  }
};

export const pastNominalAffirmative = (pronoun: string, verbStem: string) => {
  return verbStem + returnPastNominalSuffix(pronoun, verbStem);
};

export const pastNominalNegative = (pronoun: string, verbStem: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return verbStem + " değildim";
    case "sen":
      return verbStem + " değildin";
    case "o":
      return verbStem + " değildi";
    case "biz":
      return verbStem + " değildik";
    case "siz":
      return verbStem + " değildiniz";
    case "onlar":
      return verbStem + " değillerdi";
    default:
      return "invalid pronoun/verbStem combination";
  }
};

export const pastNominalInterrogative = (pronoun: string, verbStem: string) => {
  const vowel = fourWayVowelHarmony(verbStem);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${verbStem} m${vowel}yd${vowel}m?`;
    case "sen":
      return `${verbStem} m${vowel}yd${vowel}n?`;
    case "o":
      return `${verbStem} m${vowel}yd${vowel}?`;
    case "biz":
      return `${verbStem} m${vowel}yd${vowel}k?`;
    case "siz":
      return `${verbStem} m${vowel}yd${vowel}n${vowel}z?`;
    case "onlar":
      const twoWayVowel = twoWayVowelHarmony(verbStem);
      const newVowel = fourWayVowelHarmony(twoWayVowel);
      return `${verbStem}l${twoWayVowel}r m${newVowel}yd${newVowel}?`;
  }
};

export const pastNominalNegativeInterrogative = (pronoun: string, verbStem: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return verbStem + " değil miydim?";
    case "sen":
      return verbStem + " değil miydin?";
    case "o":
      return verbStem + " değil miydi?";
    case "biz":
      return verbStem + " değil miydik?";
    case "siz":
      return verbStem + " değil miydiniz?";
    case "onlar":
      return verbStem + " değiller miydi?";
  }
};

export const turkishPastNominalMaster = (pronoun: string, verb: string, mood: string = "standardMood") => {
  let verbStem = verb;
  if (verb.endsWith("mak") || verb.endsWith("mek")) {
    verbStem = verb.slice(0, -3);
  }
  switch (mood) {
    case "standardMood":
      return pastNominalAffirmative(pronoun, verbStem);
    case "negative":
      return pastNominalNegative(pronoun, verbStem);
    case "interrogative":
      return pastNominalInterrogative(pronoun, verbStem);
    case "negativeInterrogative":
      return pastNominalNegativeInterrogative(pronoun, verbStem);
    default:
      return "Invalid mood.";
  }
};

export const pastNominalMaster = (
  pronoun: { english: string; turkish: string },
  verb: { english: string; turkish: string },
  mood: string = "standardMood"
) => {
  let english = pastNominalEnglishMaster(pronoun.english, verb.english, mood);
  if (english!.includes("s/he/it")) {
    const randomInt = Math.floor(Math.random() * 3);
    const randomPronoun = ["he", "she", "it"][randomInt];
    english = english!.replace("s/he/it", randomPronoun);
    english = english.replace("s/he/it", "he/she/it");
  }
  return {
    english: pastNominalEnglishMaster(pronoun.english, verb.english, mood),
    turkish: turkishPastNominalMaster(pronoun.turkish, verb.turkish, mood),
  };
};
