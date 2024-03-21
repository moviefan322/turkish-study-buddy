import { numbers } from "./numbers";
import { daysOfTheWeek } from "./daysOfWeek";
import { months } from "./months";

const randomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const randomDay = randomItem(daysOfTheWeek);
const randomMonth = randomItem(months);
const randomNumber = randomItem(numbers);

export const timeAdverbsPast = [
  { english: "yesterday", turkish: "dün" },
  { english: "last week", turkish: "geçen hafta" },
  { english: "last month", turkish: "geçen ay" },
  { english: "last year", turkish: "geçen yıl" },
  { english: "last night", turkish: "dün gece" },
  { english: "last summer", turkish: "geçen yaz" },
  { english: "last winter", turkish: "geçen kış" },
  { english: "last spring", turkish: "geçen bahar" },
  { english: "last fall", turkish: "geçen sonbahar" },
  { english: "last time", turkish: "geçen sefer" },
  { english: `last ${randomDay.english}`, turkish: `geçcen ${randomDay.turkish}` },
  { english: "two days ago", turkish: "iki gün önce" },
  { english: "two weeks ago", turkish: "iki hafta önce" },
  { english: "two months ago", turkish: "iki ay önce" },
  { english: "two years ago", turkish: "iki yıl önce" },
  { english: "two nights ago", turkish: "iki gece önce" },
  { english: "two summers ago", turkish: "iki yaz önce" },
  { english: "two hours ago", turkish: "iki saat önce" },
  { english: "two minutes ago", turkish: "iki dakika önce" },
  { english: "two seconds ago", turkish: "iki saniye önce" },
  { english: "yesterday evening", turkish: "dün akşam" },
  { english: "yesterday morning", turkish: "dün sabah" },
  { english: "yesterday afternoon", turkish: "dün öğleden sonra" },
  { english: "yesterday night", turkish: "dün gece" },
  { english: "yesterday at this time", turkish: "dün bu saat"}
];
