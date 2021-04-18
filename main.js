//додаткова робта 3
let lang;
let days;
let days2;
//
//
//if
//
if ((lang = "ru")) {
  days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
} else if ((lаng = "en")) {
  days = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
}
alert(days);
//
//
//switch-case
switch (lang) {
  case "ru":
    days2 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    break;
  case "en":
    days2 = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
    break;
}
alert(days2);
//
//
//многомерный массив
let days3 = {
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
};
alert(days3[lang]);
//
//
//
//
//
//
//
//
//переменная namePerson
let namePerson = prompt("Ваше имя");
let result;
result =
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Максим"
    ? "Преподаватель"
    : "Cтудент";
console.log(result);
