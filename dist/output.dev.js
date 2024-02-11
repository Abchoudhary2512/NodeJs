"use strict";

var sum = function sum() {
  console.log("the sum is ".concat(2 + 3));
};

var mul = function mul() {
  console.log("the multiply is ".concat(2 * 3));
};

var measuretime = function measuretime() {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");
  console.time("mul()");
  mul();
  console.timeEnd("mul()");
};

measuretime();