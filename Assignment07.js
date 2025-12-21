// !Assignment 07

// ? chapter 26-30

// Question 1
let positiveInteger = parseFloat(prompt("Enter a positive integer:"));
document.write("Number: " + positiveInteger + "<br>");
document.write("Round off value: " + Math.round(positiveInteger) + "<br>");
document.write("Floor value: " + Math.floor(positiveInteger) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br>");

// Question 2
let negativeFloating = parseFloat(prompt("Enter a negative floating-point number:"));
document.write("Number: " + negativeFloating + "<br>");
document.write("Round off value: " + Math.round(negativeFloating) + "<br>");
document.write("Floor value: " + Math.floor(negativeFloating) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeFloating) + "<br>");

// Question 3
let absoluteValue = parseFloat(prompt("Enter a number to find its absolute value:"));
document.write("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue) + "<br>");

// Question 4
let diceRoll = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceRoll + "<br>");

// Question 5
let coinFlip = Math.floor(Math.random() * 2) + 1;
if (coinFlip === 1) {
    document.write(coinFlip + "<br>Random coin value: Heads<br>");
}
else {
    document.write(coinFlip + "<br>Random coin value: Tails<br>");
}

// Question 6
let randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber + "<br>");

// Question 7
let userWeight = prompt("Enter your weight in kilograms (e.g., 70, 70.5, 70kgs):");
let weightInKg = parseFloat(userWeight);
document.write("The weight of user is " + weightInKg + " kilograms<br>");

// Question 8
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));
if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the secret number.");
}
else {
    alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}