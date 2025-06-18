// DATA TYPES IN JAVASCRIPT
let age = 10;
console.log(age);

const val = 1000;
console.log(val);

// ARRAYS IN JAVASCRIPT
const cars = ["Audi", "Merc", "BMW"]
console.log(cars);

// OBJECTS IN JAVASCRIPT
const carObj = {
    "name": "Porsche 911",
    "cylinder": 6,
    "horsepower": 500,
    "0-100": "2.7sec"
}

// STRING AND SOME OPERATIONS ON STRING
let name = "Sidhant";

console.log(name.length); //7

console.log(name.charAt(1)); //i

console.log(name.slice(0, 4)) // Sidh

// FOR LOOP
for (let i = 0; i<name.length; i++){
    console.log(name[i]);
}

// function removeExtraSpaces(str) {
//   // Remove leading spaces
//   while (str[0] === ' ') {
//     str = str.slice(1);
//   }

//   // Remove trailing spaces
//   while (str[str.length - 1] === ' ') {
//     str = str.slice(0, -1);
//   }

//   // Replace multiple spaces with a single space
//   str = str.replace(/\s+/g, ' ');

//   return str;
// }

// // Example usage
// let input = "   Hello     Sidhant     how   are   you?   ";
// let cleaned = removeExtraSpaces(input);

// console.log("Original:", `"${input}"`); // "   Hello     Sidhant     how   are   you?   "
// console.log("Cleaned:", `"${cleaned}"`); // "Hello Sidhant how are you?"





