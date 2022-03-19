import {getRandomArrayElement} from './util.js';
import {getRandomPositiveInteger} from './util.js';
import {MESSAGE_ARRAY} from './basic-data.js';
import {NAME_ARRAY} from './basic-data.js';
import {DESCRIPTION_NUMBER} from './basic-data.js';
import {ID_ARRAY} from './basic-data.js';
import {AVATAR_ARRAY} from './basic-data.js';
import {getUrl} from './create-data.js';
import {getAvatar} from './create-data.js';

const CREATE_DESCRIPTION = () => ({
  id: getRandomArrayElement(ID_ARRAY),
  url: getUrl(ID_ARRAY),
  description: 'Красивая фотография',
  likes: getRandomPositiveInteger(15, 200),
  comments: [{
    id: getRandomPositiveInteger(1, 1000),
    avatar: getAvatar(AVATAR_ARRAY),
    message: getRandomArrayElement(MESSAGE_ARRAY),
    name: getRandomArrayElement(NAME_ARRAY)
  }]
});

const DESCRIPTION_OF_PHOTO = () => Array.from({
  length: DESCRIPTION_NUMBER
}, CREATE_DESCRIPTION);

export {DESCRIPTION_OF_PHOTO};
