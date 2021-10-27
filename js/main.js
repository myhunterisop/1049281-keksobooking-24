const offerTitles = [
  'Объявление №1',
  'Объявление №2',
  'Объявление №3',
  'Объявление №4',
  'Объявление №5',
  'Объявление №6',
  'Объявление №7',
  'Объявление №8',
  'Объявление №9',
  'Объявление №10',
];

const offerDescriptions = [
  'Евроремонт',
  'Прекрасный вид из окна',
  'Хорошее соотношение цена / качество',
  'Историческая часть города',
  'Метро рядом',
];

const offerTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const offerCheckInOut = [
  '12:00',
  '13:00',
  '14:00',
];

const offerFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
];

const offerPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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

const generateAdvertisement = () => ({
  autor: {
    avatar: `img/avatars/user${getAvatarId(getRandomPositiveInteger(1, 10))}.png`,
  },
  offer: {
    title: getSingleRandomElement(offerTitles),
    address: Object.values(getLocation()).join(', '),
    price: getRandomPositiveInteger(1, 50000),
    type: getSingleRandomElement(offerTypes),
    rooms: getRandomPositiveInteger(1, 4),
    guests: getRandomPositiveInteger(1, 8),
    checkin: getSingleRandomElement(offerCheckInOut),
    checkout: getSingleRandomElement(offerCheckInOut),
    features: getRandomItems(offerFeatures),
    description: getRandomItems(offerDescriptions),
    photos: getRandomItems(offerPhotos),
  },
  location: getLocation(),
});

const getAdvertisements = () => {
  const result = [];

  for (let index = 0; index < 10; index++) {
    result.push(generateAdvertisement());
  }
  return result;
};

// eslint-disable-next-line no-console
console.log(getAdvertisements());
