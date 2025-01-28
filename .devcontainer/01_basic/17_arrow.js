
// we can use this keyword in the object 
// const user={
//     username:"Nrupesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);

//     }
// }
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

// we cannot use this in the function 
// function chai()
// {
//     let username="nrupesh";
//     console.log(this.username);
// }
// chai();

// const chai=function(){
//     let username="nrupesh";
//    console.log(this.username);

// }
// chai();//output-undefined
// const chai=()=>{
//     let username="nrupesh";
//     console.log(this);
// }
// chai();
//  const addTwo=(num1,num2)=>{
//     return num1+num2;// when curley braces are there we have to return the function 

// }
// const result=addTwo(3,4);
// console.log(result);
const addTwo=(num1,num2)=>(num1+num2)//when parenthesis no return keyword
console.log(addTwo(4,5));