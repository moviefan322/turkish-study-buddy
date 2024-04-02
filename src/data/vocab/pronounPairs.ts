const randomHeSheOrIt = () => {
  const oneToThree = Math.floor(Math.random() * 3);
  return ["he", "she", "it"][oneToThree];
};

export const pronounPairs = [
  {
    english: "I",
    turkish: "Ben",
  },
  {
    english: "you",
    turkish: "Sen",
  },
  {
    english: "s/he/it",
    turkish: "O",
  },
  {
    english: "we",
    turkish: "Biz",
  },
  {
    english: "you (f)",
    turkish: "Siz",
  },
  {
    english: "they",
    turkish: "Onlar",
  },
];

export const returnRandomPronounPair = () => {
  const randomIndex = Math.floor(Math.random() * pronounPairs.length);
  const randomPronoun = { ...pronounPairs[randomIndex] }; // Shallow copy of the selected object
  if (randomPronoun.english === "s/he/it") {
    randomPronoun.english = randomHeSheOrIt();
  }
  return randomPronoun;
};
