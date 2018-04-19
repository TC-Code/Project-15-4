// Zadanie 1.
const a = "Hello";
const b = "World";
function hello() {
    console.log(`${a} ${b}`)
};
hello();

// Zadanie 2.
const multiply = (x = 1, y = 1) => x * y;
console.log(multiply(4));

//Zadanie 3.
const average = (...args) => console.log(args.reduce((c, d) => c + d)/args.length);
average(24, 3, 33, 4, 45);

// Zadanie 4.
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// Zadanie 5.
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstName, , lastName] = array;
console.log(`${firstName} ${lastName}`);