// ! Assignment 02

// ? chapter 01

// Question 1
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum );
// Question 2

document.write("<br>");
document.write("<br>");
let sub = num - num2;
document.write("<br> Subtraction of " + num + " and " + num2 + " is " + sub );
let mul = num * num2;
document.write("<br> Multiplication of " + num + " and " + num2 + " is " + mul );
let div = num / num2;
document.write("<br> Division of " + num + " and " + num2 + " is " + div );
let mod = num % num2;
document.write("<br> Modulus of " + num + " and " + num2 + " is " + mod );

// Question 3
document.write("<br>");
document.write("<br>");
let value;
document.write("Value after variable declaration is: " + value);
value = 5;
document.write("<br> Initial value: " + value);
value++;
document.write("<br> Value after increment is: " + value);
value += 7;
document.write("<br> Value after addition is: " + value);
value--;
document.write("<br> Value after decrement is: " + value);
let remainder = value % 3;
document.write("<br> The remainder is: " + remainder);


// Question 4
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("<br>");
document.write("<br>");
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// Question 5
document.write("<br>");
document.write("<br>");
let table = 4;
for(let i = 1; i <= 10; i++){
    let result = table * i;
    document.write(table + " x " + i + " = " + result + "<br>");
}

// Question 6
document.write("<br>");
document.write("<br>");
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F" + "<br>");
let fahrenheit2 = 70;
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");


// // Question 7
document.write("<br>");
document.write("<br>");
let item1Price = 650;
let item2Price = 100;
let item1Quantity = 3;
let item2Quantity = 7;
let shippingCharges = 100;
let totalCostItems = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quantity + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quantity + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCostItems);

// Question 8
document.write("<br>");
document.write("<br>");
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");


// Question 9
document.write("<br>");
document.write("<br>");
let usDollar = 10;
let saudiRiyal = 25;
let pkrFromUsd = usDollar * 104.80;
let pkrFromSar = saudiRiyal * 28;
let totalPkr = pkrFromUsd + pkrFromSar;
document.write("Total Currency in PKR: " + totalPkr);


// Question 10
document.write("<br>");
document.write("<br>");
let num = 5;
let results = ((num + 5) * 10) / 2;
document.write("The final result is: " + results);


// Question 11
document.write("<br>");
document.write("<br>");
let currentYear = 2023;
let birthYear = 2004;
let age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age);

// Question 12
document.write("<br>");
document.write("<br>");

let radius = 20;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);

// Question 13
document.write("<br>");
document.write("<br>");
let snack = "Chocolate Chip";
let currentAge = 19;
let maxAge = 65;
let amountPerDay = 3;
let totalNeeded = (maxAge - currentAge) * amountPerDay;
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge);


// ? chapter 6-09

// Question 1
let v = 10;
document.write("The value of a is: " + v + "<br>");
document.write("...................................." + "<br><br>");
document.write("The value of ++a is: " + (++v) + "<br>");
document.write("Now the value of a is: " + v + "<br><br>");
document.write("The value of a++ is: " + (v++) + "<br>");
document.write("Now the value of a is: " + v + "<br><br>");
document.write("The value of --a is: " + (--v) + "<br>");
document.write("Now the value of a is: " + v + "<br><br>");
document.write("The value of a-- is: " + (v--) + "<br>");
document.write("Now the value of a is: " + v + "<br>");

// Question 2
document.write("<br>");
document.write("<br>");
let a = 2, b = 1;
let result = --a - --b + ++b + b--;

document.write("The result is: " + result);

// Question 3
document.write("<br>");
document.write("<br>");
let name = prompt("Enter your name:");
let greet = `Hello, ${name}! Welcome to our website.`;

alert(greet);
console.log(greet);


// // Question 4
document.write("<br>");
document.write("<br>");
let number = prompt("Enter a number to show its multiplication table:");
if(number === "" || number === null){
    number = 5;
} else { 
    number = parseInt(number);
}

document.write("Multiplication Table of " + number + "<br><br>");
for(let i = 1; i <= 10; i++){
    let result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}

// Question 5
document.write("<br>");
document.write("<br>");
let subject1 = prompt("Enter name of subject 1:");
let subject2 = prompt("Enter name of subject 2:");
let subject3 = prompt("Enter name of subject 3:");
let totalMarksPerSubject = 100;

let marks1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":"));
let marks2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":"));
let marks3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":"));

let totalObtainedMarks = marks1 + marks2 + marks3;
let overallTotalMarks = totalMarksPerSubject * 3;
let overallPercentage = (totalObtainedMarks / overallTotalMarks) * 100;
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + overallTotalMarks + "</th><th>" + totalObtainedMarks + "</th><th>" + overallPercentage.toFixed(2) + "%</th></tr>");
document.write("</table>");