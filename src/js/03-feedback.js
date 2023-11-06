import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const KEY_INFO = 'feedback-form-state';

form.addEventListener('input', throttle(handlerGetInfo, 500));
form.addEventListener('submit', handlerSubmit);
let formInfo = JSON.parse(localStorage.getItem(KEY_INFO)) || {};
const { email, message } = form.elements;
reloadPage();

function reloadPage() {
  if (formInfo) {
    email.value = formInfo.email || '';
    message.value = formInfo.message || '';
  }
}

function handlerGetInfo(event) {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem(KEY_INFO, JSON.stringify(formInfo));
}

function handlerSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }

  localStorage.removeItem(KEY_INFO);
  event.currentTarget.reset();
  formInfo = {};
}
