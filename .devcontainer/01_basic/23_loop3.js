// for of loop 


const arr=[1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }


const greetings="hello world";
for(const greet of greetings){
    console.log(greet);
}

// Maps is collection of key value pairs 

const map=new Map();
map.set('IN',"india");
map.set('USA',"United State of America");
map.set('Fr',"France");
// console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

// on object for of loop 
// const myObject={
//     game1:'NFS',
//     game2:'spiderman',
// }
// for(const [key,value] of myObject)  for(const [key,value] of myObject)
                                             //  ^

                               // TypeError: myObject is not iterable
// {
//     console.log(key,':-',value);

// }
const myObject={
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"

};

// for in loop for object 

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

// In array
const programming=["js","rb","py","java","cpp"];
for (const key in programming) {
    // console.log(programming[key]);
}
const coding=["js","ruby","java","python","cpp"];
coding.forEach( function (item){
    console.log(item);
})

coding.forEach(  (item)=>{
    console.log(item);
})