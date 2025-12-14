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

// function greetUser(name) {
//   console.log(`Hello, ${name}! Welcome back.`);
// }
// greetUser("Nafee");

// Test 2

// function calculateSquare(number) {
//   return number * number;
// }
// console.log(calculateSquare(6));

// Test 3

// const getFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// }
// console.log(getFullName("Nafee", "Simanto"));

// Test 4

// function calculateBMI(weight, height) {
//   const bmi = weight / (height * height);
//   return `Your BMI is ${bmi.toFixed(2)}`
// }
// console.log(calculateBMI(70, 1.75));

// Test 5

// {
//   let x = 5;
//   var y = 10;
// }
// console.log(typeof x);
// console.log(typeof y);

// Test 6

// console.log(a);
// var a = 7;

// Test 7

// console.log(b);
// let b = 15;

// Test 8

// const user = {
//   name: "Nafee",
//   show() {
//     console.log(this.name);
//   }
// };

// user.show();

// Test 9

// function testA(a, b) {
//   console.log(a + b);
// }
// testA(10, 20);

// Test 10

// function printName(name) {
//     return `Hello ${name}`;
// }

// console.log(printName("Nafee"));

// Test 11

// function outer() {
//     let count = 0;
    
//     function inner() {
//       count++;
//       return count;
//     }
//     return inner;
// }

// const counter1 = outer();
// const counter2 = outer();

// console.log(counter1());
// console.log(counter2());
// console.log(counter1());

// array things ↓

// add to start = variableName.unshift(whattoadd)
// remove from start = variableName.shift()
// add to end = variableName.push(whattoadd)
// remove from end = variableName.pop()


const names = ["Abdullah", "Rahman", "Fahim", "Kohinur"];
names.unshift("Nafee");
names.push("Nafiu");

// // for loop

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
  
// }

// smart loop
for (let name of names) {
  console.log(name);
  
}