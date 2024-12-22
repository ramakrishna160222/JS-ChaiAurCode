// Primitive Data Types

// 7 types : String , Number ,Boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue= 0.3
const isLoggedIn = false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);

const bigNumber = 343534662454453455325654n





//Reference Type - Non-Primitive

//Array,objects,Functions
const heros=["shaktiman","naagraj","doga"];
let myObj={
    name : "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("HelloWorld");
    
}

console.log(typeof heros)