//  for loop 

// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// console.log(i);


// for(let i=0;i<=10;i++)
// {
//     const element=i;
//     if(element==5)
//     {
//         console.log(" 5 is best Number");
//     }
//     console.log(element);
// }


// for(let i=0;i<=10;i++)
// {
//     console.log(`outer loop value: ${i}`);
//     for(let j=0;j<=10;j++)
//     {
//         // console.log(`Inner loop value: ${j} and inner loop ${i}`);
//         console.log(i+'*'+j+`=`+i*j);

//     }
// }


let myArray=["flash","batman","superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue key word
// for(let i=1;i<=20;i++)
// {
//     if(i==5)
//     {
//         console.log("detected 5");
//         break;//after condition out of the loop 
//     }
//     console.log(`Value of i is ${i}`);
// }


for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("detected 5");
        continue; // only one condition is skip and other is continued 
    }
    console.log(`Value of i is ${i}`);
}