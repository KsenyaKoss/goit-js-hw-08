const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', throttle(saveInput, 500));

function saveInput(ev) {
    console.log(ev.target.name);
    console.log(ev.target.value);
    localStorage.setItem('ev.target.name', ev.target.value)

}
