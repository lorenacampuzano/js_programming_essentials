/*
Summary

1. Setting up the environment: HTML code includes three <div> to showcase employee information based on user-triggered actions without the page dynamically reloading when clicking any buttons.

2. Defining variables and functions: The map method stores employees' details in the variable totalEmployees, which shows details in the <div> element (with the help of an ID) displays employee information on the webpage while the reduce method iterates through each employee and accumulates their salaries to calculate the total.

3. Checking the output: git add, git commit, and git push commands update changes into your Scope_Lab folder; GitHub repository for proper code management.
*/

// Defining variables and functions
const employees = [
     // Practice task: 2. For this, include one more key value pair for employees array of object inside each object as shown in given screenshot (specialization).
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:"JavaScript" },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:"Excel" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: "SAS" },
    //... More employee records can be added here
  ];

// Function to display all employees
// The map method iterates through each employee in the employees array. For each employee, it constructs a string template literal <p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>, encapsulated within <p> tags, to represent employee details.
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// The reduce method iterates through each employee and accumulates their salaries to calculate the total. The initial value of the accumulator (acc) is 0.
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// This code filters the employees array using the filter array method, isolating and collecting employees whose department property matches 'HR' into a new array named hrEmployees.
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// This code uses the find method to locate an employee in the employees array whose ID matches the provided employee ID, storing the found employee object in the foundEmployee variable.
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

 /*
Practice task

1. In this practice task, you need to perform a functionality in which information can be fetched on the basis of employee's speciaization as well.

4. Next, create a JavaScript function to display the details of employees who have specialization in JavaScript. You can refer to the findEmployeeById function in the JavaScript code of this lab for guidance.

 */

function findSpecialization(specialization){
    const foundEmployee = employees.find(employee => employee.specialization === specialization);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this specialization';
    }
}