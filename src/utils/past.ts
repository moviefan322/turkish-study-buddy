import { englishPastTenseMaster } from "./pastEnglish";
import { endsWithVowel, fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

const fstkçşhp = ["f", "s", "t", "k", "ç", "ş", "h", "p"];
export const endsWithFstkçşhp = (verbStem: string) => fstkçşhp.includes(verbStem[verbStem.length - 1]);

export const returnPastParticle = (verbStem: string) => {
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

export const turkishPastTenseMaster = (pronoun: string, verb: string, mood: string = "standardMood") => {
  const verbStem = verb.slice(0, -3);

  switch (mood) {
    case "standardMood":
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

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const pastTenseMaster = (
  pronoun: { english: string; turkish: string },
  verb: { english: string; turkish: string },
  mood: string = "standardMood"
) => {
  let english = englishPastTenseMaster(pronoun.english, verb.english, mood);
  if (english && english.includes("s/he/it")) {
    const randomInt = Math.floor(Math.random() * 3);
    const randomPronoun = ["he", "she", "it"][randomInt];
    english = english.replace("s/he/it", randomPronoun);
    english = english.replace("s/he/it", "he/she/it");
  }
  return {
    english: capitalizeFirstLetter(english),
    turkish: turkishPastTenseMaster(pronoun.turkish, verb.turkish, mood),
  };
};
