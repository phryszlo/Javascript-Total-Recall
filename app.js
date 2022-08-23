// // I. Variables & Datatypes


// How do we assign a value to a variable?
// let x = 4 <-- like that
// How do we change the value of a variable?
// x = 5 <-- same thing
// How do we assign an existing variable to a new variable?
// y = x
// Remind me, what are declare, assign, and define?
//  declare: let x
//  assign: x = 4
//  define: i know of function definition, but not sure what variable definition means
// What is pseudocoding and why should you do it?
// writing out the steps of the code you will write without using strict actual syntax
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// Most of it. Say 90%.

// B. STRINGS
console.log("STRINGS")
let firstVariable = "Hello World"
firstVariable = 8975;

let secondVariable = firstVariable

secondVariable = "stringy"
console.log(firstVariable)

let yourName = "Daren"
console.log(`Hello, my name is ${yourName}`)


// C. BOOLEANS
console.log("BOOLEANS")
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
console.log("THE FARM")
let animal = "goose"
if (animal === "cow") {
  console.log('mooooo')
}
else {
  console.log("Hey! You're not a cow.")
}

// E. Driver's Ed
console.log("DRIVERS ED")
let personsAge = 60
if (personsAge >= 16) {
  console.log("Here are the keys!")
}
else {
  console.log("Sorry, you're too young")
}

// II. Loops
console.log("LOOPS")

// A. The basics
console.log("THE BASICS")
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

for (let i = 10; i <= 400; i++) {
  console.log(i)
}

for (let i = 12; i <= 4000; i += 3) {
  console.log(i)
}

// B. Get even
console.log('GET EVEN')
for (let i = 1; i <= 100; i++) {
  console.log(i % 2 === 0 ? `${i} <-- is an even number` : i)
}

// C. Give me five
console.log('GIVE ME FIVE')
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`)
  }
  if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`)
  }
}

// D. Savings account
//  1.
let bank_account =
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .reduce((sum, num) => sum += num)

console.log(bank_account)

//  2.
let nums = []
for (let i = 1; i <= 100; i++) {
  nums.push(i * 2)
}
let sum = nums.reduce((sum, num) => sum += num)
console.log(sum)


// // III. Arrays & Control flow
// //  B. Easy Does It
// //    1.
// const quotes = [
//   "The chicken didn't need a reason.",
//   "Bears also do other things in the woods.",
//   "Eats, shoots, and leaves."
// ]

// //  C. Accessing Elements
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0])

// randomThings[2] = "World"
// console.log(randomThings)

// //  D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(ourClass[2])
// ourClass[ourClass.length - 1] = "Octocat"
// ourClass.push("Cloud City")

// //  E. Mix It Up
// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon")
// myArray.shift()
// myArray.unshift("Bob Marley")
// myArray.pop()
// const returned = Array.prototype.reverse(myArray)
// // const reversed = myArray.reverse()
// console.log(myArray)
// console.log(returned)
// // it mutated and returned an empty object (?)
// //  the googs says it is a reference to the array

// //  F. Biggie Smalls
// let numbie = 999

// console.log(
//   numbie < 100 ? "little number" : "big number"
// )

// //  G. Monkey in the Middle
// numbie = 7
// if (numbie < 5) {
//   console.log("little number")
// } else if (numbie > 10) {
//   console.log("big number")
// } else {
//   console.log("monkey")
// }


// //  H. What's in Your Closet?
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ], [
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ], [
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];


// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

// kristynsCloset.splice(6, 0, "raybans")

// kristynsCloset[5] = "stained knit hat"

// const thomsOutfit = []
// thomsOutfit.push(thomsCloset[0][0])
// thomsOutfit.push(thomsCloset[1][2])
// thomsOutfit.push(thomsCloset[2][1])
// console.log(thomsOutfit)
// let outfitString = ""
// for (let i = 0; i < thomsOutfit.length; i++) {
//   outfitString += thomsOutfit[i]
//   outfitString = i === thomsOutfit.length - 2 ?
//     `${outfitString} and `
//     :
//     i === thomsOutfit.length - 1 ?
//       `${outfitString}` : `${outfitString}, `
// }

// console.log(`Thom is looking fierce in a ${outfitString}!`)

// thomsCloset[1][ thomsCloset[1].indexOf('PJs')] = 'Footie Pajamas'
// console.log(thomsCloset[1])


// // IV. Functions
// // A. printGreeting
// //  it says don't do this one
// // B. printCool
// const printCool = (name) => {
//   return `${name} is cool.`
// }
// console.log(printCool("Y'all"))

// // C. calculateCube
// const calculateCube =(num) => {
//   return Math.pow(num, 3)
// }
// console.log(calculateCube(3))

// // D. isVowel
// const isVowel = (letter) => {
//   const vowels = ['a','e','i','o','u']
//   if (vowels.indexOf(letter.toLowerCase()) >= 0) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isVowel('a'))
// console.log(isVowel('e'))
// console.log(isVowel('i'))
// console.log(isVowel('o'))
// console.log(isVowel('u'))
// console.log(isVowel('A'))
// console.log(isVowel('E'))
// console.log(isVowel('I'))
// console.log(isVowel('O'))
// console.log(isVowel('U'))
// console.log(isVowel('Z'))


// // E. getTwoLengths
// const getTwoLengths = (str1, str2) => {
//   return [str1.length, str2.length]
// }

// console.log(getTwoLengths('cheese', 'dip'))


// // F. getMultipleLengths
// const getMultipleLengths = (arr) => {
//   let lengths = []
//   arr.forEach(element => {
//     lengths.push(element.length)
//   });
//   return lengths
// }

// console.log(getMultipleLengths(['ten','twenty','thirty']))


// // G. maxOfThree
// const maxOfThree = (n1,n2,n3) => {
//   return Math.max(n1, n2, n3)
// }

// console.log(maxOfThree(65, 84, 2))
// console.log(maxOfThree(84, 84, 84))


// // H. printLongestWord
// const printLongestWord = (strings) => {
//   const args = strings.join(',')
//   let longest = ''
//   const thing = strings.forEach(element => {
//     longest = element.length > longest.length ? element : longest
//   });
//   return longest
// }

// console.log(printLongestWord(['print', 'longest', 'word', 'fractal']))


// Objects
//  A. Make a user object
// const user = {
//   name: 'bauser',
//   email: 'bauser.the.dog@dmail.net',
//   age: 11,
//   purchased : []
// }

// // B. Update the user
// user.email = 'bauser.a.dog@wmail.cc'
// user.age++

// // C. Adding keys and values
// user.location = 'detroit'

// // D. Shopaholic!
// user.purchased.push('carbohydrates')
// user.purchased.push('peace of mind')
// user.purchased.push('Merino jodhpurs')

// // E. Object-within-object
// user.friend = {
//   name: 'jerry',
//   age: 82,
//   location: 'cincinnati',
//   purchased: []
// }

// console.log(user.friend.name)
// console.log(user.friend.location)
// user.friend.age = 55
// user.friend.purchased.push("The One Ring")
// user.friend.purchased.push("A latte")
// console.log(user.friend.purchased[user.friend.purchased.length - 1])

// // F. Loops
// for (let i = 0; i < user.purchased.length; i++) {
//   console.log(user.purchased[i])
// }
// for (let i = 0; i < user.friend.purchased.length; i++) {
//   console.log(user.friend.purchased[i])
// }

// // G. Functions can operate on objects
// const updateUser = () => {
//   user.age++
//   user.name = user.name.toUpperCase()
// }

// const oldAndLoud = (person) => {
//   person.age++
//   person.name = person.name.toUpperCase()
//   return person
// }
// oldAndLoud(user)
// console.log(user)
// // console.log(oldAndLoud(user))




