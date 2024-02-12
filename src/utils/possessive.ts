export const possessivePronoun = (pronoun: string) => {
  switch (pronoun.toLowerCase()) {
    case "ben":
      return "benim";
    case "sen":
      return "senin";
    case "o":
      return "onun";
    case "biz":
      return "bizim";
    case "siz":
      return "sizin";
    case "onlar":
      return "onların";
  }
};
