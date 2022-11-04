'use strict'
let makeFibonacciFunction = () => {
    let firstNumber = 0;
    let secondNumber = -1;
       
    const innerFunction = () => {
        if (secondNumber === -1) {
            console.log(0);
            secondNumber = 0;
        } else {
            let sum;
            if ((firstNumber + secondNumber)) {
            sum = firstNumber + secondNumber;  
            } else {
                sum = 1;
            }
        firstNumber = secondNumber;
        secondNumber = sum;
        
        console.log(secondNumber);
        }
    };
    return innerFunction;
};
   let fibonacci = makeFibonacciFunction();

   fibonacci();
   fibonacci();
   fibonacci();
   fibonacci();
   fibonacci();
   fibonacci();
   fibonacci();
