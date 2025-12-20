// !Assignment 06 Complete

// ? chapter 21-25

// Question 1
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!");

// Question 2
let favoriteMobile = prompt("Enter your favorite mobile phone model:");
document.write("My favorite phone is: " + favoriteMobile + "<br>");
document.write("Length of string: " + favoriteMobile.length + "<br>");

// Question 3
let word = "Pakistani";
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + word.indexOf('n') + "<br>");

// Question 4
let word2 = "Hello World";
document.write("String: " + word2 + "<br>");
document.write("Last index of 'l': " + word2.lastIndexOf('l') + "<br>");

// Question 5
let word3 = "Pakistani";
document.write("String: " + word3 + "<br>");
document.write("Character at index 3: " + word3.charAt(3) + "<br>");

// Question 6
let firstName2 = prompt("Enter your first name:");
let lastName2 = prompt("Enter your last name:");
let fullName2 = firstName2.concat(" ", lastName2);
alert("Hello, " + fullName2 + "!");

// Question 7
let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br>");

// Question 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write(newMessage + "<br>");

// Question 9
let stringNumber = "472";
document.write("Value: " + stringNumber + "<br>");
document.write("Type: " + typeof (stringNumber) + "<br>");
let convertedNumber = Number(stringNumber);
document.write("Value: " + convertedNumber + "<br>");
document.write("Type: " + typeof (convertedNumber) + "<br>");

// Question 10
let userInput2 = prompt("Enter some text:");
let upperCaseInput = userInput2.toUpperCase();
document.write("User input: " + userInput2 + "<br>");
document.write("Upper case: " + upperCaseInput + "<br>");

// Question 11
let userInput3 = prompt("Enter some text:");
let titleCaseInput = userInput3.charAt(0).toUpperCase() + userInput3.slice(1).toLowerCase();
document.write("User input: " + userInput3 + "<br>");
document.write("Title case: " + titleCaseInput + "<br>");

// Question 12
let num = 35.36;
let numString = num.toString().replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + numString + "<br>");

// Question 13
let username = prompt("Enter a username:");
let isValid = true;
let invalidChars = ["@", ".", ",", "!"];
for (let i = 0; i < invalidChars.length; i++) {
    if (username.includes(invalidChars[i])) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username without special characters (@, ., ,, !).");
} else {
    alert("Username is valid.");
}

// Question 14
let A2 = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
let found2 = false;
for (let i = 0; i < A2.length; i++) {
    if (A2[i].toLowerCase() === userSearch.toLowerCase()) {
        document.write(userSearch + " is available at index " + i + " in our bakery.<br>");
        found2 = true;
        break;
    }
}
if (!found2) {
    document.write("We are sorry. " + userSearch + " is not available in our bakery.<br>");
}

// Question 15
let password = prompt("Enter a password:");
let isValidPassword = true;
if (password.length < 6) {
    isValidPassword = false;
}
if (!isNaN(password.charAt(0))) {
    isValidPassword = false;
}
for (let i = 0; i < password.length; i++) {
    let charCode = password.charCodeAt(i);
    if (!((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
        isValidPassword = false;
        break;
    }
}
if (isValidPassword) {
    alert("Password is valid.");
} else {
    alert("Invalid password. Password must be at least 6 characters long, cannot start with a number, and must contain only letters and numbers.");
}

// Question 16
let university = "University of Karachi";
let chars = university.split('');
for (let i = 0; i < chars.length; i++) {
    document.write(chars[i] + "<br>");
}

// Question 17
let userInput4 = prompt("Enter some text:");
document.write("Last character of input: " + userInput4.charAt(userInput4.length - 1) + "<br>");

// Question 18
let text = "The quick brown fox jumps over the lazy dog";
let wordToCount = "the";
let count = 0;
let words = text.toLowerCase().split(' ');
for (let i = 0; i < words.length; i++) {
    if (words[i] === wordToCount) {
        count++;
    }
}
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of the word '" + wordToCount + "'.<br>");