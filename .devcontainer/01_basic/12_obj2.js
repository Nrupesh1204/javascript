// const tinderUser=new Object();//singleton object
const tinderUser= {};//non singleton object1

tinderUser.id="123abc";
tinderUser.name="Nrupesh";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nrupesh",
            lastname:"kamble",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

// merging of the object
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);//combination of two array
const obj3={...obj1,...obj2};// using spread operator
// console.log(obj3);
const users=[
    {
        id:1,
        email:"N@gmail.com"
    },
    {
         id:1,
        email:"N@gmail.com"
    },
    {
        id:1,
        email:"N@gmail.com"
    },


];
users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));