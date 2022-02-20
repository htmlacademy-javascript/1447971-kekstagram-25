//Функция, возвращающая случайное целое число из переданного диапазона включительно
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  //ESlint на github выдаёт ошибку, что нельзя использовать console, поэтому закомментировала,
  //я не знаю, куда ещё можно ошибку вывести

  // if (max < min || min === max || min < 0) {
  //   console.log(`Диапазон может быть только положительный, минимум должен быть от 0, максимум должен быть больше минимума`);
  // }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(9, 11);

//Эту функцию не брала с сайта, написала сама.
//Функция для проверки максимальной длины строки

function getLength (description, length) {
  return description.length <= length ? true : false;
}

getLength('Текстовый комментарий', 140);
