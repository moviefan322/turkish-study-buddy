import { pronounPairs } from "@/data/vocab/pronounPairs";
import { nouns } from "@/data/vocab/nouns";
import { fourWayVowelHarmony } from "./vowelHarmony";
import { twoWayVowelHarmony } from "./vowelHarmony";
import { endsWithVowel } from "./vowelHarmony";
import { ketchupRule } from "./vowelHarmony";

export const conugativePossessive = (pronoun: string, noun: string) => {
  let vowelHarmony = fourWayVowelHarmony(noun);
  let twoWayVowel = twoWayVowelHarmony(noun);
  let pronounSuffix = "";
  let nounSuffix = "";
  const vowelEnding = endsWithVowel(noun);

  switch (pronoun.toLowerCase()) {
    case "ben":
      pronounSuffix = "im";
      nounSuffix = `${vowelEnding ? "y" : ""}${vowelHarmony}m`;
      break;
    case "sen":
      pronounSuffix = "in";
      nounSuffix = `s${vowelHarmony}n`;
      break;
    case "o":
      pronounSuffix = "";
      nounSuffix = "";
      break;
    case "biz":
      pronounSuffix = "imiz";
      nounSuffix = `${vowelEnding ? "y" : ""}${vowelHarmony}z`;
      break;
    case "siz":
      pronounSuffix = "iniz";
      nounSuffix = `s${vowelHarmony}n${vowelHarmony}z`;
      break;
    case "onlar":
      pronounSuffix = "";
      nounSuffix = `l${twoWayVowel}r`;
      break;
  }

  return ketchupRule(noun, nounSuffix);
};
