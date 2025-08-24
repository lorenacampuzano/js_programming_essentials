/*
Summary

1. Interface setup and functionality establishment: You created a web-based typing test interface using HTML and JavaScript. The HTML structure formed the groundwork for text display (inputText), user input (userInput), and a dynamic button (Start Test).

2. Test execution and result analysis: Clicking the "Start Test" button prompted users to type a predetermined text snippet in the designated input area. Upon test completion, the code swiftly calculated and displayed essential typing metrics, such as words typed, time elapsed, and words per minute (WPM), providing immediate insights into the user's typing proficiency.

3. User experience and iterative learning: You created a practical platform to practice typing skills in a controlled environment. You also created immediate feedback on typing speed and accuracy, enabling users to assess their performance, facilitating iterative learning, and improving typing proficiency.
*/

let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    
    document.getElementById("output").innerHTML = "";
    
    // Start timer
    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
}