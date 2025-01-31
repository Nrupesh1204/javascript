// const coding=["js","ruby","java","python","Cpp"];
// coding.forEach((item)=>{    //forEach loop doesnt return the value 
//     console.log(item);
// })


const myNums=[1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter((num)=>num>4)//filter operation has it condition it is an call back function   it return the value there is the constant which store the the value 
// console.log(newNums);


// const newNums=myNums.filter((num)=>{//there should be the return statement if you are writing in the scope of curley bracket 
//     return num>4
// });
// console.log(newNums);

const newNums=[];
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
// console.log(newNums);



const myNumers=[1,2,3,4,5,6,7,8,9,10];

// const no=myNumers.map((item)=>item+10);
// console.log(no);
// chaining method 

// const newNum=myNumers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);
// console.log(newNum);

const myNo=[1,2,3];
const mytotal = myNo.reduce((acc, currval) => acc + currval, 0);

console.log(mytotal);