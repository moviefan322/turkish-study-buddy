import { numbers } from "./numbers";
import { daysOfTheWeek } from "./daysOfWeek";
import { months } from "./months";

const randomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const randomDay = randomItem(daysOfTheWeek);
const randomMonth = randomItem(months);
const randomNumber = randomItem(numbers);

export const timeAdverbsPast = [
  { english: "yesterday", turkish: "dün", pos: "adv" },
  { english: "last week", turkish: "geçen hafta", pos: "adv" },
  { english: "last month", turkish: "geçen ay", pos: "adv" },
  { english: "last year", turkish: "geçen yıl", pos: "adv" },
  { english: "last night", turkish: "dün gece", pos: "adv" },
  { english: "last summer", turkish: "geçen yaz", pos: "adv" },
  { english: "last winter", turkish: "geçen kış", pos: "adv" },
  { english: "last spring", turkish: "geçen bahar", pos: "adv" },
  { english: "last fall", turkish: "geçen sonbahar", pos: "adv" },
  { english: "last time", turkish: "geçen sefer", pos: "adv" },
  { english: `last ${randomDay.english}`, turkish: `geçcen ${randomDay.turkish}`, pos: "adv" },
  { english: "two days ago", turkish: "iki gün önce", pos: "adv" },
  { english: "two weeks ago", turkish: "iki hafta önce", pos: "adv" },
  { english: "two months ago", turkish: "iki ay önce", pos: "adv" },
  { english: "two years ago", turkish: "iki yıl önce", pos: "adv" },
  { english: "two nights ago", turkish: "iki gece önce", pos: "adv" },
  { english: "two summers ago", turkish: "iki yaz önce", pos: "adv" },
  { english: "two hours ago", turkish: "iki saat önce", pos: "adv" },
  { english: "two minutes ago", turkish: "iki dakika önce", pos: "adv" },
  { english: "two seconds ago", turkish: "iki saniye önce", pos: "adv" },
  { english: "yesterday evening", turkish: "dün akşam", pos: "adv" },
  { english: "yesterday morning", turkish: "dün sabah", pos: "adv" },
  { english: "yesterday afternoon", turkish: "dün öğleden sonra", pos: "adv" },
  { english: "yesterday night", turkish: "dün gece", pos: "adv" },
  { english: "yesterday at this time", turkish: "dün bu saat" },
];
