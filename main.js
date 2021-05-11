arr = ["21", "22", "55", "448", "867", "221", "472"];
for (let i = 0; i < arr.length; i++) {
  let currentElem = arr[i];
  currentElem = String(currentElem);
  if (currentElem[0] == 4 || currentElem[0] == 2) {
    console.log(currentElem);
  }
}

let n = 100;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i + " " + " Делители этого числа: 1 и " + i);
}
