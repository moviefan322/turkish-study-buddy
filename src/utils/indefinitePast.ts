import { fourWayVowelHarmony, twoWayVowelHarmony, endsWithVowel } from "./vowelHarmony";
import { englishPastTenseMaster } from "./pastEnglish";
import { pastNominalEnglishMaster } from "./pastNominalEng";
import { capitalizeFirstLetter } from "./past";

export const returnMişForm = (verb: string) => {
  const vowel = fourWayVowelHarmony(verb);
  return `m${vowel}ş`;
};

export const returnIndefinitePastSuffix = (pronoun: string, verb: string) => {
  const vowel = fourWayVowelHarmony(verb);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `m${vowel}ş${vowel}m`;
    case "sen":
      return `m${vowel}şs${vowel}n`;
    case "o":
      return `m${vowel}ş`;
    case "biz":
      return `m${vowel}ş${vowel}z`;
    case "siz":
      return `m${vowel}şs${vowel}n${vowel}z`;
    case "onlar":
      return `m${vowel}şl${twoWayVowelHarmony(vowel)}r`;
  }
};

export const indefinitePastAffirmative = (pronoun: string, verb: string) => {
  return `${verb}${returnIndefinitePastSuffix(pronoun, verb)}`;
};

export const indefinitePastNegative = (pronoun: string, verb: string) => {
  const negatedVerbRoot = `${verb}m${twoWayVowelHarmony(verb)}`;
  const vowel = fourWayVowelHarmony(negatedVerbRoot);

  return `${negatedVerbRoot}${returnIndefinitePastSuffix(pronoun, negatedVerbRoot)}`;
};

export const indefinitePastInterrogative = (pronoun: string, verb: string) => {
  const verbPlusMiş = `${verb}${returnMişForm(verb)}`;
  const vowel = fourWayVowelHarmony(verbPlusMiş);

  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${verbPlusMiş} m${vowel}y${vowel}m`;
    case "sen":
      return `${verbPlusMiş} m${vowel}s${vowel}n`;
    case "o":
      return `${verbPlusMiş} m${vowel}`;
    case "biz":
      return `${verbPlusMiş} m${vowel}y${vowel}z`;
    case "siz":
      return `${verbPlusMiş} m${vowel}s${vowel}n${vowel}z`;
    case "onlar":
      return `${verbPlusMiş}l${twoWayVowelHarmony(verbPlusMiş)}r m${fourWayVowelHarmony(
        twoWayVowelHarmony(verbPlusMiş)
      )}`;
  }
};

export const indefinitePastInterrogativeNegative = (pronoun: string, verb: string) => {
  const negatedVerbRoot = `${verb}m${twoWayVowelHarmony(verb)}`;
  const vowel = fourWayVowelHarmony(negatedVerbRoot);
  const lerVowel = twoWayVowelHarmony(returnMişForm(negatedVerbRoot));

  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${negatedVerbRoot}${returnMişForm(negatedVerbRoot)} m${vowel}y${vowel}m`;
    case "sen":
      return `${negatedVerbRoot}${returnMişForm(negatedVerbRoot)} m${vowel}s${vowel}n`;
    case "o":
      return `${negatedVerbRoot}${returnMişForm(negatedVerbRoot)} m${vowel}`;
    case "biz":
      return `${negatedVerbRoot}${returnMişForm(negatedVerbRoot)} m${vowel}y${vowel}z`;
    case "siz":
      return `${negatedVerbRoot}${returnMişForm(negatedVerbRoot)} m${vowel}s${vowel}n${vowel}z`;
    case "onlar":
      return `${negatedVerbRoot}${returnMişForm(negatedVerbRoot)}l${lerVowel}r m${fourWayVowelHarmony(
        twoWayVowelHarmony(negatedVerbRoot)
      )}`;
  }
};

export const returnMişFormNominal = (nounjective: string) => {
  const vowel = fourWayVowelHarmony(nounjective);
  if (endsWithVowel(nounjective)) {
    return `ym${vowel}ş`;
  }
  return `m${vowel}ş`;
};

export const indefinitePastNominalAffirmative = (pronoun: string, nounjective: string) => {
  const verbPlusMiş = `${nounjective}${returnMişFormNominal(nounjective)}`;
  const vowel = fourWayVowelHarmony(verbPlusMiş);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${verbPlusMiş}${vowel}m`;
    case "sen":
      return `${verbPlusMiş}s${vowel}n`;
    case "o":
      return `${verbPlusMiş}`;
    case "biz":
      return `${verbPlusMiş}${vowel}z`;
    case "siz":
      return `${verbPlusMiş}s${vowel}n${vowel}z`;
    case "onlar":
      return `${nounjective}l${twoWayVowelHarmony(nounjective)}r${returnMişFormNominal(
        twoWayVowelHarmony(nounjective) + "r"
      )}`;
  }
};

export const indefinitePastNominalNegative = (pronoun: string, nounjective: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${nounjective} değilmişim`;
    case "sen":
      return `${nounjective} değilmişsin`;
    case "o":
      return `${nounjective} değilmiş`;
    case "biz":
      return `${nounjective} değilmişiz`;
    case "siz":
      return `${nounjective} değilmişsiniz`;
    case "onlar":
      return `${nounjective} değillermiş`;
  }
};

export const indefinitePastNominalInterrogative = (pronoun: string, nounjective: string) => {
  const vowel = fourWayVowelHarmony(nounjective);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${nounjective} m${vowel}ym${vowel}ş${vowel}m`;
    case "sen":
      return `${nounjective} m${vowel}ym${vowel}şs${vowel}n`;
    case "o":
      return `${nounjective} m${vowel}ym${vowel}ş`;
    case "biz":
      return `${nounjective} m${vowel}ym${vowel}ş${vowel}z`;
    case "siz":
      return `${nounjective} m${vowel}ym${vowel}şs${vowel}n${vowel}z`;
    case "onlar":
      return `${nounjective}l${twoWayVowelHarmony(nounjective)}r m${fourWayVowelHarmony(
        twoWayVowelHarmony(nounjective)
      )}ym${fourWayVowelHarmony(twoWayVowelHarmony(nounjective))}ş`;
  }
};

export const indefinitePastNominalInterrogativeNegative = (pronoun: string, nounjective: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${nounjective} değil miymişim`;
    case "sen":
      return `${nounjective} değil miymişsin`;
    case "o":
      return `${nounjective} değil miymiş`;
    case "biz":
      return `${nounjective} değil miymişiz`;
    case "siz":
      return `${nounjective} değil miymişsiniz`;
    case "onlar":
      return `${nounjective} değiller miymiş`;
  }
};

export const turkishIndefinitePastTenseMaster = (pronoun: string, verb: string, mood: string = "standardMood") => {
  const verbStem = verb.slice(0, -3);

  switch (mood) {
    case "standardMood":
      return indefinitePastAffirmative(pronoun, verbStem);
    case "negative":
      return indefinitePastNegative(pronoun, verbStem);
    case "interrogative":
      return indefinitePastInterrogative(pronoun, verbStem);
    case "negativeInterrogative":
      return indefinitePastInterrogativeNegative(pronoun, verbStem);
    default:
      return "Invalid mood.";
  }
};

export const indefinitePastTenseMaster = (
  pronoun: { english: string; turkish: string },
  verb: { english: string; turkish: string },
  mood: string = "standardMood"
) => {
  let english = englishPastTenseMaster(pronoun.english, verb.english, mood);
  return {
    english: capitalizeFirstLetter(english),
    turkish: turkishIndefinitePastTenseMaster(pronoun.turkish, verb.turkish, mood),
  };
};

export const turkishIndefinitePastNominalMaster = (pronoun: string, verb: string, mood: string = "standardMood") => {
  let verbStem = verb;
  if (verb.endsWith("mak") || verb.endsWith("mek")) {
    verbStem = verb.slice(0, -3);
  }
  switch (mood) {
    case "standardMood":
      return indefinitePastNominalAffirmative(pronoun, verbStem);
    case "negative":
      return indefinitePastNominalNegative(pronoun, verbStem);
    case "interrogative":
      return indefinitePastNominalInterrogative(pronoun, verbStem);
    case "negativeInterrogative":
      return indefinitePastNominalInterrogativeNegative(pronoun, verbStem);
    default:
      return "Invalid mood.";
  }
};

export const indefinitePastNominalMaster = (
  pronoun: { english: string; turkish: string },
  verb: { english: string; turkish: string },
  mood: string = "standardMood"
) => {
  return {
    english: pastNominalEnglishMaster(pronoun.english, verb.english, mood),
    turkish: turkishIndefinitePastNominalMaster(pronoun.turkish, verb.turkish, mood),
  };
};
