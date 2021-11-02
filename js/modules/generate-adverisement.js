import {
  OFFER_TITLES,
  OFFER_SECRIPTIONS,
  OFFER_TYPES,
  OFFER_CHECK_IN_OUT,
  OFFER_FEATURES,
  OFFER_PHOTOS
} from '../data.js';

import {
  getRandomPositiveInteger,
  getAvatarId,
  getSingleRandomElement,
  getRandomItems,
  getLocation
} from '../utils.js';

const generateAdvertisement = () => ({
  autor: {
    avatar: `img/avatars/user${getAvatarId(getRandomPositiveInteger(1, 10))}.png`,
  },
  offer: {
    title: getSingleRandomElement(OFFER_TITLES),
    address: Object.values(getLocation()).join(', '),
    price: getRandomPositiveInteger(1, 50000),
    type: getSingleRandomElement(OFFER_TYPES),
    rooms: getRandomPositiveInteger(1, 4),
    guests: getRandomPositiveInteger(1, 8),
    checkin: getSingleRandomElement(OFFER_CHECK_IN_OUT),
    checkout: getSingleRandomElement(OFFER_CHECK_IN_OUT),
    features: getRandomItems(OFFER_FEATURES),
    description: getRandomItems(OFFER_SECRIPTIONS),
    photos: getRandomItems(OFFER_PHOTOS),
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

export default getAdvertisements;
