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


const getRandomFloatIntFromRange = (min, max, float = 0) => {
  const rand = min + Math.random() * (max + 1 - min); //https://learn.javascript.ru/task/random-int-min-max
  return Number(rand.toFixed(float));
};

const getAvatarId = (number) => {
  if (String(number).length === 1) {
    number = `0${number}`;
  }
  return number;
};

const OFFER_TYPES_ARR = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_ARR = ['12:00', '13:00', '14:00'];

const getSingleRandomItemFromArr = (arr) => arr[~~(Math.random() * arr.length)];

const FEATURES_ARR = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
const OFFER_PHOTO_ARR = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getRandomItemsFromArr = (arr) => {
  const RESULT = [];
  const MAX_LENGTH = arr.length;
  const NEW_ARRAY_LENGTH = getRandomIntFromRange(1, MAX_LENGTH);

  for (let index = 0; index < NEW_ARRAY_LENGTH; index++) {
    const INDEX_OF_EL = getRandomIntFromRange(0, MAX_LENGTH - 1);
    const EL = arr[INDEX_OF_EL];

    if (!RESULT.includes(EL)) {
      RESULT.push(EL);
    }
  }
  return RESULT;
};

const LOCATION_LAT = getRandomFloatIntFromRange(35.65000, 35.70000, 5);
const LOCATION_LNG = getRandomFloatIntFromRange(139.70000, 139.80000, 5);

const AD_TITLES_ARR = ['Объявление №1', 'Объявление №2', 'Объявление №3', 'Объявление №4', 'Объявление №5', 'Объявление №6', 'Объявление №7', 'Объявление №8', 'Объявление №9', 'Объявление №10'];

const AD_DESCRIPTIONS_ARR = ['Евроремонт', 'Прекрасный вид из окна', 'Хорошее соотношение цена / качество', 'Историческая часть города', 'Метро рядом'];

const NUMBER_OF_AD = 10;

const AD = () => ({
  autor: {
    avatar: `img/avatars/user${getAvatarId(getRandomIntFromRange(1, 10))}.png`,
  },
  offer: {
    title: getSingleRandomItemFromArr(AD_TITLES_ARR),
    address: String(`${LOCATION_LAT}, ${LOCATION_LNG}`),
    price: getRandomIntFromRange(1, 50000),
    type: getSingleRandomItemFromArr(OFFER_TYPES_ARR),
    rooms: getRandomIntFromRange(1, 4),
    guests: getRandomIntFromRange(1, 8),
    checkin: getSingleRandomItemFromArr(CHECK_ARR),
    checkout: getSingleRandomItemFromArr(CHECK_ARR),
    features: getRandomItemsFromArr(FEATURES_ARR),
    description: getRandomItemsFromArr(AD_DESCRIPTIONS_ARR),
    photos: getRandomItemsFromArr(OFFER_PHOTO_ARR),
  },
  location: {
    lat: LOCATION_LAT,
    lng: LOCATION_LNG,
  },
});

const ALL_ADS = Array.from({ length: NUMBER_OF_AD }, AD);
console.log(ALL_ADS);
