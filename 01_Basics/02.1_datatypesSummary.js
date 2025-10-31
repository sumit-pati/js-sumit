// Premative

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 78923414567897653n



// Referance (Nim Premitive)

// Array, Objects, Functions

const heros = ["shaktman", "naagraj", "doga"];
let obj = {
    name: "Sumit",
    age: 26
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primative), Heap(Non-Premative)

let myYoutubeName = "ShopUnboxRepete"

let anotherName = myYoutubeName
anotherName = "TheLaptopShop"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "userOne@google.com",
    upi: "UserOne@ybl"
}

let userTwo = userOne

userTwo.email = "sumit@google.com"

console.log(userOne.email);
console.log(userTwo.email);
