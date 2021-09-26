const getRandomIntFromRange = function (from, to) {
  const result = Math.floor(Math.random() * (to - from + 1)) + from; // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  if (from < 0 || to < 0) {
    return 'Введите положительные числа.';
  }

  if (to < from) {
    `Возможно, вы имели в виду от ${to} до ${from}?`;
    return result;
  }

  if (to === from) {
    return 'Введите корректный диапазон.';
  }

  return result;
};

getRandomIntFromRange(0, 100);

function randomFloatInteger(min, max, float = 0) { //https://learn.javascript.ru/task/random-int-min-max
  const rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(float);
}

randomFloatInteger(0, 100, 6);
