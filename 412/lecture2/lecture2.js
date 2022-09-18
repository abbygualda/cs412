//example 1
function adder(left,right){
    return left + right;
}
// -----------------------------------------------------------------------------
console.log('foo is ${adder(30,12)}');

// example 2 -- shows you that you can store a function in a variable
let adder2;
adder2 = function(left, right){
    return left + right;
}
console.log('foo is ${adder2(30,12)}');
// -----------------------------------------------------------------------------

// example 3
const adder3 = function (left,right){
    return left + right;
}
console.log('foo is ${adder3(30,12)}');

// -----------------------------------------------------------------------------

// example 4 THIS IS HOW WE WRITE FUNCTION
const adder4 = (left,right) => left + right;
console.log('$adder4(30,12)}');
    // explanation:
    // we first have the parameters passed in an then we have it being sent to the function using =>

// test try on not putting any parameters
const second = _ => 4;
const first = _ => second();
console.log('First got: ${first()}');
// -----------------------------------------------------------------------------

// example 5 with 3 parameters
const adder7 = (left,right,cb) => cb(left+right);

let result = adder7(15,6,
    sum => sum*2
)
console.log(result)
// -----------------------------------------------------------------------------

// example 6
console.log('Result: ${result}, ${typeof result}');

// -----------------------------------------------------------------------------
