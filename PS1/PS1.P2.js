// because we can assume it is a string that is always the same length,
// then we can retreive the operator as follows

let expression = '2-3';
let newExpression = '(left, right)'
const left = "left ";
const right = " right";

// this helper function will gather the operator from the string and assign left and right
const evaluate = expression => left + expression[1] + right;

//calling function and printing
evaluate(expression);
console.log(`${newExpression} => ${evaluate(expression)}`)