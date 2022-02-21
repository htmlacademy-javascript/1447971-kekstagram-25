//Функция, возвращающая случайное целое число из переданного диапазона включительно
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {

  if (max < min || min === max || min < 0) {
    return -1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(9, 11);

//Эту функцию не брала с сайта, написала сама.
//Функция для проверки максимальной длины строки

function getLength(description, length) {
  return description.length <= length;
}

getLength('Текстовый комментарий', 140);
