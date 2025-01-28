// Nested function the child function can access the variable of parent function 

function one()
{
    const username="Nrupesh"
    function two(){
        const website="youtube"
        console.log(username);//Nrupesh
    }
    // console.log(website);
   //  two();


}
//one();

if(true)
{
    const username="Nrupesh";
    if(username==="Nrupesh")
    {
        const website=" youtube";
        console.log(username +  website);
    }
    // console.log(website);
}

// console.log(username);
// +++++++++++++interesting +++++++++++++
function addone(num){
    return num+1;
}
 const result=addone(5);
 console.log(result);

const addTwo=function(num){
    return num+2;
}
 const result2=addTwo(5);
 console.log(result2);