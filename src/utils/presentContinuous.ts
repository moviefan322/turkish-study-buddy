import { fourWayVowelHarmony } from "./vowelHarmony";

const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y", "z"];

const vowels = ["a", "e", "i", "o", "u"];

const turkishVowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

const exceptionVerbs = ["to cover", "to be"];

const exceptionsFunc = (verb: string) => {
  // make rules for these later
  switch (verb) {
    case "to cover":
      return "covering";

    case "to be":
      return "being";

    default:
      return "error";
  }
};

export function presentContinuous(infinitive: string): string {
  if (exceptionVerbs.includes(infinitive)) {
    return exceptionsFunc(infinitive);
  }

  const verb = infinitive.slice(3);

  if (verb.split(" ").length > 1) {
    return presentContinuous("to " + verb.split(" ")[0]) + " " + verb.split(" ")[1];
  }

  const lastLetter = verb[verb.length - 1];
  const secondToLastLetter = verb[verb.length - 2];
  const thirdToLastLetter = verb[verb.length - 3];
  const lastTwoLetters = secondToLastLetter + lastLetter;

  if (lastTwoLetters === "ie") {
    return verb.slice(0, -2) + "ying";
  } else if (lastTwoLetters === "ee") {
    return verb.slice(0, -2) + "eeing";
  } else if (
    vowels.includes(secondToLastLetter) &&
    vowels.includes(thirdToLastLetter) &&
    consonants.includes(lastLetter)
  ) {
    return verb + "ing";
  } else if (lastLetter === "e") {
    return verb.slice(0, -1) + "ing";
  } else if (lastLetter === "y" || lastLetter === "w") {
    return verb + "ing";
  } else if (lastLetter === "c") {
    return verb + "king";
  } else if (consonants.includes(lastLetter) && vowels.includes(secondToLastLetter)) {
    return verb + verb[verb.length - 1] + "ing";
  } else {
    return verb + "ing";
  }
}

const conjugateBe = (pronoun: string) => {
  switch (pronoun) {
    case "I":
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

const conjugateNotBe = (pronoun: string) => {
  switch (pronoun) {
    case "I":
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

export function presentContinuousSentence(verb: string, pronoun: string) {
  let finalPronoun = pronoun;
  let conjugatedVerb = "";
  let heSheItRand = "";

  if (pronoun === "s/he/it") {
    heSheItRand = Math.random() < 0.5 ? "he" : "she";
    finalPronoun = heSheItRand;
  }

  conjugatedVerb = conjugateBe(finalPronoun);

  return `${finalPronoun} ${conjugatedVerb} ${presentContinuous(verb)}`;
}

export function presentContinuousInterrogativeSentence(verb: string, pronoun: string) {
  let finalPronoun = pronoun;
  let conjugatedVerb = "";
  let heSheItRand = "";

  if (pronoun === "s/he/it") {
    heSheItRand = Math.random() < 0.5 ? "he" : "she";
    finalPronoun = heSheItRand;
  }

  conjugatedVerb = conjugateBe(finalPronoun);

  return `${conjugatedVerb} ${finalPronoun} ${presentContinuous(verb)}?`;
}

export function presentContinuousNegativeSentence(verb: string, pronoun: string) {
  let finalPronoun = pronoun;
  let conjugatedVerb = "";
  let heSheItRand = "";

  if (pronoun === "s/he/it") {
    heSheItRand = Math.random() < 0.5 ? "he" : "she";
    finalPronoun = heSheItRand;
  }

  conjugatedVerb = conjugateNotBe(finalPronoun);

  return `${finalPronoun} ${conjugatedVerb} ${presentContinuous(verb)}`;
}

export function presentContinuousNegativeInterrogativeSentence(verb: string, pronoun: string) {
  let finalPronoun = pronoun;
  let conjugatedVerb = "";
  let heSheItRand = "";

  if (pronoun === "s/he/it") {
    heSheItRand = Math.random() < 0.5 ? "he" : "she";
    finalPronoun = heSheItRand;
  }

  conjugatedVerb = conjugateNotBe(finalPronoun);
  if (conjugatedVerb === "am not") {
    conjugatedVerb = "aren't";
  }

  return `${conjugatedVerb} ${finalPronoun} ${presentContinuous(verb)}?`;
}

export function getVerbStem(verb: string) {
  if (verb.endsWith("mak")) {
    return verb.slice(0, -3); // Remove 'mak'
  } else if (verb.endsWith("mek")) {
    return verb.slice(0, -3); // Remove 'mek'
  }
  return verb;
}

function adjustStemForSpecialCases(verbStem: string) {
  if (verbStem.endsWith("t")) {
    verbStem = verbStem.slice(0, -1) + "d";
  }
  if (verbStem.endsWith("a") || verbStem.endsWith("e")) {
    if (verbStem !== "ye" && verbStem !== "de") {
      verbStem = verbStem.slice(0, -1);
    }
  }
  return verbStem;
}

export const conjugateTurkishVerb = (verb: string, pronoun: string) => {
  // separate stem from ending
  let verbStem = getVerbStem(verb);
  verbStem = adjustStemForSpecialCases(verbStem);

  let vowelHarmony = "";
  let pronounSuffix = "";

  if (verbStem === "de") {
    verbStem = "d";
    vowelHarmony = "i";
  } else if (verbStem === "ye") {
    verbStem = "y";
    vowelHarmony = "i";
  } else if (turkishVowels.some((vowel) => verbStem.endsWith(vowel))) {
    vowelHarmony = "";
  } else {
    vowelHarmony = fourWayVowelHarmony(verbStem);
  }

  switch (pronoun) {
    case "Ben":
      pronounSuffix = "um";
      break;
    case "Sen":
      pronounSuffix = "sun";
      break;
    case "O":
      pronounSuffix = "";
      break;
    case "Biz":
      pronounSuffix = "uz";
      break;
    case "Siz":
      pronounSuffix = "sunuz";
      break;
    case "Onlar":
      pronounSuffix = "lar";
      break;
  }

  return verbStem + vowelHarmony + "yor" + pronounSuffix;
};

export const conjugateTurkishVerbInterrogative = (verb: string, pronoun: string) => {
  // separate stem from ending
  let verbStem = getVerbStem(verb);
  verbStem = adjustStemForSpecialCases(verbStem);

  let vowelHarmony = "";
  let negativeParticle = "mu";
  let pronounSuffix = "";

  if (verbStem === "de") {
    verbStem = "d";
    vowelHarmony = "i";
  } else if (verbStem === "ye") {
    verbStem = "y";
    vowelHarmony = "i";
  } else if (turkishVowels.some((vowel) => verbStem.endsWith(vowel))) {
    vowelHarmony = "";
  } else {
    vowelHarmony = fourWayVowelHarmony(verbStem);
  }

  switch (pronoun) {
    case "Ben":
      pronounSuffix = "yum";
      break;
    case "Sen":
      pronounSuffix = "sun";
      break;
    case "O":
      pronounSuffix = "";
      break;
    case "Biz":
      pronounSuffix = "yuz";
      break;
    case "Siz":
      pronounSuffix = "sunuz";
      break;
    case "Onlar":
      pronounSuffix = "";
      break;
  }

  return verbStem + vowelHarmony + "yor " + negativeParticle + pronounSuffix;
};

export const conjugateTurkishVerbNegative = (verb: string, pronoun: string) => {
  // separate stem from ending
  let verbStem = getVerbStem(verb);

  if (verbStem.endsWith("t")) {
    verbStem = verbStem.slice(0, -1) + "d";
  }

  let vowelHarmony = "";
  let pronounSuffix = "";

  vowelHarmony = fourWayVowelHarmony(verbStem);

  switch (pronoun) {
    case "Ben":
      pronounSuffix = "um";
      break;
    case "Sen":
      pronounSuffix = "sun";
      break;
    case "O":
      pronounSuffix = "";
      break;
    case "Biz":
      pronounSuffix = "uz";
      break;
    case "Siz":
      pronounSuffix = "sunuz";
      break;
    case "Onlar":
      pronounSuffix = "lar";
      break;
  }

  return verbStem + "m" + vowelHarmony + "yor" + pronounSuffix;
};

export const conjugateTurkishVerbNegativeInterrogative = (verb: string, pronoun: string) => {
  // separate stem from ending
  let verbStem = getVerbStem(verb);

  if (verbStem.endsWith("t")) {
    verbStem = verbStem.slice(0, -1) + "d";
  }

  let vowelHarmony = "";
  let negativeParticle = "mu";
  let pronounSuffix = "";

  vowelHarmony = fourWayVowelHarmony(verbStem);

  switch (pronoun) {
    case "Ben":
      pronounSuffix = "yum";
      break;
    case "Sen":
      pronounSuffix = "sun";
      break;
    case "O":
      pronounSuffix = "";
      break;
    case "Biz":
      pronounSuffix = "yuz";
      break;
    case "Siz":
      pronounSuffix = "sunuz";
      break;
    case "Onlar":
      pronounSuffix = "";
      break;
  }

  return verbStem + "m" + vowelHarmony + "yor " + negativeParticle + pronounSuffix;
};

export const conjugateTurkishMaster = (verb: string, pronoun: string, mood: string = "standardMood") => {
  switch (mood) {
    case "standardMood":
      return conjugateTurkishVerb(verb, pronoun);
    case "Interrogative":
      return conjugateTurkishVerbInterrogative(verb, pronoun);
    case "Negative":
      return conjugateTurkishVerbNegative(verb, pronoun);
    case "NegativeInterrogative":
      return conjugateTurkishVerbNegativeInterrogative(verb, pronoun);
  }
};

export const englishSentenceMaster = (verb: string, pronoun: string, mood: string = "standardMood") => {
  switch (mood) {
    case "standardMood":
      return presentContinuousSentence(verb, pronoun);
    case "Interrogative":
      return presentContinuousInterrogativeSentence(verb, pronoun);
    case "Negative":
      return presentContinuousNegativeSentence(verb, pronoun);
    case "NegativeInterrogative":
      return presentContinuousNegativeInterrogativeSentence(verb, pronoun);
  }
};

export const sentenceMaster = (
  verb: { english: string; turkish: string },
  pronoun: { english: string; turkish: string },
  mood: string = "standardMood"
) => {
  const turkishSentence = conjugateTurkishMaster(verb.turkish, pronoun.turkish, mood);
  const englishSentence = englishSentenceMaster(verb.english, pronoun.english, mood);

  return {
    turkish: turkishSentence,
    english: englishSentence,
  };
};
