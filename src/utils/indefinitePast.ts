import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

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
