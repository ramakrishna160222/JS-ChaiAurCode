// singleton

//object literals

//Object.create
const mySym = Symbol("key1")

const JsUser={
    name: "hitesh",
    "full name": "hitesh choudary",
    [mySym] : "myKey1",
    age: 18,
    location: "Jaipur",
    email : "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email="hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JsUser");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2());
