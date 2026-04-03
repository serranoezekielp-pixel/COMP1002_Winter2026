// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

let themeBtn = document.querySelector("#themeBtn"); //Changed variable name from "themeToggle" to "themeBtn" to match the HTML

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode"); //Changed "darkMode" to "dark-mode" to match the CSS class name
});

// 3. Live Input
messageInput.addEventListener("input", function() { //"input" event should be used instead of "change" to update live as the user types    
    liveOutput.textContent = messageInput.value; //"messageInput" should be capitalized to match the variable name
});

// 4. Welcome Form
welcomeForm.addEventListener("submit", function(event) { //added "event" parameter to the function to use in preventDefault
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});