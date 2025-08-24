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