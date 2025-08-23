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

