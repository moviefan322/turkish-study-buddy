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

export const conjugativePastNegative = (pronoun: string, verbStem: string) => {
  const twoWayVowel = twoWayVowelHarmony(verbStem);
  const suffix = returnParticleWithConjugatedEnding(pronoun, verbStem + "m" + twoWayVowel);

  return `${verbStem}m${twoWayVowel}${suffix}`;
};

export const conjugatePastInterrogative = (pronoun: string, verbStem: string) => {
  const conjugated = conjugativePastAffirmative(pronoun, verbStem);
  const fourWayVowel = fourWayVowelHarmony(conjugated);
  return `${conjugated} m${fourWayVowel}?`;
};

export const conjugativePastNegativeInterrogative = (pronoun: string, verbStem: string) => {
  const conjugated = conjugativePastNegative(pronoun, verbStem);
  const fourWayVowel = fourWayVowelHarmony(conjugated);
  return `${conjugated} m${fourWayVowel}?`;
};

export const pastTenseMaster = (pronoun: string, verbStem: string, mood: string) => {
  switch (mood) {
    case "affirmative":
      return conjugativePastAffirmative(pronoun, verbStem);
    case "negative":
      return conjugativePastNegative(pronoun, verbStem);
    case "interrogative":
      return conjugatePastInterrogative(pronoun, verbStem);
    case "negativeInterrogative":
      return conjugativePastNegativeInterrogative(pronoun, verbStem);
    default:
      return "Invalid mood.";
  }
};
