/*
Summary

1. Feedback form elements: The HTML structure includes input fields for name, age, email, job, designation, a dropdown for product type selection, and a textarea for feedback submission. This comprehensive design ensures the collection of user-provided information.

2. Dynamic user information display: JavaScript function "submitFeedback()" processes user input upon button click or Enter key press, displaying entered details dynamically below the form, including name, age, email, job, designation, selected product type, and the provided feedback.

3. Visibility toggle: Initially hidden, a section below the form remains concealed until feedback submission. Upon submission, JavaScript alters its display to "block," showcasing the user's information and feedback for the selected product type.

4. Event listeners implementation: Event listeners are employed to trigger the feedback submission function, enabling user interaction via both the "Submit Feedback" button click and the Enter key press for a seamless experience.
*/

// Defining variables and function
function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    alert('Thank you for your valuable feedback')

    // Display user feedback on webpage
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    document.getElementById('userInfo').style.display = 'block';
}

const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
});
