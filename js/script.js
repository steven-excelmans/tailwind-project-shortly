const input = document.getElementById('link-input');
const form = document.getElementById('link-form');
const error = document.getElementById('error');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();
    console.log('form submitted: ' + input.value);

    if (input.value === '') {
        error.innerHTML = 'Please enter a valid URL';
        input.classList.add('border-red');
    }
}

const button = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

button.addEventListener('click', navToggle);

function navToggle() {
    button.classList.toggle('open');

    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}