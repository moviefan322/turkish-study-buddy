const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y", "z"];

const vowels = ["a", "e", "i", "o", "u"];

const turkishVowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

export function presentContinuous(verb: string) {
  const verbMinusTo = verb.split("to ")[1];
  const lastLetter = verb[verb.length - 1];
  const secondToLastLetter = verb[verb.length - 2];
  const thirdToLastLetter = verb[verb.length - 3];
  const lastTwoLetters = secondToLastLetter + lastLetter;

  if (lastTwoLetters === "ie") {
    return verbMinusTo.slice(0, -2) + "ying";
  } else if (lastTwoLetters === "ee") {
    return verbMinusTo.slice(0, -2) + "eeing";
  } else if (vowels.includes(secondToLastLetter) && vowels.includes(thirdToLastLetter) && consonants.includes(lastLetter)) {
    return verbMinusTo + "ing";
  } else if (lastLetter === "e") {
    return verbMinusTo.slice(0, -1) + "ing";
  } else if (lastLetter === "y" || lastLetter === "w") {
    return verbMinusTo + "ing";
  } else if (lastLetter === "c") {
    return verbMinusTo + "king";
  } else if (consonants.includes(lastLetter) && vowels.includes(secondToLastLetter)) {
    return verbMinusTo + verbMinusTo[verbMinusTo.length - 1] + "ing";
  } else {
    return verbMinusTo + "ing";
  }
}

export function presentContinuousSentence(verb: string, pronoun: string) {
  let finalPronoun = pronoun;
  let conjugatedVerb = "";
  let heSheItRand = "";

  if (pronoun === "s/he/it") {
    heSheItRand = Math.random() < 0.5 ? "he" : "she";
    finalPronoun = heSheItRand;
  }

  switch (finalPronoun) {
    case "I":
      conjugatedVerb = "am";
      break;
    case "you":
      conjugatedVerb = "are";
      break;
    case "he":
      conjugatedVerb = "is";
      break;
    case "she":
      conjugatedVerb = "is";
      break;
    case "you (f)":
      conjugatedVerb = "are";
      break;
    case "we":
      conjugatedVerb = "are";
      break;
    case "they":
      conjugatedVerb = "are";
      break;
  }
  console.log("finalPronoun: " + finalPronoun, "conjugatedVerb: " + conjugatedVerb);
  return `${finalPronoun} ${conjugatedVerb} ${presentContinuous(verb)}`;
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

function getVowelHarmony(verbStem: string) {
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
    vowelHarmony = getVowelHarmony(verbStem);
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
      pronounSuffix = "(lar)";
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
    vowelHarmony = getVowelHarmony(verbStem);
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
  console.log("stem: " + verbStem, "vowel: " + vowelHarmony + "suffix: " + pronounSuffix);
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

  vowelHarmony = getVowelHarmony(verbStem);

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
      pronounSuffix = "(lar)";
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

  vowelHarmony = getVowelHarmony(verbStem);

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
  console.log("stem: " + verbStem, "vowel: " + vowelHarmony + "suffix: " + pronounSuffix);
  return verbStem + "m" + vowelHarmony + "yor " + negativeParticle + pronounSuffix;
};
