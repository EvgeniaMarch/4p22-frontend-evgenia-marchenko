'use strict'

const firstNumber = document.getElementById('first-number');
const sign = document.getElementById('sign');
const secondNumber = document.getElementById('second-number');
const button = document.getElementById('button');
let finalResult = document.getElementById('result');
let result;

button.addEventListener ('click', (event) => {
    event.preventDefault();
    if (firstNumber.value === '') {
        result = 'Первое число не указано'
        finalResult.innerHTML = result;
        
    } else if (sign.value === '') {
        result = 'Не введен знак';
        finalResult.innerHTML = result;
       
    } else if (secondNumber.value === '') {
        result = 'Второе число не указано';
        finalResult.innerHTML = result;
    }  else {
        switch (sign.value) {
        case '+': result = Number(firstNumber.value) + Number(secondNumber.value); finalResult.innerHTML = result; break;
        case '-': result = Number(firstNumber.value) - Number(secondNumber.value); finalResult.innerHTML = result; break;
        case '*': result = Number(firstNumber.value) * Number(secondNumber.value); finalResult.innerHTML = result; break;
        case '/': result = Number(firstNumber.value) / Number(secondNumber.value); finalResult.innerHTML = result; break;
        default: result = 'Программа не поддерживает такую операцию';
        }
    }
    
    if (firstNumber.value != Number(firstNumber.value) || secondNumber.value != Number(secondNumber.value)) {
        result = 'Некорректный ввод чисел';
        finalResult.innerHTML = result;
    }

    if (result === Infinity || result === -Infinity) {
        finalResult.innerHTML = 'Операция некорректна';
    } 

    if (Number(firstNumber.value) === 0 && sign.value === '/' && Number(secondNumber.value) === 0) {
        finalResult.innerHTML = 'Операция некорректна';
    }
    
    
   
}) 
