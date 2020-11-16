
const score = document.getElementById('score');
const scoreLimit = document.getElementById('limit-score');
const operand = document.getElementById('operand');
const operator = document.getElementById('operator');
const answer = document.getElementById('solve-it');
const operation = document.getElementById('operation');

const arrOperation = ['*', '/', '+', '-'];


let points = 0;
let limit = 10;
const userAns = answer.value;

// Problem random numbers
let randOperand;
let randOperator;
let operationSelect;

// correct answer for the problem
let correctAns

// UI //
getValues();
problem(); 
scoreLimit.value = limit;

// function 
function calcOperation(operand, operator, operation) {
    
    // The index of divide is 1
    if(operationSelect == 1) {
         console.log(eval(operand + operation[operationSelect] + operator).toFixed(2));
         return eval(operand + operation[operationSelect] + operator).toFixed(2);

    } else {
        return eval(operand + operation[operationSelect] + operator).toFixed(2);
    }
   
}

// generates random number
function problem() {
    operand.innerText = randOperand;
    operator.innerText = randOperator;
    operation.innerText = arrOperation[operationSelect];
}
function getValues() {
    randOperand = randNumber();
    randOperator = randNumber()
    operationSelect = Math.floor(Math.random() * arrOperation.length);
    correctAns = calcOperation(randOperand, randOperator, arrOperation);
}
function randNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// EventListener
answer.addEventListener('keyup', e => {

    if(e.keyCode === 13) {
        const userAnswer = e.target.value;
  
        // if answer is correct or wrong
        if(parseFloat(userAnswer) == correctAns) {
            console.log('Answer: ');
            console.log(userAnswer);

            answer.classList.remove('incorrect');
            getValues();
            problem();
            answer.value = '';

            points++;
            score.innerText = points;
        } else {
            console.log('Answer ');
            console.log(userAnswer);
            answer.classList.add('incorrect');
        }

         // tracks if test is finish
         if (parseInt(scoreLimit.value) === parseInt(score.textContent)) {
             alert('Finish');

             getValues();
             problem();
             answer.value = '';
             points = 0;
         }
    }
});
