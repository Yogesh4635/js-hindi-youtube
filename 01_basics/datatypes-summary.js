//  How we store the data into the memory and how we can access the data for that we have two types:
// Primitive 
// 7 types : they are call by value(String, Number, boolean, null, undefined, symbol(To make any value unique we use symbol),
//      bigint ).

// const score = 100 In javascript we dont define language so it is dynamic typed language.
const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// Reference (Non primitive)
// Array, Objects, Function

const heros = ["shaktiman", "nagraaj", "doga"]
let myObj = {
    name: "yogesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    }

    console.log(typeof name);
    