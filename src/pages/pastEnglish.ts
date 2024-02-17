export const irregularVerbs = new Map([
  ["be", "was/were"],
  ["beat", "beat"],
  ["become", "became"],
  ["begin", "began"],
  ["bend", "bent"],
  ["bet", "bet"],
  ["bite", "bit"],
  ["blow", "blew"],
  ["break", "broke"],
  ["bring", "brought"],
  ["build", "built"],
  ["buy", "bought"],
  ["catch", "caught"],
  ["choose", "chose"],
  ["come", "came"],
  ["cost", "cost"],
  ["cut", "cut"],
  ["do", "did"],
  ["draw", "drew"],
  ["dream", "dreamt"],
  ["drink", "drank"],
  ["drive", "drove"],
  ["eat", "ate"],
  ["fall", "fell"],
  ["feel", "felt"],
  ["fight", "fought"],
  ["find", "found"],
  ["fly", "flew"],
  ["forget", "forgot"],
  ["forgive", "forgave"],
  ["freeze", "froze"],
  ["get", "got"],
  ["give", "gave"],
  ["go", "went"],
  ["grow", "grew"],
  ["have", "had"],
  ["hear", "heard"],
  ["hide", "hid"],
  ["hit", "hit"],
  ["hold", "held"],
  ["keep", "kept"],
  ["know", "knew"],
  ["lay", "laid"],
  ["lead", "led"],
  ["leave", "left"],
  ["lend", "lent"],
  ["let", "let"],
  ["lie", "lay"],
  ["light", "lit"],
  ["lose", "lost"],
  ["make", "made"],
  ["mean", "meant"],
  ["meet", "met"],
  ["pay", "paid"],
  ["put", "put"],
  ["read", "read"],
  ["ride", "rode"],
  ["ring", "rang"],
  ["rise", "rose"],
  ["run", "ran"],
  ["say", "said"],
  ["see", "saw"],
  ["sell", "sold"],
  ["send", "sent"],
  ["set", "set"],
  ["shake", "shook"],
  ["shine", "shone"],
  ["shoot", "shot"],
  ["show", "showed"],
  ["shut", "shut"],
  ["sing", "sang"],
  ["sit", "sat"],
  ["sleep", "slept"],
  ["speak", "spoke"],
  ["spend", "spent"],
  ["stand", "stood"],
  ["steal", "stole"],
  ["stick", "stuck"],
  ["strike", "struck"],
  ["swear", "swore"],
  ["sweep", "swept"],
  ["swim", "swam"],
  ["take", "took"],
  ["teach", "taught"],
  ["tear", "tore"],
  ["tell", "told"],
  ["think", "thought"],
  ["throw", "threw"],
  ["understand", "understood"],
  ["wake", "woke"],
  ["wear", "wore"],
  ["win", "won"],
  ["write", "wrote"],
]);

const secondToLastLetterIsConsonant = (word: string) => {
  const secondToLast = word[word.length - 2];
  return !["a", "e", "i", "o", "u"].includes(secondToLast);
};

export const affirmativePastEnglish = (pronoun: string, verb: string) => {
  if (verb === "be") {
    switch (pronoun.toLowerCase()) {
      case "i":
      case "he":
      case "she":
      case "it":
        return `${pronoun} was`;
      case "we":
      case "they":
      case "you":
        return `${pronoun} were`;
    }
  }
  if (irregularVerbs.has(verb)) {
    return `${pronoun} ${irregularVerbs.get(verb)}`;
  }

  let pastForm = verb;
  if (verb.endsWith("y") && secondToLastLetterIsConsonant(verb)) {
    pastForm = `${verb.slice(0, -1)}ied`;
  } else if (!verb.endsWith("e")) {
    pastForm += "ed";
  } else {
    pastForm += "d";
  }

  return `${pronoun} ${pastForm}`;
};
