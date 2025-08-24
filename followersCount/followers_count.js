/*
Summary

1. Setting Up the Environment: HTML structure with a header displaying the account holder's name (Peter Parker) and a follower count displayed as "0" within a span element.

2. Defining Variables and Functions: A button triggers the "increaseCount()" function, incrementing the follower count when clicked, updating the displayed count dynamically, and triggering alerts at 10 and 20 follower milestones.

3. Displaying Incremental Result: JavaScript functions manage the count incrementation, display of follower count on the HTML page, and the conditional display of congratulatory messages for specific follower milestones (10 and 20 followers).
*/



let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
  }

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

/*
Practice task

2. Then create one function in followers_count.js file to reset count to 0.

3. Also use alert popup box method to show alert message which will say that the Followers count has been reset.

*/

function resetCount(){
    count = 0;
    displayCount();
    alert("The followers count has been reset.") 
}