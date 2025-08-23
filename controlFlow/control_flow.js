/*
Summary

Using conditional statements and control flow, you can direct how a program behaves based on different situations or criteria, allowing for decision-making and defining specific pathways within the code.

1. Variables declaration:

    Set up a HTML file linked to a JavaScript file in a folder named "controlFlow."
    Create variables for userRole, accessLevel, isLoggedIn, userMessage, userType, userCategory, isAuthenticated, and authenticationStatus.

2. Implementing control flow:

    Use if…else statements to assign access levels based on user roles.
    Implement nested if…else statements to customize messages based on login status and user roles.
    Utilize a switch statement to categorize users based on their type.

3. Ternary operator for authentication:

    Use a ternary operator to determine the authentication status.
    Depending on the value of isAuthenticated, set the authenticationStatus as "Authenticated" or "Not authenticated."
*/



// Defining variables and if else statement for userRole and accessLevel
let userRole = "admin";
let accessLevel;

// Will check if userRole is "admin" or something else
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


// Defining variables and nested if…else statementd for isLoggedIn and userMessage
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// Defining variables and switch statement for userType and userCategory
let userType = "susbscriber"
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Use ternary operator for isAuthenticated and authenticationStatus
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);


// Practice task

/*
1 . Suppose an organization arranges a "Dietary Services" program to provide diets to its employees and customers, based on a person's weight and day-to-day routine. You need to create an authorization-based code to provide access to people based on their roles in organization, such as employees, enrolled members for "Dietary Services," and subscribers.

*/

let membershipStatus = "employee";
let serviceAccess;

switch (membershipStatus) {
    case "employee":
        serviceAccess = "Dietary Services";
        break;
    case "enrolled member":
        serviceAccess = "Dietary Services and one-on-one interaction with a dietician"
    case "subscriber":
        serviceAccess = "Partial access to facilitate Dietary Services only";
        break;
    case "non-suscriber":
        serviceAccess = "Need to enroll or at least subscribe first to avail this facility"
    default:
        serviceAccess = "Unknown";
}

/*
You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.
*/

console.log("Servive Access:", serviceAccess);