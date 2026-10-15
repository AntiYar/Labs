'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Marcus' };
  obj1.name = 'Julius';
  obj2.name = 'Julius';
  obj2 = { name: 'Octavian' };
  console.log(obj1.name, obj2.name);
};

module.exports = { fn };
