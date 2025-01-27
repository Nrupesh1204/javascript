// learning function in javascript

//function defination
function sayMyname(){
    console.log("N");
    console.log("R");
    console.log("U");
    console.log("P");
    console.log("E");
    console.log("S");
    console.log("H");
    
    
    }
    // sayMyname();//function calling
    // function addTwoNumbers(Number1,Number2){//parameters
    //     console.log(Number1+Number2);
    
    // }
    //  const result=addTwoNumbers(3,4);//arguments
    //  console.log("Result",result);
    
    //  function addTwoNumbers(Number1,Number2){//parameters
    //  let result=Number1+Number2;
    //  return result;
    
    // }
    // const result=addTwoNumbers(3,5);
    // console.log("Result",result);
    
    function loginInUser(username){
        if(username===undefined){
            console.log("please entered the user name");
    return ;
    
        }
    return `${username} just logged in `;
    }
    console.log(loginInUser("Nrupesh"));
    console.log(loginInUser());//undefined just logged in 