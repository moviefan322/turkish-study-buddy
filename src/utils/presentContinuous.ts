import verbs from "../data/vocab/verbs.json" assert { type: "json" };

export function presentContinuous(verb: string) {
  const lastLetter = verb[verb.length - 1];
  const secondToLastLetter = verb[verb.length - 2];
  const lastTwoLetters = secondToLastLetter + lastLetter;

  if (lastTwoLetters === "ie") {
    return verb.slice(0, -2) + "ying";
  } else if (lastLetter === "e") {
    return verb.slice(0, -1) + "ing";
  } else if (lastLetter === "y") {
    return verb.slice(0, -1) + "ing";
  } else {
    return verb.split(" ")[1] + "ing";
  }
}

const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
console.log(presentContinuous(randomVerb.english));
