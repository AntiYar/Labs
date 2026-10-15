'use strict';

const generateKey = (length, characters) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * characters.length);
    result += characters[position];
  }
  return result;
};

module.exports = { generateKey };
