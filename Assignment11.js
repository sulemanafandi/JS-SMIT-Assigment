//!Assignment 11
// ? Chapter 43-48


// Question 01
function showAlert() {
    alert("You clicked the link!");
}

// Question 02
function showImageAlert() {
    alert("You clicked the image!");
}
showImageAlert();
// Question 03
function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(i);
}

// Question 04
function changeImageOnHover(imgElement, newSrc) {
    imgElement.src = newSrc;
}
function resetImageOnMouseOut(imgElement, originalSrc) {
    imgElement.src = originalSrc;
}

// Question 05
let counter = 0;
function increaseCounter() {
    counter++;
    document.getElementById("counterDisplay").innerText = counter;
}
function decreaseCounter() {
    counter--;
    document.getElementById("counterDisplay").innerText = counter;
}