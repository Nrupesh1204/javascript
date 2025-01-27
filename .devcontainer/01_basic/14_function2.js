

// function calculateCartPrice(...num1){//Using of Rest operator in the function 
//     return num1;

// }
// console.log(calculateCartPrice(200,400,500));//output [ 200, 400, 500 ]


function calculateCartPrice(val1,val2,...num1){//Using of Rest operator in the function 
    return num1;

}
// console.log(calculateCartPrice(200,400,500,400));//[ 500, 400 ]

//Handeling the object ito the function 

const user={
    username:"Nrupesh",
    price:199,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

// handeling the array in the function 
const myNewArray=[200,400,100,600];
function returnSecondvalue(getArray)
{
    return getArray[1];
}
console.log(returnSecondvalue(myNewArray));