import { fourWayVowelHarmony, twoWayVowelHarmony, endsWithVowel } from "./vowelHarmony";

const futureVerbRoot = (verbStem: string) => {
  let verb = verbStem;
  if (endsWithVowel(verbStem)) {
    verb = verbStem + "y";
  }
  if (verbStem === "git") {
    verb = "gid";
  }
  if (verbStem === "bahset") {
    verb = "bahsed";
  }
  if (verbStem === "yem") {
    verb = "y";
  }
  if (verbStem === "de") {
    verb = "diy";
  }
  return verb;
};

export const returnFutureSuffix = (pronoun: String, verbStem: string) => {
  let verb = futureVerbRoot(verbStem);

  const vowel = twoWayVowelHarmony(verbStem);
  const fourWay = fourWayVowelHarmony(vowel);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${verb}${vowel}c${vowel}ğ${fourWay}m`;
    case "sen":
      return `${verb}${vowel}c${vowel}ks${fourWay}n`;
    case "o":
      return `${verb}${vowel}c${vowel}k`;
    case "biz":
      return `${verb}${vowel}c${vowel}ğ${fourWay}z`;
    case "siz":
      return `${verb}${vowel}c${vowel}ks${fourWay}n${fourWay}z`;
    case "onlar":
      return `${verb}${vowel}c${vowel}kl${vowel}r`;
  }
};

export const returnFutureSuffixNegative = (pronoun: String, verbStem: string) => {
  const vowel = twoWayVowelHarmony(verbStem);
  const fourWay = fourWayVowelHarmony(vowel);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${verbStem}m${vowel}y${vowel}c${vowel}ğ${fourWay}m`;
    case "sen":
      return `${verbStem}m${vowel}y${vowel}c${vowel}ks${fourWay}n`;
    case "o":
      return `${verbStem}m${vowel}y${vowel}c${vowel}k`;
    case "biz":
      return `${verbStem}m${vowel}y${vowel}c${vowel}ğ${fourWay}z`;
    case "siz":
      return `${verbStem}m${vowel}y${vowel}c${vowel}ks${fourWay}n${fourWay}z`;
    case "onlar":
      return `${verbStem}m${vowel}y${vowel}c${vowel}kl${vowel}r`;
  }
};

export const returnFutureSuffixQuestion = (pronoun: String, verbStem: string) => {
  const vowel = twoWayVowelHarmony(verbStem);
  const fourWay = fourWayVowelHarmony(vowel);
  const futureVerb = `${futureVerbRoot(verbStem)}${vowel}c${vowel}k`;
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}y${fourWayVowelHarmony(futureVerb)}m`;
    case "sen":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}s${fourWayVowelHarmony(futureVerb)}n`;
    case "o":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}`;
    case "biz":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}y${fourWayVowelHarmony(futureVerb)}z`;
    case "siz":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}s${fourWayVowelHarmony(
        futureVerb
      )}n${fourWayVowelHarmony(futureVerb)}z`;
    case "onlar":
      return `${futureVerb}l${vowel}r m${fourWayVowelHarmony(futureVerb)}`;
  }
};

export const returnFutureSuffixNegativeQuestion = (pronoun: String, verbStem: string) => {
  const vowel = twoWayVowelHarmony(verbStem);
  const fourWay = fourWayVowelHarmony(vowel);
  const futureVerb = `${verbStem}m${vowel}y${vowel}c${vowel}k`;
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}y${fourWayVowelHarmony(futureVerb)}m`;
    case "sen":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}s${fourWayVowelHarmony(futureVerb)}n`;
    case "o":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}`;
    case "biz":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}y${fourWayVowelHarmony(futureVerb)}z`;
    case "siz":
      return `${futureVerb} m${fourWayVowelHarmony(futureVerb)}s${fourWayVowelHarmony(
        futureVerb
      )}n${fourWayVowelHarmony(futureVerb)}z`;
    case "onlar":
      return `${futureVerb}l${vowel}r m${fourWayVowelHarmony(futureVerb)}`;
  }
};

export const futureNominalAffirmative = (pronoun: String, adjective: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${adjective} olacağım`;
    case "sen":
      return `${adjective} olacaksın`;
    case "o":
      return `${adjective} olacak`;
    case "biz":
      return `${adjective} olacağız`;
    case "siz":
      return `${adjective} olacaksınız`;
    case "onlar":
      return `${adjective} olacaklar`;
    default:
      return "Error! Invalid pronoun (probably)!";
  }
};

export const futureNominalNegative = (pronoun: String, adjective: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${adjective} olmayacağım`;
    case "sen":
      return `${adjective} olmayacaksın`;
    case "o":
      return `${adjective} olmayacak`;
    case "biz":
      return `${adjective} olmayacağız`;
    case "siz":
      return `${adjective} olmayacaksınız`;
    case "onlar":
      return `${adjective} olmayacaklar`;
    default:
      return "Error! Invalid pronoun (probably)!";
  }
};

export const futureNominalQuestion = (pronoun: String, adjective: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${adjective} olacak mıyım`;
    case "sen":
      return `${adjective} olacak mısın`;
    case "o":
      return `${adjective} olacak mı`;
    case "biz":
      return `${adjective} olacak mıyız`;
    case "siz":
      return `${adjective} olacak mısınız`;
    case "onlar":
      return `${adjective} olacaklar mı`;
    default:
      return "Error! Invalid pronoun (probably)!";
  }
};

export const futureNominaQuestionNegative = (pronoun: String, adjective: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return `${adjective} olmayacak mıyım`;
    case "sen":
      return `${adjective} olmayacak mısın`;
    case "o":
      return `${adjective} olmayacak mı`;
    case "biz":
      return `${adjective} olmayacak mıyız`;
    case "siz":
      return `${adjective} olmayacak mısınız`;
    case "onlar":
      return `${adjective} olmayacaklar mı`;
    default:
      return "Error! Invalid pronoun (probably)!";
  }
};
