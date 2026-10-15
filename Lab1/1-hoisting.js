'use strict';

/* eslint-disable no-var, no-use-before-define */

const fn = () => {
  console.log(a);
  var a = 10;
  console.log(sum(2, 3));
  function sum(x, y) {
    return x + y;
  }
};

fn();

module.exports = { fn };
