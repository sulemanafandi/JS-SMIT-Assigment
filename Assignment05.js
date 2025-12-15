// ! Assignment 05

// ? chapter 17-20
// Question 1
let multiDimensionalArray = [[], [], []];
// Question 2
let multiDimensionalArray2 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
// Question 3
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}
document.write("<br>");
// Question 4
let tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
let tableLength = parseInt(prompt("Enter length of multiplication table:"));
document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length " + tableLength + "<br>");
for (let i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}
document.write("<br>");
// Question 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (let i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}
document.write("<br>");
// Question 6
document.write("Counting:<br>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}   
document.write("<br><br>");
document.write("Reverse counting:<br>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br><br>");
document.write("Even:<br>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br><br>");
document.write("Odd:<br>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br><br>");
document.write("Series:<br>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br><br>");
// Question 7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput.toLowerCase()) {
        document.write(userInput + " is available at index " + i + " in our bakery.<br><br>");
        found = true;
        break;
    }
}
if (!found) {
    document.write("We are sorry. " + userInput + " is not available in our bakery.<br><br>");
}
// Question 8
let numbers = [24, 53, 78, 91, 12];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
document.write("Largest number is: " + largest + "<br><br>");   
// Question 9
let numbers2 = [24, 53, 78, 91, 12];
let smallest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] < smallest) {
        smallest = numbers2[i];
    }
}
document.write("Smallest number is: " + smallest + "<br><br>");
// Question 10
for (let i = 1; i <= 20; i++) {
    document.write(i * 5 + ", ");
}