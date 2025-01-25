//                 Date 
let myDate= new Date();
 console.log(myDate);//2025-01-25T03:43:47.155Z
console.log(myDate.toString());//Sat Jan 25 2025 09:13:47 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Sat Jan 25 2025
console.log(myDate.toISOString());//2025-01-25T03:45:09.719Z //International Organization for Standardization format
console.log(myDate.toJSON());//2025-01-25T03:46:38.339Z
console.log(myDate.toLocaleString());//25/1/2025, 9:26:06 am


console.log(typeof(myDate));//object
let myCreatedDate=new Date(2023,0,23);//month start from zero
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
let myTimeStamp= Date.now();
console.log(myTimeStamp);//1737777890323//mili-second
console.log(myCreatedDate.getTime());//1674412200000//mili-second
// convert into seconds
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);//2025-01-25T04:11:09.254Z
console.log(newDate.getDay());//6

newDate.toLocaleString('default',{
    weekday: "long",
    
});