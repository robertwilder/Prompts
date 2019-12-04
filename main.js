alert("Hello World")
//. prompts allow the js to take user input 

let userInput;
// ES6 arrow functions - why did they replace normal function calls
// Withdrawl, Deposit, Balence, Exit
let pinAttempt
let pin = 1234
let balance = 1000


const changepin = () => {
    userInput = prompt("What would you like to change the pin too?")
    console.log(userInput)
    pin = userInput
    alert ("your new pin is " + pin)
}


const deposit = () => {
    userInput = prompt("(multiples of 5 only")
    if (userInput %5 == 0){
    balance = balance + parseInt(userInput)
        alert (`Your new balence is ` + balance)
}
    else {
        alert ("Please use a Multiple of 5")
    }
}

const otheramount = () => {
    userInput = prompt("What amount would you like to withdraw (multiples of 10 only)")
    
    if (userInput >= balance){
        alert("Insufficient Funds")
    }
    else if (userInput %10 == 0){
    balance = balance - userInput
    alert("Balance is " + balance)
    }
    else{
    alert ("Please select a multiple of 10")
    otheramount()
    }
} 
const withdraw = () => {
    userInput = prompt("\n1. 10 \n2. 20 \n3. 30 \n4. 40 \n5. 50 \n6. Other amount")
    console.log( userInput)
    if (userInput == 1){
        balance = balance - 10
        alert (`your remaining balence is ${balance} please wait for cash`)
    }
    else if (userInput == 2){
        balance = balance - 20
        alert(`your remaining balence is ${balance} please wait for cash`)
    }
    else if (userInput == 3){
        balance = balance - 30
        alert(`your remaining balence is ${balance} please wait for cash`)
    }
    else if (userInput == 4){
        balance = balance - 40
        alert(`your remaining balence is ${balance} please wait for cash`)
    }
    else if (userInput == 5){
        balance = balance - 50
        alert(`your remaining balence is ${balance} please wait for cash`)
    }
    else if (userInput == 6){
        otheramount()
    }
    else if (userInput >= balance){
        alert("Insufficient Funds")
    }
}

const whatWouldYouLikeToDo = () => {
    alert("You have made it.")
    userInput = prompt("What would you like to do? \n1. Withdraw \n2. Deposit \n3. Change Pin \n4. Exit ")
    console.log( userInput)
    if (userInput == 1) {
        alert("How much would you like to witdraw?")
        withdraw()
    }
    else if (userInput == 2) {
        alert("How much would you like to Deposit?")
        deposit()
    }
    else if (userInput == 3){
        alert("what would you like to change to pin to?")
        changepin()
}
    else { 
        alert("Bye Bye")
    }
}

const pininput = () => {
    console.log("Hello")
    userInput = prompt("Please Enter your pin")
    console.log(userInput)
    if(pin == userInput) {
        alert("Correct Pin.")
        whatWouldYouLikeToDo()
    }
    else {
        alert("Incorrect Pin, Please try again")
        pininput()
    }
}
pininput()
