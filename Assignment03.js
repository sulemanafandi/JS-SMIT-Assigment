// ! Assignment 03

// ? chapter 09-11

// Question 1
let city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    document.write("Welcome to the city of lights!");
} else {
    document.write("Welcome to " + city + "!");
}
document.write("<br><br>");

// Question 2
let gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir." + "<br><br>");
} else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am." + "<br><br>");
} 
else {
    document.write("Good Morning!" + "<br><br>");
}
// Question 3
let signalColor = prompt("Enter traffic signal color (red/yellow/green):");
signalColor = signalColor.toLowerCase();
if (signalColor === "red") {
    document.write("Must Stop" + "<br><br>");
}   else if (signalColor === "yellow") {
    document.write("Ready to move" + "<br><br>");
} else if (signalColor === "green") {
    document.write("Move now" + "<br><br>");
} else {
    document.write("Invalid color entered." + "<br><br>");
}
// Question 4
let fuel = parseFloat(prompt("Enter remaining fuel in car (in liters):"));
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car" + "<br><br>");
}   else {
    document.write("You have enough fuel." + "<br><br>");
}
// Question 5
let a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
let b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
let c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === materialCost + laborCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// Question 6
document.write("<br>");
document.write("<br>"); 
let subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
let totalMarks = 300;
let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
let grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br><br>");
// Question 7
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
}
else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, the correct number was " + secretNumber + ".");
}
// Question 8
let number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}
// Question 9
let numberCheck = parseInt(prompt("Enter a number to check if it's even or odd:"));
if (numberCheck % 2 === 0) {
    alert(numberCheck + " is even.");
} else {
    alert(numberCheck + " is odd.");
}
// Question 10
let temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
// Question 11
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation";
}
alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);



// ? chapter 12-13

// Question 1   
let char = prompt("Enter a character:");
if (char.length === 1) {
    let ascii = char.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        alert(char + " is an uppercase letter.");
    } else if (ascii >= 97 && ascii <= 122) {
        alert(char + " is a lowercase letter.");
    } else if (ascii >= 48 && ascii <= 57) {
        alert(char + " is a digit.");
    } else {
        alert(char + " is a special character.");
    }
} else {
    alert("Please enter a single character.");
}
// Question 2
let int1 = parseFloat(prompt("Enter the first integer:"));
let int2 = parseFloat(prompt("Enter the second integer:"));
if (int1 > int2) {
    alert("The larger number is: " + int1);
} else if (int2 > int1) {
    alert("The larger number is: " + int2);
} else {
    alert("Both numbers are equal.");
}
// Question 3
let numberCheck2 = parseFloat(prompt("Enter a number:"));   
if (numberCheck2 > 0) {
    alert(numberCheck2 + " is positive.");
}
else if (numberCheck2 < 0) {
    alert(numberCheck2 + " is negative.");
}   
else {
    alert("The number is zero.");
}
// Question 4
let vowelChar = prompt("Enter a character to check if it's a vowel:");
vowelChar = vowelChar.toLowerCase();
if (vowelChar.length === 1 && "aeiou".includes(vowelChar)) {
    alert(vowelChar + " is a vowel.");
} else {
    alert(vowelChar + " is not a vowel.");
}
// Question 5
let correctPassword = "password123";
let userPassword = prompt("Enter your password:");
if (userPassword === "") {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}   
// Question 6
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}   
alert(greeting);

// Question 7
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));
if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}   
else {
    alert("Invalid time entered.");
}
