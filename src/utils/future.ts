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
