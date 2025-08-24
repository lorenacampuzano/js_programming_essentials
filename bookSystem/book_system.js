/*
Summary

1. Book management interface: The code sets up a simple web interface for managing books. It includes input fields for book name, author name, book description, and the number of pages. Users can add books using the "Add Book" button.

2. Dynamic display of books: Upon adding books, the showbooks() function dynamically generates HTML content to display the list of added books. It formats and structures the book details using JavaScript's map() function to create HTML elements for each book, including buttons for editing and deleting individual book entries.

3. Book handling functionality: The code provides functionalities for editing and deleting book entries. The editbook() function allows users to edit book details by populating the input fields with the selected book’s information. Meanwhile, the deletebook() function removes a book entry from the displayed list when the corresponding delete button is clicked. Both editing and deletion actions are handled by updating the book list dynamically using the showbooks() function, which refreshes the displayed list after any change.
*/

let books = [];

//Data collection and validation: The function retrieves the values entered by the user in the HTML input fields for book name, author name, book description, and number of pages. It uses document.getElementById('elementId').value to access these values. The code then checks if all fields have been filled (bookName, authorName, bookDescription) and ensures that pagesNumber is a valid number (using !isNaN(pagesNumber)). If any field is empty or if pagesNumber is not a valid number, an alert prompts the user to fill in all fields correctly.
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>`
        // Practice task: 2. You need to create a delete button as shown below. For this you need to create a deletebook function, which can include the below given partial code.
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// editbook function allows users to edit a book’s details by pre-filling the form with its existing data.
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
}

// This code clears the book details by assigning empty value to HTML element using ID's.
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

/*
Practice task

1. In this practice task, you need to create a dynamic button at the time when user-entered details will be shown as output after clicking on Add Book button.

3. The deletebook function will be called when the user clicks on the delete button. This function will also delete the book's detail in the management system for that particular ID.
*/

function deleteBook(index){
    books.splice(index,1);
    showbooks();
}