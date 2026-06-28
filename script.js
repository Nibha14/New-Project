// ===============================
// Variables
// ===============================

let username = "Nibha";
const age = 21;
var city = "Delhi";

console.log("Name:", username);
console.log("Age:", age);
console.log("City:", city);

// ===============================
// Functions
// ===============================

function welcomeUser(name) {
    alert("Welcome " + name + "!");
}

// ===============================
// Button Click Event
// ===============================

function showMessage() {
    alert("Button Clicked Successfully!");
}

// ===============================
// Change Heading
// ===============================

function changeHeading() {
    document.getElementById("heading").innerHTML = "Heading Changed!";
}

// ===============================
// Change Text Color
// ===============================

function changeColor() {
    document.getElementById("heading").style.color = "red";
}

// ===============================
// Current Date and Time
// ===============================

function showDate() {
    document.getElementById("date").innerHTML = new Date();
}

// ===============================
// Simple Calculator
// ===============================

function addNumbers() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerHTML = "Sum = " + sum;
}

// ===============================
// Loops
// ===============================

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// ===============================
// Arrays
// ===============================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);

fruits.forEach(function(fruit) {
    console.log(fruit);
});

// ===============================
// Objects
// ===============================

const student = {
    name: "Nibha",
    age: 21,
    course: "BCA"
};

console.log(student.name);

// ===============================
// If Else
// ===============================

let marks = 75;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ===============================
// Switch Case
// ===============================

let day = 2;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}

// ===============================
// Random Number
// ===============================

function randomNumber() {

    let number = Math.floor(Math.random() * 100);

    alert(number);
}

// ===============================
// Timer
// ===============================

function startTimer() {

    setTimeout(function(){

        alert("Time is up!");

    },3000);

}

// ===============================
// Toggle Dark Mode
// ===============================

function darkMode() {

    document.body.classList.toggle("dark");
}

// ===============================
// Mouse Event
// ===============================

function mouseOver() {

    document.getElementById("box").style.background = "blue";

}

function mouseOut() {

    document.getElementById("box").style.background = "green";

}

// ===============================
// Keyboard Event
// ===============================

function keyPressed() {

    console.log("Key Pressed");

}

// ===============================
// Form Validation
// ===============================

function validateForm() {

    let name = document.getElementById("name").value;

    if(name == ""){

        alert("Name cannot be empty");

        return false;
    }

    alert("Form Submitted");

    return true;
}

// ===============================
// Window Loaded
// ===============================

window.onload = function(){

    console.log("Website Loaded Successfully");

};