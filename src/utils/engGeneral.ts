export const vowels = ["a", "e", "i", "o", "u"];

export const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "y",
  "z",
];

export const conjugateBe = (pronoun: string) => {
  switch (pronoun.toLowerCase()) {
    case "i":
      return "am";

    case "you":
      return "are";

    case "he":
      return "is";

    case "she":
      return "is";

    case "it":
      return "is";

    case "you (f)":
      return "are";

    case "we":
      return "are";

    case "they":
      return "are";

    default:
      return "Invalid Pronoun";
  }
};

export const conjugateNotBe = (pronoun: string) => {
  switch (pronoun.toLowerCase()) {
    case "i":
      return "am not";

    case "you":
      return "aren't";

    case "he":
      return "isn't";

    case "she":
      return "isn't";

    case "it":
      return "isn't";

    case "you (f)":
      return "aren't";

    case "we":
      return "aren't";

    case "they":
      return "aren't";

    default:
      return "Invalid Pronoun";
  }
};
