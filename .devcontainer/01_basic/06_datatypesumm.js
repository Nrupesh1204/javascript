//  primitive type is called as call by value
//JavaScript is a dynamically typed language
// 7 type
/*
string,number,Boolean ,NULL,undefined,symbol,bigint
*/
// reference type is called as Non primitive type
//array,object,function
const score=100;
const scorevalue=100.3;
const isloggedIn=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);//false
// Reference (Non-primitive)
// Array,Objects,Functions
const heros =["shaktiman","naagraj","doga"];
let myobj={
    name:"Nrupesh",
    age:21,
}
 const myfunction=function(){
     console.log("hello world");
}
myfunction();
console.log(typeof(heros));