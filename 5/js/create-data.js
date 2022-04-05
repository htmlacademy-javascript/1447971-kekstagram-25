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

export {getUrl, getAvatar};
