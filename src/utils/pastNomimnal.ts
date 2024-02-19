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
