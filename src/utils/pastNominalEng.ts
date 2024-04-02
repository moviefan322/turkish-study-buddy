export const returnConjugatedBePast = (pronoun: string) => {
  switch (pronoun.toLowerCase()) {
    case "i":
    case "he":
    case "she":
    case "it":
      return "was";
    case "we":
    case "they":
    case "you":
    case "you (f)":
      return "were";
  }
};

export const pastNominalAffirmativeEng = (pronoun: string, adjective: string) => {
  return `${pronoun} ${returnConjugatedBePast(pronoun)} ${adjective}`;
};

export const pastNominalNegativeEng = (pronoun: string, adjective: string) => {
  return `${pronoun} ${returnConjugatedBePast(pronoun)}n't ${adjective}`;
};

export const pastNominalInterrogativeEng = (pronoun: string, adjective: string) => {
  return `${returnConjugatedBePast(pronoun)} ${pronoun} ${adjective}?`;
};

export const pastNominalNegativeInterrogativeEng = (pronoun: string, adjective: string) => {
  return `${returnConjugatedBePast(pronoun)}n't ${pronoun} ${adjective}?`;
};

export const pastNominalEnglishMaster = (pronoun: string, adjective: string, mood: string = "standardMood") => {
  switch (mood) {
    case "standardMood":
      return pastNominalAffirmativeEng(pronoun, adjective);
    case "negative":
      return pastNominalNegativeEng(pronoun, adjective);
    case "interrogative":
      return pastNominalInterrogativeEng(pronoun, adjective);
    case "negativeInterrogative":
      return pastNominalNegativeInterrogativeEng(pronoun, adjective);
  }
};
