let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = document.createElement("days");
console.log(week);
let today = prompt("This day");
//
//
for (let i = 0; i < 7; i++) {
  if (week[i] == "Saturday" || week[i] == "Sunday") {
    document.write(`<p><i>${week[i]}</i></p>`);
  } else if (week[i] == today) {
    document.write(`<p><b>${week[i]}</b></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}
