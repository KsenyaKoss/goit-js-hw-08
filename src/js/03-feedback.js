const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(saveInput, 500));

if(localStorage.getItem('feedback-form-state')){
    form.elements.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    form.elements.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
}

const feedbackForm = {};

function saveInput(ev) {
    ev.preventDefault();
    feedbackForm.email = ev.currentTarget.email.value,
    feedbackForm.message = ev.currentTarget.message.value,
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackForm));
}

form.addEventListener('submit', (ev) =>{
    ev.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    form.reset(); 
})






// Відстежуй на формі подію input, і щоразу записуй у локальне сховище 
// об'єкт з полями email і message, у яких зберігай поточні 
// значення полів форми.
//  Нехай ключем для сховища буде рядок "feedback-form-state".
// 
// Під час завантаження сторінки перевіряй стан сховища,
//  і якщо там є збережені дані, заповнюй ними поля форми.
//   В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми, 
// а також виводь у консоль об'єкт з полями email, 
// message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше,
//  ніж раз на 500 мілісекунд. Для цього додай до проекту і
//   використовуй бібліотеку lodash.throttle.