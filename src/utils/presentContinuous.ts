import verbs from "../data/vocab/verbs.json" assert { type: "json" };

const pronounVerbPairs = [
  ["I", "am"],
  ["You", "are"],
  ["He", "is"],
  ["She", "is"],
  ["It", "is"],
  ["We", "are"],
  ["They", "are"],
  ["You (formal)", "are"],
];

const consonants = [
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

const vowels = ["a", "e", "i", "o", "u"];

export function presentContinuous(verb: string) {
  const lastLetter = verb[verb.length - 1];
  const secondToLastLetter = verb[verb.length - 2];
  const lastTwoLetters = secondToLastLetter + lastLetter;

  if (lastTwoLetters === "ie") {
    return verb.slice(0, -2) + "ying";
  } else if (lastLetter === "e") {
    return verb.slice(0, -1) + "ing";
  } else if (lastLetter === "y" || lastLetter === "w") {
    return verb + "ing";
  } else if (lastLetter === "c") {
    return verb + "king";
  } else if (
    consonants.includes(lastLetter) &&
    vowels.includes(secondToLastLetter)
  ) {
    return verb + verb[verb.length - 1] + "ing";
  } else {
    return verb + "ing";
  }
}

export function presentContinuousSentence(
  pronounVerbPair: [string, string],
  verb: string
) {
  return `${pronounVerbPair[0]} ${pronounVerbPair[1]} ${presentContinuous(
    verb
  )}.`;
}

const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
console.log(presentContinuous(randomVerb.english));
