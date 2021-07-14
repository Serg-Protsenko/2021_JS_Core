function isPalindrome(str) {

    function reverseString(str) {
  return str.split("").reverse().join("");
    }
    
    function leaveOnlyLetters(str) {
        return str.replace(/[^a-zA-Z]/g, "");
    }

    const processedStr = leaveOnlyLetters(str).toLowerCase();
    const reverseStr = reverseString(processedStr);
    
    return processedStr === reverseStr
}

// console.log(`"Ann,a" palindrome is ${isPalindrome('Ann,a')}`)
// console.log(`"Ann" palindrome is ${isPalindrome('Ann')}`)
// console.log(`" eye" palindrome is ${isPalindrome(' eye')}`)
// console.log(`"Yes" palindrome is ${isPalindrome('Yes')}`)

function findVowels(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

// console.log(`"yes no " has ${findVowels('yes no ')} vowels.`);
// console.log(`"Hello, World!" has ${findVowels('Hello, World!')} vowels.`);
// console.log(`"Why?" has ${findVowels('Why?')} vowels.`);

// function myFilter(arr, callback) {
//     const resultArr = [];
//     for (let i = 0; i < arr.length; i++){
//         const result = callback(arr[i], i, arr);
//         if (result) {
//             resultArr.push(arr[i]);
//         }
//     } return resultArr;
// }


Array.prototype.myFilter = function(callback, _this) {
    const resultArr = [];
    
    for (let i = 0; i < this.length; i++) {
        if (typeof  _this === "object") {
            if (!!callback.call(_this, this[i], i, this)) {
                resultArr.push(this[i]);
            }
        } else {
            if (!!callback(this[i], i, this)) {
                resultArr.push(this[i]);
            }
        }
    }
    return resultArr;
}

// const arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`For array ${arrTest} odd numbers are ${arrTest.myFilter(num => num % 2 !== 0)}.`);
// console.log(`For array ${arrTest} even numbers are ${arrTest.myFilter(num => num % 2 === 0)}.`);