import {getRandomArrayElement} from './util.js';
import {getRandomPositiveInteger} from './util.js';
import {getUrl} from './create-data.js';
import {getAvatar} from './create-data.js';
import {getListElements} from './util.js';

const MESSAGE_ARRAY = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAME_ARRAY = ['Александр', 'Дмитрий', 'Пётр', 'Анна', 'Мария', 'Константин', 'Ирина', 'Анастасия'];
const DESCRIPTION_NUMBER = 25;

const ID_ARRAY = getListElements(25);
const AVATAR_ARRAY = getListElements(6);

const createDescription = () => ({
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

const createDescriptions = () => Array.from({
  length: DESCRIPTION_NUMBER
}, createDescription);

export {createDescriptions};
