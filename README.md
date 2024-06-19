GROUP 19 MEMBERS:

Belyse NIYONSENGA

 Christian ISHIMWE
                          Event Registration Form
A Report Introduction

This report details the development of an event registration form using HTML, CSS, and JavaScript of group 19 in cohort 1. 
The form adheres to specific validation rules to ensure data integrity and user experience.

The link to the GitHub  repository of our work: https://github.com/Niyobelyse/Group19-frontend-web-dev-Event-reg-form

Approach

Structure and Design:

HTML was used to structure the form with dedicated elements for name, email, phone number, event date, and number of tickets.
CSS provided visual styling for the form layout, input fields, and error messages.

Validation and Sanitization:

JavaScript was used to handle form submission and implement validation logic.
Regular expressions were applied to validate each field based on the specified criteria:
Name: Letters and spaces only (/^[a-zA-Z\s]+$/).
Email: Valid email format (/^\S+@\S+\.\S+$/).
Phone number: Format enforced by the HTML pattern attribute ((123) 456-7890).
Event date: Valid date format enforced by the HTML input type="date" element.
Number of tickets: Between 1 and 10 (min="1" max="10" attribute and potential JavaScript validation).

Ensuring Robust Regular Expressions:

Crafting regular expressions that accurately capture valid data patterns without being overly restrictive can be challenging.
Balancing edge cases and potential variations in user input required careful consideration.

User-Friendly Error Messages:

Providing clear and informative error messages that guide users towards providing valid input was a key focus.
The error messages needed to be specific to each validation rule and avoid technical jargon.

Overcoming Challenges

Regular Expressions:

Thorough testing with various valid and invalid input scenarios helped refine the regular expressions for optimal accuracy.
Consulting online resources and documentation for regular expressions provided valuable guidance.

Error Messages:

Clear and concise error messages were crafted to address the specific validation failure directly.
Using plain language and avoiding technical terms enhanced user understanding.

Code Readability and Efficiency:

Meaningful comments were added to explain the purpose of different code sections.
Exploring the potential for modularizing validation functions into reusable components was considered for future improvements.

Conclusion

This project successfully implemented an event registration form with client-side validation using JavaScript and regular expressions. The approach ensured data integrity by validating user input while providing informative error messages for a positive user experience. The challenges encountered offered valuable learning opportunities in crafting robust regular expressions, user-friendly error messages, and maintaining clean code. Future iterations could further refine the validation logic, implement additional security measures like input sanitization, and enhance the user interface for an even more user-friendly experience.

Group Member
Date attended by member
Contribution
Belyse NIYONSENGA
19/06/2024
HTML
Ishimwe Christian
19/06/2024
CSS, README.md, and REPORTING




