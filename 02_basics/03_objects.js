//  singleton
//  object.create

//  object literals

const mySym = Symbol("key1")

const JsUser = {name: "Yogesh", "full name": "Yogesh Saraswat", [mySym]: "mykey1", age: 18, location: "Jaipur", email: "yogesh@gmail.com", isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"]
}
//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser["full name"]);
//  console.log(typeof [JsUser.mySym]);
//  console.log(JsUser[mySym]);

JsUser.email = "yogesh1444@gmail.com"
//  Object.freeze(JsUser)
JsUser.email = "yogesh1555@gmail.com"
//  console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


