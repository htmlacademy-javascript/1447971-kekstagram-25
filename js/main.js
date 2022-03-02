//Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Функция для проверки максимальной длины строки

function getLength(description, length) {
  return description.length <= length;
}

getLength('Текстовый комментарий', 140);

const MESSAGE_ARRAY = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAME_ARRAY = ['Александр', 'Дмитрий', 'Пётр', 'Анна', 'Мария', 'Константин', 'Ирина', 'Анастасия'];
const DESCRIPTION_NUMBER = 25;

//массив случайной длины из значений, значения не повторяются
function getListElements(counter) {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    const newElem = i;
    newArray.push(newElem);
  }
  return newArray;
}

const ID_ARRAY = getListElements(25);
const AVATAR_ARRAY = getListElements(6);

//даёт одно значение из массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


function getUrl(array) {
  let url = '';
  const rand = Math.floor(Math.random() * array.length);
  url = `photos/${array[rand]}.jpg`;
  return url;
}

function getAvatar(array) {
  let avatar = '';
  const rand = Math.floor(Math.random() * array.length);
  avatar = `img/avatar-${array[rand]}.svg`;
  return avatar;
}

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

//Сохраняла код ниже (Array.from...) в константу DESCRIPTION_OF_PHOTO, но ESlint всё время ругается,
//что она не используется, но никуда её вывести нельзя, потому что снова начинает ругаться
Array.from({
  length: DESCRIPTION_NUMBER
}, CREATE_DESCRIPTION);
