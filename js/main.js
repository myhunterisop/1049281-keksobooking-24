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

const offerTypesArr = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const offerCheckInOutArr = ['12:00', '13:00', '14:00'];

const getSingleRandomItemFromArr = (arr) => arr[~~(Math.random() * arr.length)];

const offerFeaturesArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator'];
const offerPhotosArr = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getRandomItemsFromArr = (arr) => {
  const result = [];
  const maxLength = arr.length;
  const newArrayLength = getRandomPositiveInteger(1, maxLength);

  for (let index = 0; index < newArrayLength; index++) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = arr[indexOfEl];

    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
};

const locationLat = getRandomPositiveFloat(35.65000, 35.70000, 5);
const locationLng = getRandomPositiveFloat(139.70000, 139.80000, 5);

const offerTitlesArr = ['Объявление №1', 'Объявление №2', 'Объявление №3', 'Объявление №4', 'Объявление №5', 'Объявление №6', 'Объявление №7', 'Объявление №8', 'Объявление №9', 'Объявление №10'];

const offerDescriptionsArr = ['Евроремонт', 'Прекрасный вид из окна', 'Хорошее соотношение цена / качество', 'Историческая часть города', 'Метро рядом'];

const numberOfAdvertisement = 10;

const advertisement = () => ({
  autor: {
    avatar: `img/avatars/user${getAvatarId(getRandomPositiveInteger(1, 10))}.png`,
  },
  offer: {
    title: getSingleRandomItemFromArr(offerTitlesArr),
    address: String(`${locationLat}, ${locationLng}`),
    price: getRandomPositiveInteger(1, 50000),
    type: getSingleRandomItemFromArr(offerTypesArr),
    rooms: getRandomPositiveInteger(1, 4),
    guests: getRandomPositiveInteger(1, 8),
    checkin: getSingleRandomItemFromArr(offerCheckInOutArr),
    checkout: getSingleRandomItemFromArr(offerCheckInOutArr),
    features: getRandomItemsFromArr(offerFeaturesArr),
    description: getRandomItemsFromArr(offerDescriptionsArr),
    photos: getRandomItemsFromArr(offerPhotosArr),
  },
  location: {
    lat: locationLat,
    lng: locationLng,
  },
});

const advertisementArr = Array.from({ length: numberOfAdvertisement }, advertisement);

advertisementArr();
