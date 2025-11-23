// function add(a, b) {
//   return a * b;
// }
// const area = add(12, 10);
// console.log(area);


// const multiply = function (a, b) {
//   return a * b;
// }
// console.log(multiply(20, 5));

// const subtract = (x, y) => {
//   return x - y;
// }
// console.log(subtract(23, 5));

// Test 1

function greetUser(name) {
  console.log(`Hello, ${name}! Welcome back.`);
}
greetUser("Nafee");

// Test 2

function calculateSquare(number) {
  return number * number;
}
console.log(calculateSquare(6));

// Test 3

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("Nafee", "Simanto"));

// Test 4

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return `Your BMI is ${bmi.toFixed(2)}`
}
console.log(calculateBMI(70, 1.75));


const person = {
  name: "Nafee",
  sayHi() {
    console.log(this.name);
  }
};
person.sayHi();