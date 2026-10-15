'use strict';

const array = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 'cat', true, 0, 'dog', 42, false, 'sun',
];

const types = { number: 0, string: 0, boolean: 0 };
for (const item of array) {
  types[typeof item]++;
}
console.dir(types);

const countTypesInArray = (array) => {
  const result = {};
  for (const item of array) {
    const type = typeof item;
    if (!result[type]) result[type] = 0;
    result[type]++;
  }
  return result;
};

console.dir(countTypesInArray(array));

module.exports = { countTypesInArray };
