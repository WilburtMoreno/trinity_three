
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

//      TEST        //
// console.log(ans(randOperand, randOperator, arrOperation));
// console.log(arrOperation);
// console.log(arrOperation[operationSelect]);
// console.log(randOperand + arrOperation[operationSelect] +  randOperator);
//   console.log(eval(randOperand + arrOperation[operationSelect] + randOperator));

// function 
function calcOperation(operand, operator, operation) {
    
    // The index of divide is 1
    if(operationSelect == 1) {
         return  console.log((eval(parseFloat(operand + operation[operationSelect] + operator)).toFixed(2)).toString());

        
    } else {
        return (eval(operand + operation[operationSelect] + operator)).toString();
    }
   
}

// 
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
    console.log('correct answer:');
    console.log(parseInt(correctAns));

    if(e.keyCode === 13) {
        const userAnswer = e.target.value;
  
        // if answer is correct or wrong
        if(userAnswer === correctAns) {
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

         if (parseInt(scoreLimit.value) === parseInt(score.textContent)) {
             alert('Finish');

             getValues();
             problem();
             answer.value = '';
             points = 0;
         }
    }
});
