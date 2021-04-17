//додаткова робота

let num = 266219;

//Розбивка числа на масив
let splitNum = num.toString().split("");
console.log(splitNum);

//Множення кожного числа мfcbdf
let multiplication = splitNum.reduce(function (a, b) {
  return a * b;
});
console.log(multiplication);

//Даний результат приводимо до 3 степені
let power = multiplication ** 3;
console.log(power);

//Вивелення перших двух значень результатат з попередьоїзадачі
console.log(power.toString().substr(0, 2));
//
