const turkishVowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

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
