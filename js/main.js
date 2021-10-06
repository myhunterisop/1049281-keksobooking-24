const getRandomIntFromRange = (from, to) => {
  if (from < 0 || to < 0) {
    throw new Error('Введите положительные числа');
  }

  if (to < from) {
    throw new Error(`Возможно, вы имели в виду от ${to} до ${from}?`);
  }

  if (to === from) {
    throw new Error('Введите корректный диапазон.');
  }

  return Math.floor(Math.random() * (to - from + 1)) + from; // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

getRandomIntFromRange(0, 100);

const getRandomFloatIntFromRange = (min, max, float = 0) => {
  const rand = min + Math.random() * (max + 1 - min); //https://learn.javascript.ru/task/random-int-min-max
  return Number(rand.toFixed(float));
};

getRandomFloatIntFromRange(0, 100, 6);
