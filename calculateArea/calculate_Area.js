let length;
let width;

function calculateArea(){
    // document.getElementById ('length'): This part of the code retrieves an HTML element by its ID, specifically searching for an element with the ID 'length'.

    // .value: After accessing the HTML element, .value is used to retrieve the value entered into the input field associated with that element. For instance, if a user enters '5' into the input field for length, .value retrieves the string '5'.


    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`; //The backticks and ${} notation allow for the inclusion of JavaScript variables within a string (using template literals)
}

/*
Practice task

2. Include the following in the JavaScript file:

    * Create a function which will accept these amount entered by users as a parameter.
    * Then write the logic to calculate the total amount spent on the grocery purchase.
    * Call this function in such a way so that after clicking on the button, it shows the total amount for the grocery purchase.
*/

let grocery1;
let grocery2;
let grocery3;

function groceryTracker(){
    
    grocery1 = parseFloat(document.getElementById('grocery1').value)
    grocery2 = parseFloat(document.getElementById('grocery2').value)
    grocery3 = parseFloat(document.getElementById('grocery3').value)

    let total_amount = grocery1 + grocery2 + grocery3

    document.getElementById('result2').innerText = `The total amount is: $${total_amount}`
}