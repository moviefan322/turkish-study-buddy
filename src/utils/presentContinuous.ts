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

const turkishPronouns = ["Ben", "Sen", "O", "Biz", "Siz", "Onlar"];

const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
const randomPronounVerbPair =
  pronounVerbPairs[Math.floor(Math.random() * pronounVerbPairs.length)];

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

const turkishConsonants = [
  "b",
  "c",
  "ç",
  "d",
  "f",
  "g",
  "ğ",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "ş",
  "t",
  "v",
  "y",
  "z",
];

const turkishVowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

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
  pronounVerbPair: string[],
  verb: string
) {
  return `${pronounVerbPair[0]} ${pronounVerbPair[1]} ${presentContinuous(
    verb
  )}.`;
}

export const conjugateTurkishVerb = (verb: string, pronoun: string) => {
  // separate stem from ending
  let verbStem = verb.slice(0, -2); // remove -mak or -mek
  let vowelHarmony = "";
  // remove consonants from stem
  const vowelsInStem = verbStem.split("").filter((letter) => {
    return turkishVowels.includes(letter);
  })

  switch (vowelsInStem) {}
};
