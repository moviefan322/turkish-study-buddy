import { fourWayVowelHarmony, twoWayVowelHarmony } from "./vowelHarmony";

const vowels = "aeıioöuü";

export const possessivePronoun = (pronoun: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return "benim";
    case "sen":
      return "senin";
    case "o":
      return "onun";
    case "biz":
      return "bizim";
    case "siz":
      return "sizin";
    case "onlar":
      return "onların";
  }
};

export const possessiveNounSuffix = (pronoun: string, noun: string) => {
  const lastLetterIsVowel = vowels.includes(noun[noun.length - 1]);
  const vowel = fourWayVowelHarmony(noun);
  const pluralVowel = twoWayVowelHarmony(noun);
  let suffix = "";

  switch (pronoun.toLowerCase()) {
    case "ben":
      suffix = lastLetterIsVowel ? "m" : vowel + "m";
      break;
    case "sen":
      suffix = lastLetterIsVowel ? "n" : vowel + "n";
      break;
    case "o":
      suffix = lastLetterIsVowel ? "s" + vowel : vowel;
      break;
    case "biz":
      suffix = lastLetterIsVowel ? "m" + vowel + "z" : vowel + "m" + vowel + "z";
      break;
    case "siz":
      suffix = lastLetterIsVowel ? "n" + vowel + "z" : vowel + "n" + vowel + "z";
      break;
    case "onlar":
      suffix = "l" + pluralVowel + "r" + fourWayVowelHarmony(pluralVowel);
      break;
  }
  return noun + suffix;
};
