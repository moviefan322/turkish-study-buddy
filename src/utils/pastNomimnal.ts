import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";
import { endsWithFstkçşhp } from "./past";
import { endsWithVowel } from "./vowelHarmony";

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
