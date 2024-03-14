import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";
import { endsWithFstkçşhp } from "./past";
import { ketchupRule } from "./vowelHarmony";

export const returnFutureSuffix = (pronoun: String, verbStem: string) => {
  const vowel = twoWayVowelHarmony(verbStem);
  const fourWay = fourWayVowelHarmony(vowel);
  switch (pronoun.toLowerCase()) {
    case "ben":
      return ketchupRule(verbStem, `${vowel}c${vowel}ğ${fourWay}m`);
    case "sen":
      return ketchupRule(verbStem, `${vowel}c${vowel}ks${fourWay}n`);
    case "o":
      return ketchupRule(verbStem, `${vowel}c${vowel}k`);
    case "biz":
      return ketchupRule(verbStem, `${vowel}c${vowel}ğ${fourWay}z`);
    case "siz":
      return ketchupRule(verbStem, `${vowel}c${vowel}ks${fourWay}n${fourWay}z`);
    case "onlar":
      return ketchupRule(verbStem, `${vowel}c${vowel}kl${vowel}r`);
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
