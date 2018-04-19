"use strict";

// Zadanie 1.
var a = "Hello";
var b = "World";
function hello() {
    console.log(a + " " + b);
};
hello();

// Zadanie 2.
var multiply = function multiply() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};
console.log(multiply(4));

//Zadanie 3.
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return console.log(args.reduce(function (c, d) {
        return c + d;
    }) / args.length);
};
average(24, 3, 33, 4, 45);

// Zadanie 4.
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

// Zadanie 5.
var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = array[2],
    lastName = array[4];

console.log(firstName + " " + lastName);
