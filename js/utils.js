const getRandomPositiveInteger = (from, to) => {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Number(Math.floor(result));
};

const getRandomPositiveFloat = (from, to, digits = 1) => {
  const lower = Math.min(Math.abs(from), Math.abs(to));
  const upper = Math.max(Math.abs(from), Math.abs(to));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digits));
};

const getAvatarId = (number) => {
  if (String(number).length === 1) {
    number = `0${number}`;
  }
  return number;
};

const getSingleRandomElement = (items) => items[getRandomPositiveInteger(0, items.length - 1)];

const getRandomItems = (items) => {
  const result = [];
  const maxLength = items.length;
  const itemsCount = getRandomPositiveInteger(1, maxLength);

  for (let index = 0; index < itemsCount; index++) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = items[indexOfEl];

    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
};

const getLocation = () => ({
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
});

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getAvatarId,
  getSingleRandomElement,
  getRandomItems,
  getLocation
};
