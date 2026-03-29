//Get references to the form, input field, and message element
form = document.getElementById('welcomeForm');
nameinput = document.getElementById('nameInput');
message = document.getElementById('welcomeMessage');

//Add an event listener to the form to listen for the submit event
form.addEventListener('submit', function(event) {

    //prevent the page from refreshing when the form is submitted
    event.preventDefault();

    //Get the name from the input field
    let name = nameinput.value;

    //When button is clicked a message is displayed
    message.textContent = `Welcome, ${name}!`;
}); 

//Get the id of theme button
let themeButton = document.getElementById('themeButton');

//Add an event listener to listen for any clicks
themeButton.addEventListener('click', function() {

    //change to dark mode if clicked
    document.body.classList.toggle('dark-mode');
});