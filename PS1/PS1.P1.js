// write a function that takes a string as its input and returns a new
// string that contains all of the letters in the original string
// but in reverse alphabeticatlly order.

const str = "supercalifragilisticexpialidocious"

// this function will reverse the string
const reverse = str => str.split("").reverse().join("");
console.log(`${reverse(str)}`);


// Notes:
// .split() = turn the string into an array
// .sort() = uses ascii values to sort it properly making sure that everything is reverse properly