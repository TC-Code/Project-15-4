// Exercise 1.
const a = "Hello";
const b = "World";
function hello() {
  console.log(`${a} ${b}`);
}
hello();

// Exercise 2.
const multiply = (x = 1, y = 1) => x * y;
console.log(multiply(4));

// Exercise 3.
const average = (...args) =>
  args.reduce((c, d) => {
    return c + d / args.length;
  }, 0);
average(12, 2, 9, 77);

// Exercise 4.
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// Exercise 5.
const array = [1, 4, "Iwona", false, "Nowak"];
const [, , firstName, , lastName] = array;
console.log(`${firstName} ${lastName}`);
