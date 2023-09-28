function getFormvalue() {
    //Write your code here
const form = document.getElementById("form1");

    // Get the values of the first name and last name fields
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    // Display the values using alert
    alert( firstName + " " + lastName);
    
    // Prevent the default form submission
    event.preventDefault();
}
