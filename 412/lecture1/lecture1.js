// this is from lecture 1 it makes a button and text box on a webpage

// <!DOCTYPE html>
// <html lang = "en">
//     <head>
//     <meta charset="UTF-8">
//     <title>TITLE</title>
// <script>
//     function changeText() {
//     message = prompt('Enter message');
//     document.getElementById('p1').innerHTML =
//     document.getElementById('i2').value;
//     console.log('Changed message to ${document.getElementByID('i2').value');
//     )
//
// }





    // NOTES:
//-----------------------------------------------------------------------------------------------------------------
// 2 scopes: there is file and function scope
// let and const naming works as private and public variables,,, so it really just depends on where in the functions
// you define it.
// -----
// constant vs let
// constant  --- never wanting it to change,,,has to stay constant
// let ---- this can change



    // Example (2) -----------------------------------------
    // creating a loop with a variable
    var foo; //hoisting  (file scope)
    for (counter = 0; counter < 5; counter++)
    {
        foo = 42 + counter;
        console.log('foo: ${foo}');
    }

    console.log('foo: ${foo}');
    // -------------------------------------------------


// line 6 alter:
// counter will only be recognized inside of the loop and nowhere else because of the "let" keyword
for (let counter = 0; counter < 5; counter++){
}

    // Example (3) -----------------------------------------

    if ( 1 == '1'){
        console.log('Equal');
    }
    else{
        console.log('Not Equal');
    }
    // ------------------------------------------------------

// this will return as equal because although it may not technically be true, it is because javascript is directly
// connected to a running webpage so, returns true since this would cause the page to crash. ==== DUCK TYPING

// === to actually compares if something is alike (type)
// == compares the values (ascii values)
// = assignment



    // Example (4) -----------------------------------------

    if ( 1 == '1'){
        console.log('Equal');
    }
    else{
        console.log('Not Equal');
    }
    // different way of writing what is above
    (1 == "1") ? console.log('Equal') : console.log('Not equal');

    // OR

    console
    // ------------------------------------------------------

// should return equal