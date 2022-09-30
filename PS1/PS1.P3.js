// first function is to pass a string in and fragment on the character 'c'.
// the second expression should replace all of the 'a' with 'A'
// RETURN: the original string, the modified string, the total number of As in the modified string
// and the overall length of the modified string.

const string = "supercalifragilisticexpialidocious"

// this function calls the string and decorator function
const changeString = (str,dec) => dec(str)

// this is the first helper function that splits the string at c
let helper1 = changeString(string, str => str.split(/(?=[c])/g))

// this is the second helper function that return requested print states and replaces a with A
let helper2 = changeString(string,str => {
    return {
        originalString:str,
        modifiedString:str.replace(/a/g,"A"),
        numberReplaced: str.match(/a/g).length,
        length: str.length
    }
})

//calling both helper functions
console.log(helper1)
console.log(helper2)



// Notes:
// another way of splitting
// str.replace(/c/g, "*c").split('*');
// this will replace c with *c and then we are asking it to split on the *.

// wen you automatically destructer an array, whatever is passed in will be broken doen
// (ie) p2a = ([left,operator,right]) === this will take whatever string "4+2"
// you pass in a automatically break it down to represent the same structure.