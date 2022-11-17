'use strict'

const email = document.getElementById('email');
const button = document.querySelector('.container__button');
const emailError = document.querySelector('.container__error-email');
const password = document.getElementById('password');
const passwordError = document.querySelector('.container__error-password');
const confirmation = document.getElementById('confirmation');
const confirmationError = document.querySelector('.container__error-confirmation');
const about = document.getElementById('about');
const radio = document.querySelectorAll('.container__radio-input');
const permission = document.getElementById('permission');
let gender;
let agreement; 
let result ={};


password.addEventListener('input', () => {
    if(password.value.length < 8) {
        passwordError.textContent = 'Пароль должен содержать не менее 8 символов';
        password.classList.add('error');
    } else {
        passwordError.textContent = '';
        password.classList.remove('error');
        };
})

confirmation.addEventListener('input', () => {
    if (confirmation.value === '' || (confirmation.value !==password.value)) {
        confirmationError.textContent = 'Пароли не совпадают';
        confirmation.classList.add('error');
    } else {
        confirmationError.textContent = '';
        confirmation.classList.remove('error');
    }
})

button.addEventListener('click', (event) => {
    event.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value === '') {
        emailError.textContent = 'Поле обязательно для заполнения';
        email.classList.add('error');
    } else if (!(re.test(String(email.value).toLowerCase()))) {
        emailError.textContent = 'Email введён некорректно';
        email.classList.add('error');
    } else {
        emailError.textContent = '';
        email.classList.remove('error');
    }
    if (password.value === '') {
        passwordError.textContent = 'Поле обязательно для заполнения';
        password.classList.add('error');
    } else if (password.value.length < 8) {
        passwordError.textContent = 'Пароль должен содержать не менее 8 символов';
        password.classList.add('error');
    } else {
        passwordError.textContent = '';
        password.classList.remove('error');
    }
    if (confirmation.value === '' || (confirmation.value !==password.value)) {
        confirmationError.textContent = 'Пароли не совпадают';
        confirmation.classList.add('error');
    } else {
        confirmationError.textContent = '';
        confirmation.classList.remove('error');
    }
    for (const f of radio) {
        if(f.checked) {
            gender = f.value
        }
    }
    
    if (permission.checked) {
        agreement = 'Yes';
    } else {
        agreement = "No";
    }

    if (!(email.classList.contains('error') || password.classList.contains('error') || confirmation.classList.contains('error'))) {
        result.email = email.value;
        result.password = password.value;
        result.gender = gender;
        result.about = about.value;
        result.agreement = agreement;
        console.log(result);
        
    }

})
