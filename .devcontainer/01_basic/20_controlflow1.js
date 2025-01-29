// if
// const isUserloggedIn=true;
// const temperature=41;
// if(temperature===41){
//     console.log("Equal to the 41");

// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("excute");

// if(2=="2"){
//     console.log("executed");
// }
// <,>,<=,>=,==,!=,===
// if(2==="2"){
//     console.log("executed");
// }

// const score =200;
// if(score>100)
// {
//     const power="fly";
    
// }
// console.log(`User power: ${power}`);
const balance=1000;
// if(balance>500) console.log("test");//Implicit scope

// if(balance<500)
// {
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else if(balance===1000)
// {
//     console.log(`balance is equal to ${balance} `);

// }


const userLoggedIn=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;
const debitCard=true;
if(userLoggedIn && debitCard)
{
    console.log("Allow to buy courses");

}
if(loggedInFromGoogle ||loggedInFromEmail)
{
    console.log("user logged in ");
}

// Switch statements

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("default case match");//except default all the code is getting executed
        break;
}


// truthy values and the falsey values
const userEmail="Nrup@.gmail";
if(userEmail)
{
    console.log("Got user Email");
}
else{
    console.log("don't have user email");
    
}

//  Falsy values
// false ,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values
// true,"0",'false'," ",[],{},function(){}//empty function 
 


// of Array
//  let UserEmail=[];
// if(UserEmail.length==0)
// {
//     console.log("array is empty");
// }

//  OF Object 
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("object is empty");
// }


// Nullish Coalescing Operator(??):null undefined

let val1;
// val1=5 ?? 10;//5
val1=null ?? 10;//10
console.log(val1);
// Nullish Coalescing Operator and the ternary operatot both are different 

// Ternary Operator
// condition ? true :false;
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

