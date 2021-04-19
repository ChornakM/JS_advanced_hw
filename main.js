function hwFunction(start) {
  if (typeof start !== "string") {
    alert("Введите пожалуйста данные правильноon");
    return;
  }
  start = start.trim();
  return start.length > 30 ? start.slice(0, 30) + "..." : start;
}

console.log(hwFunction("uuuuuuthruuuuuuuuu uuuuuuuuudduuuuu"));

//я це в гуглi знайшов тыльки в мене trim чомусь непрацюэ, може я його не правильно присвоїв? хоча я читав що він убирає пробіли
