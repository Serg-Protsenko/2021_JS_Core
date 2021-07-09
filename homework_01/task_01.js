'use strict';

let number = +prompt('Enter first number: ', 0);
let base = +prompt('Enter second number: ', 0);


function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}


if (isNumber(number) && isNumber(base)) {
    alert(number.toString(base));
} else {
    alert('Invalid input!');
};
