// singleton is made with the constructor not with the help of literals
//object literals
// Declaration of the Symbol 
const mySyn=Symbol("key1");
const jsUser={
    name:"Nrupesh",
    "full name":"Nrupesh Kamble",//this object cannot be accesed with the help of the dot 
    [mySyn]:"myKey1",//Symbol which act like a key
    Age:21,
    location:"jaipur",
    email:"nrupesh@gmail.com",
    isLoggedIn:false,
    LastLoginCays:["Monday","saturday"],

}
// the two ways for accessing the object are givern below 
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySyn]);

// changing the values of the object
jsUser.email="Nrupesh@chatgpt.com";
// Object.freeze(jsUser);//freezing the object 

jsUser.email="Nrupesh@microsoft.com";
console.log(jsUser);

jsUser.greeting=function()
{
    console.log("Hello js it is king entering in your era ");
}

//console.log(jsUser.greeting); 
console.log(jsUser.greeting());

jsUser.greeting2=function()
{
    console.log(`Heelo Js User,${this.name}`);
}

console.log(jsUser.greeting2());