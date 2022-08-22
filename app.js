// B. STRINGS
let firstVariable = "Hello World"
firstVariable = 8975;

let secondVariable = firstVariable

secondVariable = "stringy"
console.log(firstVariable)

let yourName="Daren"
console.log(`Hello, my name is ${yourName}`)


// C. BOOLEANS
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(c - b === a); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

  // D. The Farm
  let animal = "goose"
  if (animal === "cow") {
    console.log('mooooo')
  }
  else {
    console.log ("Hey! You're not a cow.")
  }
  