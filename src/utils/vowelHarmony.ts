export const turkishVowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

export const endsWithVowel = (verbStem: string) => turkishVowels.includes(verbStem[verbStem.length - 1]);

export function fourWayVowelHarmony(verbStem: string) {
  const finalVowel = verbStem
    .split("")
    .reverse()
    .find((letter) => turkishVowels.includes(letter));

  switch (finalVowel) {
    case "a":
    case "ı":
      return "ı";
    case "e":
    case "i":
      return "i";
    case "o":
    case "u":
      return "u";
    case "ö":
    case "ü":
      return "ü";
    default:
      throw new Error(`Invalid verb stem: ${verbStem}. The stem does not end with a Turkish vowel.`);
  }
}

export function twoWayVowelHarmony(verbStem: string) {
  const finalVowel = verbStem
    .split("")
    .reverse()
    .find((letter) => turkishVowels.includes(letter));

  switch (finalVowel) {
    case "a":
    case "ı":
    case "o":
    case "u":
      return "a";
    case "e":
    case "i":
    case "ö":
    case "ü":
      return "e";
    default:
      throw new Error(`Invalid verb stem: ${verbStem}. The stem does not end with a Turkish vowel.`);
  }
}

const ketchupRuleExceptions = ["Türk"];

export const ketchupRule = (word: string, suffix: string) => {
  const lastLetter = word[word.length - 1];
  if (word === "kitap") {
    console.log("lastLetter", lastLetter);
  }
  const suffixStartsWithVowel = turkishVowels.includes(suffix![0]);
  const ketchup = lastLetter === "k" || lastLetter === "t" || lastLetter === "ç" || lastLetter === "p";

  if (suffixStartsWithVowel && ketchup && !ketchupRuleExceptions.includes(word)) {
    switch (lastLetter) {
      case "k":
        return word.slice(0, -1) + "ğ" + suffix;
      case "t":
        return word.slice(0, -1) + "d" + suffix;
      case "ç":
        return word.slice(0, -1) + "c" + suffix;
      case "p":
        return word.slice(0, -1) + "b" + suffix;
    }
  }
  return word + suffix;
};
