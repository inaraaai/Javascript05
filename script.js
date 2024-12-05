const button = document.getElementById('changetext');
const text = document.getElementById('text');

button.addEventListener('click', function() {
    text.textContent = 'Hello, World!';
});


const hoverText = document.getElementById('hoverText');

hoverText.addEventListener('mouseover', function() {
    hoverText.style.backgroundColor = 'yellow';
});

hoverText.addEventListener('mouseout', function() {
    hoverText.style.backgroundColor = '';
});


const inputField = document.getElementById('inputField');
const displayText = document.getElementById('displayText');

inputField.addEventListener('keydown', function(event) {
    displayText.textContent = event.target.value;
});



const coordinates = document.getElementById('coordinates');

document.addEventListener('mousemove', function(event) {
    coordinates.textContent = `${event.clientX}, ${event.clientY}`;
});


const form = document.getElementById('myform');
const nameField = document.getElementById('nameField');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
    if (nameField.value.trim() === '') {
        errorMessage.textContent = 'Name field cannot be empty!';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
        alert(`Form submitted with name: ${nameField.value}`);
    }
});