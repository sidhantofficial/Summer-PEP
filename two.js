// SCOPES OF VAR, CONST, LET

{
    let x = 10;
    const y = 11;
    var z = 110;
}
// console.log(x); // THIS THROWS AN ERROR X IS NOT DEFINED
// console.log(y); // THIS THROWS AN ERROR Y IS NOT DEFINED
// console.log(z); // THIS RUNS FINE

function any(){
    var variable = 34;
}
// console.log(variable); // THROWS AN ERROR VARIABLE IS NOT DEFINED

// SO THIS MEANS THAT LET AND CONST HAVE BLOCK SCOPE
// VAR HAS FUNCTIONAL SCOPE

// WAYS TO MAKE A FUNCTION

myfun()
function myfun(){ // ONLY THIS TYPE OF FUNCTION SUPPORTS HOISTING
    console.log("executing function myfun");
}

myfunc(); // THROWS AN ERROR CANNOT ACCESS 'myfunc' BEFORE INITIALIZATION
const myfunc = function(){
    console.log("executing function myfunc");

}

myFunc(); // THROWS AN ERROR CANNOT ACCESS 'myfunc' BEFORE INITIALIZATION
const myFunc = () => {  
    console.log("executing function myFunc");
}

// console.log(new_x); // CANNOT ACCESS NEW_X BEFORE INTIALIZATION
// let new_x = 10;

console.log(new_y); // UNDEFINED
var new_y = 10;

// OPERATIONS ON ARRAY

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
// ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log(fruits);   

fruits.pop(); // THIS RETURNS THE POPPED ELEMENT "Kiwi" here
// ["Banana", "Orange", "Apple", "Mango"]


let myList = fruits.toString();

console.log(myList); //Banana,Orange,Apple,Mango 


for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

function myDisplayer(string){
    console.log(string);
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();



