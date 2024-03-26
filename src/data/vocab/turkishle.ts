const a2u4a = [
  { english: "to forgive", turkish: "affetmek", pos: "v" },
  { english: "to fall in love", turkish: "aşık olmak", pos: "v" },
  { english: "to shame", turkish: "ayıplamak", pos: "v" },
  { english: "to be punished", turkish: "ceza almak", pos: "v" },
  { english: "to punish", turkish: "ceza vermek", pos: "v" },
  { english: "to meet", turkish: "görüşmek", pos: "v" },
  { english: "to show", turkish: "göstermek", pos: "v" },
  { english: "to let know", turkish: "haber vermek", pos: "v" },
  { english: "to break someone's heart", turkish: "kalbini kırmak", pos: "v" },
  { english: "to be crossed", turkish: "küsmek", pos: "v" },
  { english: "to apologize", turkish: "özür dilemek", pos: "v" },
  { english: "to be surprised", turkish: "şaşırmak", pos: "v" },
  { english: "to upset", turkish: "üzmek", pos: "v" },
  { english: "to lie", turkish: "yalan söylemek", pos: "v" },
  { english: "to spread", turkish: "yaymak", pos: "v" },
  { english: "to settle down", turkish: "yerleşmek", pos: "v" },
  { english: "to spend time", turkish: "zaman geçirmek", pos: "v" },
  { english: "to harm", turkish: "zarar vermek", pos: "v" },
  { english: "to ridicule", turkish: "dalga geçmek", pos: "v" },
  { english: "shame", turkish: "ayıp", pos: "n" },
  { english: "gossip", turkish: "dedikodu", pos: "n" },
  { english: "secret", turkish: "sır", pos: "n" },
  { english: "whisper", turkish: "fısıltı", pos: "n" },
  { english: "mystery", turkish: "gizem", pos: "n" },
  { english: "privacy", turkish: "gizlilik", pos: "n" },
  { english: "slander", turkish: "iftira", pos: "n" },
  { english: "hint", turkish: "ipucu", pos: "n" },
  { english: "liar", turkish: "yalancı", pos: "n" },
  { english: "honesty", turkish: "dürüst", pos: "n" },
  { english: "real", turkish: "gerçek", pos: "n" },
  { english: "fake", turkish: "sahte", pos: "n" },
  { english: "without sitting/in haste", turkish: "ayaküstü", pos: "adv" },
  { english: "without a purpose", turkish: "boş boş", pos: "adv" },
  { english: "allegedly", turkish: "güya", pos: "adv" },
  { english: "apparently", turkish: "meğer", pos: "adv" },
  { english: "supposedly", turkish: "sözde", pos: "adv" },
  { english: "by mistake", turkish: "yanlışlıkla", pos: "adv" },
  { english: "restroom", turkish: "tuvalet", pos: "n" },
  { english: "tidy one's hair", turkish: "saçını düzeltmek", pos: "v" },
  { english: "to correct", turkish: "düzeltmek", pos: "v" },
  { english: "meanwhile", turkish: "bu sırada", pos: "adv" },
  { english: "to shout", turkish: "bağırmak", pos: "v" },
  { english: "to dismiss", turkish: "kovmak", pos: "v" },
  { english: "to wear a wig", turkish: "peruk takmak", pos: "v" },
  { english: "to go bald", turkish: "kel olmak", pos: "v" },
  { english: "I wonder", turkish: "acaba", pos: "adv" },
  { english: "bald", turkish: "saçsız", pos: "adj" },
  { english: "culprit", turkish: "suçlu", pos: "n" },
  { english: "other", turkish: "diğer", pos: "adj" },
  { english: "event", turkish: "olay", pos: "n" },
  { english: "value", turkish: "değer", pos: "n" },
];

const a2u4b = [
  { english: "pregnant", turkish: "hamile", pos: "adj" },
  { english: "series", turkish: "dizi", pos: "n" },
  { english: "leading role", turkish: "başrol", pos: "n" },
  { english: "award", turkish: "ödül", pos: "n" },
  { english: "drums", turkish: "bateri", pos: "n" },
  { english: "listener", turkish: "dinleyici", pos: "n" },
  { english: "musical instrument", turkish: "müzik aleti", pos: "n" },
  { english: "instrumental music", turkish: "enstrümantal müzik", pos: "n" },
  { english: "electronic music", turkish: "elektronik müzik", pos: "n" },
  { english: "guitar", turkish: "gitar", pos: "n" },
  { english: "chant", turkish: "ilahi", pos: "n" },
  { english: "audience", turkish: "izleyici", pos: "n" },
  { english: "violin", turkish: "keman", pos: "n" },
  { english: "classical music", turkish: "klasik müzik", pos: "n" },
  { english: "concert", turkish: "konser", pos: "n" },
  { english: "paparazzi", turkish: "magazin", pos: "n" },
  { english: "melody", turkish: "melodi", pos: "n" },
  { english: "metal music", turkish: "metal müzik", pos: "n" },
  { english: "music", turkish: "müzik", pos: "n" },
  { english: "music genre", turkish: "müzik türü", pos: "n" },
  { english: "musician", turkish: "müzisyen", pos: "n" },
  { english: "actor", turkish: "oyuncu", pos: "n" },
  { english: "private life", turkish: "özel hayat", pos: "n" },
  { english: "piano", turkish: "piyano", pos: "n" },
  { english: "stage", turkish: "sahne", pos: "n" },
  { english: "art", turkish: "sanat", pos: "n" },
  { english: "artist", turkish: "sanatçı", pos: "n" },
  { english: "songwriter", turkish: "söz yazarı", pos: "n" },
  { english: "song", turkish: "şarkı", pos: "n" },
  { english: "singer", turkish: "şarkıcı", pos: "n" },
  { english: "single", turkish: "tekli", pos: "n" },
  { english: "play", turkish: "tiyatro oyunu", pos: "n" },
  { english: "Turkish folk music", turkish: "halk müziği", pos: "n" },
  { english: "famous", turkish: "ünlü", pos: "adj" },
  { english: "star", turkish: "yıldız", pos: "n" },
  { english: "to release an album", turkish: "albüm çıkarmak", pos: "v" },
  { english: "to debut", turkish: "çıkış yapmak", pos: "v" },
  { english: "to give a concert", turkish: "konser vermek", pos: "v" },
  { english: "to write lyrics", turkish: "söz yazmak", pos: "v" },
  { english: "to release a song", turkish: "şarkı çıkarmak", pos: "v" },
  { english: "scissors", turkish: "makas", pos: "n" },
  { english: "common characteristic", turkish: "ortak özellik", pos: "n" },
  { english: "left-handed", turkish: "solak", pos: "adj" },
  { english: "wired", turkish: "telli", pos: "adj" },
  { english: "dominant hand", turkish: "baskın el", pos: "n" },
  { english: "optional", turkish: "seçenek", pos: "adj" },
  { english: "wire", turkish: "tel", pos: "n" },
  { english: "only", turkish: "yalnızca", pos: "adv" },
  { english: "guess", turkish: "tahmin", pos: "n" },
  { english: "famous", turkish: "meşhur", pos: "adj" },
];