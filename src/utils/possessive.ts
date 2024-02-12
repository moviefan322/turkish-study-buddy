import { pronounPairs } from "@/data/vocab/pronounPairs";
import { nouns } from "@/data/vocab/nouns";
import { fourWayVowelHarmony } from "./vowelHarmony";
import { twoWayVowelHarmony } from "./vowelHarmony";
import { endsWithVowel } from "./vowelHarmony";
import { ketchupRule } from "./vowelHarmony";

export const addNominalSuffix = (pronoun: string, noun: string) => {
  let vowelHarmony = fourWayVowelHarmony(noun);
  let twoWayVowel = twoWayVowelHarmony(noun);
  let nounSuffix = "";
  const vowelEnding = endsWithVowel(noun);

  switch (pronoun.toLowerCase()) {
    case "ben":
      nounSuffix = `${vowelEnding ? "y" : ""}${vowelHarmony}m`;
      break;
    case "sen":
      nounSuffix = `s${vowelHarmony}n`;
      break;
    case "o":
      nounSuffix = "";
      break;
    case "biz":
      nounSuffix = `${vowelEnding ? "y" : ""}${vowelHarmony}z`;
      break;
    case "siz":
      nounSuffix = `s${vowelHarmony}n${vowelHarmony}z`;
      break;
    case "onlar":
      nounSuffix = `l${twoWayVowel}r`;
      break;
  }

  return ketchupRule(noun, nounSuffix);
};

export const negativePossessive = (pronoun: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return "değilim";

    case "sen":
      return "değilsin";

    case "o":
      return "değil";

    case "biz":
      return "değiliz";

    case "siz":
      return "değilsiniz";

    case "onlar":
      return "değil";
  }
};

export const interrogativePossessive = (pronoun: string, verbStem: string) => {
  let vowelHarmony = fourWayVowelHarmony(verbStem);

  switch (pronoun.toLowerCase()) {
    case "ben":
      return `m${vowelHarmony}y${vowelHarmony}m`;
    case "sen":
      return `m${vowelHarmony}s${vowelHarmony}n`;
    case "o":
      return `m${vowelHarmony}`;
    case "biz":
      return `m${vowelHarmony}y${vowelHarmony}z`;
    case "siz":
      return `m${vowelHarmony}s${vowelHarmony}n${vowelHarmony}z`;
    case "onlar":
      return `m${vowelHarmony}`;
  }
};
