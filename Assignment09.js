// !Assignment 09 Start 
// ? Chapter 35-38

// Question 1
function displayCurrentDateTime() {
    let now = new Date();
    document.write("Current date and time: " + now + "<br>");
}
displayCurrentDateTime();

// Question 2
function greetUser(firstName, lastName) {
    document.write("Hello, " + firstName + " " + lastName + "!<br>");
}
greetUser("John", "Doe");
// Question 3
function addNumbers(num1, num2) {
    return num1 + num2;
}
let sum = addNumbers(5, 10);
document.write("Sum of 5 and 10 is: " + sum + "<br>");
// Question 4
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
let factorialOf5 = calculateFactorial(5);
document.write("Factorial of 5 is: " + factorialOf5 + "<br>");
// Question 5
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("<br>");
}
displayCounting(1, 10);
// Question 6
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }   
    let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}
let hypotenuseLength = calculateHypotenuse(3, 4);
document.write("Hypotenuse length: " + hypotenuseLength + "<br>");
// Question 7
function calculateArea(width, height) {
    return width * height;
}
let area = calculateArea(5, 10);
document.write("Area of rectangle: " + area + "<br>");
// Question 8
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
let palindromeTest = "A man a plan a canal Panama";
let isPalin = isPalindrome(palindromeTest);
document.write("\"" + palindromeTest + "\" is a palindrome: " + isPalin + "<br>");
// Question 9
function capitalizeFirstLetter(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
let capitalizedSentence = capitalizeFirstLetter("hello world from javascript");
document.write("Capitalized Sentence: " + capitalizedSentence + "<br>");
// Question 10
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}   
let longest = findLongestWord("The quick brown fox jumped over the lazy dog");
document.write("Longest word: " + longest + "<br>");
// Question 11
function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
let letterCount = countOccurrences("hello world", "l");
document.write("Count of 'l' in 'hello world': " + letterCount + "<br>");
// Question 12
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}
let circumference = calculateCircumference(5);
document.write("Circumference of circle with radius 5: " + circumference + "<br>");
// Question 13
function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}
let areaOfCircle = calculateAreaOfCircle(5);
document.write("Area of circle with radius 5: " + areaOfCircle + "<br>");
