function hwFunction(start) {
  if (!isNaN(start)) {
    alert("Введите пожалуйста данные правильноon");
    return;
  }
  start = start.trim();
  return start.length > 30 ? start.slice(0, 30) + "..." : start;
}

console.log(hwFunction(1));
