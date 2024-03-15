import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

export const returnFutureSuffix = (pronoun: String, verbStem: string) => {
  let verb = verbStem;
  if (verbStem === "git") {
    verb = "gid";
  }
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
