
let a=300;// declaration of globally variable a
if(true)
{
 let a=10;
 console.log("inner",a);
const b=20;
// var c=30;
}


console.log(a);// it is there inside the scope 
// console.log(b);it is there inside the scope 
// console.log(c);//the value of var can be in the outside of the scope 
