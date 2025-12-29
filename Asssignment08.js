// ! Assignment 08

// ? Chapter 31-34

// Question 1
let currentDate = new Date();
document.write("Current date and time: " + currentDate + "<br>");

// Question 2
let currentYear = currentDate.getFullYear();
document.write("Current year: " + currentYear + "<br>");

// Question 3
let currentMonth = currentDate.getMonth() + 1; // Months are 0-based
document.write("Current month: " + currentMonth + "<br>");

// Question 4
let currentDay = currentDate.getDate();
document.write("Current day: " + currentDay + "<br>");

// Question 5
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDayOfWeek = daysOfWeek[currentDate.getDay()];
document.write("Current day of the week: " + currentDayOfWeek + "<br>");

// Question 6
let specificDate = new Date(2023, 0, 1); // January 1, 2023
document.write("Specific date: " + specificDate + "<br>");

// Question 7
let date1 = new Date(2023, 0, 1);
let date2 = new Date(2023, 11, 31);
let difference = date2 - date1;
let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
document.write("Difference in days between Jan 1, 2023 and Dec 31, 2023: " + daysDifference + "<br>");

// Question 8
let formattedDate = currentDate.toLocaleDateString();
document.write("Formatted current date: " + formattedDate + "<br>");