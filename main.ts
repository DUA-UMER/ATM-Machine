import inquirer from "inquirer"

let myBalance = 10000;
let myPin = 1234;

console.log("welcome to DUA-UMER ATM machine");

let pinAnswer = await inquirer.prompt([
        { 
                name : "pin",
              type : "number",
              message : "Enter your pin code:"
        }
    
])
if(pinAnswer.pin === myPin){

    console.log("correct pin code!!!");
    //console.log(`current Account balance is ${myBalance}`);

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw amount", "check balance"]
        }
    ])

    if(operationAns.operation === "withdraw amount"){
      let amountAns = await inquirer.prompt([
        {
        
            name: "amount",
            type: "number",
             message: "Enter the amount to withdraw:",
        }
   ])
   
   if(amountAns.amount > myBalance){
       console.log("Insufficient Balance");
   }
   else{
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} withdraw successfully`);
    console.log(`your remaining balance is: ${myBalance}`);
       }
    }
else if (operationAns.operation === "check balance"){
    console.log(`your account balance is: ${myBalance}`);
   }
}
else{
    console.log("pin is incorrect please try again!");
}
