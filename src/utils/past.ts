import { endsWithVowel, fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

const fstkçşhp = ["f", "s", "t", "k", "ç", "ş", "h", "p"];
const endsWithFstkçşhp = (verbStem: string) => fstkçşhp.includes(verbStem[verbStem.length - 1]);

export const returnPastParticle = (verbStem: string) => {
  const vowelEnding = endsWithVowel(verbStem);
  const vowel = fourWayVowelHarmony(verbStem);
  if (endsWithFstkçşhp(verbStem)) {
    return "t" + vowel;
  }
  return "d" + vowel;
};

export const returnParticleWithConjugatedEnding = (pronoun: string, verbStem: string) => {
  const diParticle = returnPastParticle(verbStem);
  const vowel = fourWayVowelHarmony(verbStem);
  let pastSuffix = "";
  switch (pronoun.toLowerCase()) {
    case "ben":
      pastSuffix = diParticle + "m";
      break;
    case "sen":
      pastSuffix = diParticle + "n";
      break;
    case "o":
      pastSuffix = diParticle;
      break;
    case "biz":
      pastSuffix = diParticle + "k";
      break;
    case "siz":
      pastSuffix = diParticle + "n" + vowel + "z";
      break;
    case "onlar":
      pastSuffix = diParticle + "l" + twoWayVowelHarmony(diParticle) + "r";
      break;
    default:
      return "Invalid pronoun.";
  }

  return pastSuffix;
};

export const conjugativePastAffirmative = (pronoun: string, verbStem: string) => {
  const pastSuffix = returnParticleWithConjugatedEnding(pronoun, verbStem);
  return verbStem + pastSuffix;
};
