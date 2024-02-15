import { endsWithVowel, fourWayVowelHarmony } from "./vowelHarmony";

const fstkçşhp = ["f", "s", "t", "k", "ç", "ş", "h", "p"];
const endsWithFstkçşhp = (verbStem: string) => fstkçşhp.includes(verbStem[verbStem.length - 1]);

export const returnPastParticle = (verbStem: string) => {
  const vowelEnding = endsWithVowel(verbStem);
  const vowel = fourWayVowelHarmony(verbStem);
  if (endsWithFstkçşhp(verbStem)) {
    return "t" + vowel;
  }
  return "d" + vowel;
};
