
const score = document.getElementById('score');
const scoreLimit = document.getElementById('limit-score');
const operand = document.getElementById('operand');
const operator = document.getElementById('operator');
const answer = document.getElementById('solve-it');

const arrOperation = ['*', '+', '-'];

let points = 0;
const userAns = answer.value;

// Problem random numbers
let randOperand = Math.floor(Math.random() * 10) + 1; 
let randOperator = Math.floor(Math.random() * 10 ) + 1;
let operationSelect = Math.floor(Math.random() * arrOperation.length);

const correctAns = ans(randOperand, randOperator, arrOperation);

//      TEST        //
// console.log(ans(randOperand, randOperator, arrOperation));
// console.log(arrOperation);
// console.log(arrOperation[operationSelect]);
  console.log(randOperand + arrOperation[operationSelect] +  randOperator);
//  console.log(eval(randOperand + arrOperation[operationSelect] + randOperator));

// function 
function ans(operand, operator, operation) {
    return eval(operand + operation[operationSelect] + operator);
}

if(userAns == correctAns) {
    points++;
}

// score limit 
if(score == scoreLimit) {
    alert('Finish');
}

// EventListener
answer.addEventListener('keyup', e => {
    if(e.keyCode === 13) {
        console.log('enter');
        const answer = parseInt(e.target.value);
  
        if(answer === correctAns) {
            console.log('correct');
        }
    }
})


// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function(event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });