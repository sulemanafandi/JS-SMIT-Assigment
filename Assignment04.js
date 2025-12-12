
// ! Assignment 04

 // ? chapter 14-16

// Question 1
let studentNames = [];

// Question 2
let studentNames2 = new Array();

// Question 3
let stringArray = ["apple", "banana", "cherry"];

// Question 4
let numberArray = [1, 2, 3, 4, 5];

// Question 5
let booleanArray = [true, false, true];

// Question 6   
let mixedArray = ["apple", 1, true, 3.14];

// Question 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qualifications:<br>");
for (let i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}
document.write("<br>");


// Question 8
let studentNames3 = ["Michael", "John", "Tony"];
let studentScores = [320, 230, 480];
let totalMark = 500;
for (let i = 0; i < studentNames3.length; i++) {
    let percentage = (studentScores[i] / totalMark) * 100;
    document.write("Score of " + studentNames3[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>");
}   
document.write("<br>");


// Question 9
let colorNames = ["Red", "Green", "Blue"];
document.write("Initial colors: " + colorNames.join(", ") + "<br>");
let addColorStart = prompt("Enter a color to add at the beginning:");
colorNames.unshift(addColorStart);
document.write("After adding color at the beginning: " + colorNames.join(", ") + "<br>");
let addColorEnd = prompt("Enter a color to add at the end:");
colorNames.push(addColorEnd);
document.write("After adding color at the end: " + colorNames.join(", ") + "<br>");
colorNames.unshift("Yellow", "Purple");
document.write("After adding two more colors at the beginning: " + colorNames.join(", ") + "<br>");
colorNames.shift();
document.write("After removing the first color: " + colorNames.join(", ") + "<br>");
colorNames.pop();
document.write("After removing the last color: " + colorNames.join(", ") + "<br>");
let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorToAdd = prompt("Enter the color to add:");
colorNames.splice(indexToAdd, 0, colorToAdd);
document.write("After adding color at index " + indexToAdd + ": " + colorNames.join(", ") + "<br>");
let indexToRemove = parseInt(prompt("Enter the index to remove color(s):"));
let numberOfColorsToRemove = parseInt(prompt("Enter the number of colors to remove:"));
colorNames.splice(indexToRemove, numberOfColorsToRemove);
document.write("After removing color(s) from index " + indexToRemove + ": " + colorNames.join(", ") + "<br><br>");


// Question 10
let studentScores2 = [320, 230, 480, 120];
document.write("Scores of students: " + studentScores2.join(", ") + "<br>");
studentScores2.sort(function(a, b){return a-b});
document.write("Ordered scores of students: " + studentScores2.join(", ") + "<br><br>");


// Question 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list:<br>" + cities.join(", ") + "<br>");
let selectedCities = cities.slice(2, 4);
document.write("Selected cities list:<br>" + selectedCities.join(", ") + "<br><br>");


// Question 12
let arr = ["This", "is", "my", "cat"];
document.write("Array:<br>" + arr.join(", ") + "<br>");
let joinedString = arr.join(" ");
document.write("String:<br>" + joinedString + "<br><br>");


// Question 13
let devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
document.write("Devices:<br>" + devices.join("<br>") + "<br><br>");

for (let i = devices.length - 1; i >= 0; i--) {
    document.write("Out:<br>" + devices[i] + "<br>");
}
document.write("<br>");

// Question 14
let devices2 = [];
devices2.push("Keyboard");
devices2.push("Mouse");
devices2.push("Printer");
devices2.push("Monitor");
document.write("Devices:<br>" + devices2.join("<br>") + "<br><br>");
while (devices2.length > 0) {
    let removedDevice = devices2.shift();
    document.write("Out:<br>" + removedDevice + "<br>");
}
document.write("<br>");


// Question 15
let phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];    
document.write("<select>");
for (let i = 0; i < phones.length; i++) {
    document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");
