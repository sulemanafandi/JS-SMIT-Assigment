
// !Assignment 10 
// ? Chapter 38-42

// Question 1
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
let powerResult = power(2, 3);
document.write("2 raised to 3 is: " + powerResult + "<br>");

// Question 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
let year = 2020;
let leapYearResult = isLeapYear(year);
document.write(year + " is a leap year: " + leapYearResult + "<br>");

// Question 3
function calculateTriangleArea(a, b, c) {
    let S = (a + b + c) / 2;
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
let triangleArea = calculateTriangleArea(3, 4, 5);
document.write("Area of triangle: " + triangleArea + "<br>");

// Question 4
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function calculatePercentage(marks1, marks2, marks3) {
    let totalMarks = marks1 + marks2 + marks3;
    return (totalMarks / 300) * 100;
}
function mainFunction(marks1, marks2, marks3) {
    let average = calculateAverage(marks1, marks2, marks3);
    let percentage = calculatePercentage(marks1, marks2, marks3);
    document.write("Average: " + average + "<br>");
    document.write("Percentage: " + percentage + "%<br>");
}
mainFunction(85, 90, 95);

// Question 5
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
let index = customIndexOf("Hello World", "W");;
document.write("Index of 'W' in 'Hello World': " + index + "<br>");

// Question 6
function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
let noVowels = deleteVowels("This is a sample sentence.");
document.write("Sentence without vowels: " + noVowels + "<br>");

// Question 7
function countVowelPairs(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
            count++;
        }
    }
    return count;
}
let vowelPairCount = countVowelPairs("Pleases read this application and give me gratuity");
document.write("Number of vowel pairs: " + vowelPairCount + "<br>");

// Question 8
function convertDistance(km) {
    function toMeters(km) {
        return km * 1000;
    }
    function toFeet(km) {
        return km * 3280.84;
    }
    function toInches(km) {
        return km * 39370.1;
    }
    function toCentimeters(km) {
        return km * 100000;
    }
    document.write(km + " km in meters: " + toMeters(km) + " m<br>");
    document.write(km + " km in feet: " + toFeet(km) + " ft<br>");
    document.write(km + " km in inches: " + toInches(km) + " in<br>");
    document.write(km + " km in centimeters: " + toCentimeters(km) + " cm<br>");
}
convertDistance(5);

// Question 9
function calculateOvertimePay(hoursWorked) {    
    let overtimeRate = 12.00;
    if (hoursWorked > 40) {
        let overtimeHours = hoursWorked - 40;
        return overtimeHours * overtimeRate;
    }   
    return 0;
}
let overtimePay = calculateOvertimePay(45);
document.write("Overtime pay: Rs. " + overtimePay + "<br>");

// Question 10
function calculateCurrencyNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    let fifties = Math.floor((amount % 100) / 50);
    let tens = Math.floor((amount % 100 % 50) / 10);
    document.write("Currency notes for Rs. " + amount + ":<br>");
    document.write("100s: " + hundreds + "<br>");
    document.write("50s: " + fifties + "<br>");
    document.write("10s: " + tens + "<br>");
}
calculateCurrencyNotes(760);
