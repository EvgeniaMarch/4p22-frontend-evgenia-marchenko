'use strict'

const myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: {
        key4: 'value4',
        key5: 'value5',
        key6: {
            key7: 'value7',
            key8: 'value8',
        },
    },
    key9: 'vaue9',
    key10: 'value10',
}

// console.log(myObject);

// const objectFunction = function (object = {}) {
//     for (const item of array) {
//         const stringJSON = JSON.stringify(object = {});
//         console.log(stringJSON)
//     }

// }

// objectFunction(myObject)

// const objectFunction = function (object) {
//     Object.entries(object).forEach((entry) => {    
//      for (const item in object) {
            
//                 console.log(`${entry[0]}: ${entry[1]}`);}
//        }
// }

//     objectFunction(myObject); 

// const objectFunction = function (object) {
//     Object.entries(object).forEach((entry) => {
//         for (const item in object) {
//             console.log(`${entry[0]}: ${entry[1]},`);
//         }
//     })
// }

// objectFunction(myObject)

const objectFuction = function (object) {
    for (const item in object) {
        if (typeof(object[item]) === 'object') {
            objectFuction(object[item])
        } else {
             let res = Object.entries(object);
             
        }
    }
}

 objectFuction(myObject);