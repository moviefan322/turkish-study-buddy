export const futureNominalAffirmativeEng = (pronoun: string, adjective: string) => {
  return `${pronoun} will be ${adjective}`;
};

export const futureNominalNegativeEng = (pronoun: string, adjective: string) => {
  return `${pronoun} won't be ${adjective}`;
};

export const futureNominalInterrogativeEng = (pronoun: string, adjective: string) => {
  return `will ${pronoun} be ${adjective}?`;
};

export const futureNominalNegativeInterrogativeEng = (pronoun: string, adjective: string) => {
  return `won't ${pronoun} be ${adjective}?`;
};

export const futureNominalEnglishMaster = (pronoun: string, adjective: string, mood: string = "standardMood") => {
  switch (mood) {
    case "standardMood":
      return futureNominalAffirmativeEng(pronoun, adjective);
    case "negative":
      return futureNominalNegativeEng(pronoun, adjective);
    case "interrogative":
      return futureNominalInterrogativeEng(pronoun, adjective);
    case "negativeInterrogative":
      return futureNominalNegativeInterrogativeEng(pronoun, adjective);
  }
};

export const affirmativeFutureEnglish = (pronoun: string, verb: string) => {
  return `${pronoun} will ${verb}`;
};

export const negativeFutureEnglish = (pronoun: string, verb: string) => {
  return `${pronoun} will not ${verb}`;
};

export const interrogativeFutureEnglish = (pronoun: string, verb: string) => {
  return `will ${pronoun} ${verb}?`;
};

export const interrogativeNegativeFutureEnglish = (pronoun: string, verb: string) => {
  return `won't ${pronoun} ${verb}?`;
};

export const englishFutureTenseMaster = (pronoun: string, verbInfinitive: string, mood: string = "standardMood") => {
  console.log(pronoun, verbInfinitive, mood);
  const verb = verbInfinitive.slice(3);
  switch (mood) {
    case "standardMood":
      console.log("standard!");
      return affirmativeFutureEnglish(pronoun, verb);
    case "negative":
      return negativeFutureEnglish(pronoun, verb);
    case "interrogative":
      return interrogativeFutureEnglish(pronoun, verb);
    case "negativeInterrogative":
      return interrogativeNegativeFutureEnglish(pronoun, verb);
    default:
      return "Invalid mood.";
  }
};
