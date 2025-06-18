let x = 5;
let y = x;
console.log(x);
console.log(y);


// SPREAD OPERATOR
let arr5 = [1, 2, 3, 4];
let arr6 = [...arr5];
let arr7 = [0, ...arr6, 5, 6];

console.log(arr5);
console.log(arr6);  
console.log(arr7);

let obj1 = {
    firstName: "John",
    lastName: "Wick"
}

let obj2 = {
    ...obj1
}

console.log(obj1);
console.log(obj2);

let arr = [1, 2, 3, 4];
let age = 20;
var name = "Jack"
let obj = {
    brand: "Audi",
    model: "A6"
}

console.log(typeof(arr));
console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(obj));


