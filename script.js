// 🚀 JavaScript Fundamentals Assignment by PLP (Thank you for this)
// Author: Moh'd Khamis Songoro (Elimuplay.com)
// -------------------------------
// This file contains solutions for:
// Part 1 - Basics
// Part 2 - Functions
// Part 3 - Loops
// Part 4 - DOM Manipulation

// ❤️ Part 1: Basics (variables, conditionals, operators)
let userAge = 20;  // Example variable
let message = "";

// Conditional to check if user is adult
if (userAge >= 18) {
  message = "You are an adult.";
} else {
  message = "You are a minor.";
}

// Output result to webpage
document.getElementById("basic-output").textContent = message;

// -------------------------------

// ❤️ Part 2: Functions
// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Another function to format text
function formatMessage(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

// Display result using DOM
function showTotal() {
  let total = calculateTotal(50, 3); // Example: 50 * 3
  let text = formatMessage("Student") + " Your total is: $" + total;
  document.getElementById("function-output").textContent = text;
}

// -------------------------------

// 🔁 Part 3: Loops
// Countdown using for loop
function countdown() {
  let output = document.getElementById("loop-output");
  output.innerHTML = ""; // clear old list
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = "Countdown: " + i;
    output.appendChild(li);
  }
}

// Another loop example with while
let numbers = [10, 20, 30];
let index = 0;
while (index < numbers.length) {
  console.log("Number:", numbers[index]);
  index++;
}

// -------------------------------

// 🌐 Part 4: DOM Manipulation
let changeTextBtn = document.getElementById("changeTextBtn");
let toggleColorBtn = document.getElementById("toggleColorBtn");
let addItemBtn = document.getElementById("addItemBtn");
let domOutput = document.getElementById("dom-output");
let domList = document.getElementById("dom-list");

// Event 1: Change text on click
changeTextBtn.addEventListener("click", function() {
  domOutput.textContent = "The text has been changed!";
});

// Event 2: Toggle color with class
toggleColorBtn.addEventListener("click", function() {
  domOutput.classList.toggle("highlight");
});

// Event 3: Add new item dynamically
addItemBtn.addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New item added!";
  domList.appendChild(li);
});
