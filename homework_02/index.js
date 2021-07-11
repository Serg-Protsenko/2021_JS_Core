// Task 01
const isEqual = (firstOb, secondOb) => {
    for (let key in firstOb) {
        if (firstOb[key] != secondOb[key]) {
            return false;
        }
    }
    return true
};

// const data1 = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data1, data2)); // true
// console.log(isEqual(data1, data3)); // false


//Task 02
const isEmpty = (object) => {
    for (let key in object) {
        if (object[key] || false) {
            return false;
        }
    }
    return true
};

// const data1 = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data1)); // false
// console.log(isEmpty(data2)); // true

//Task 03
const makePairs = (object) => {
    return Object.entries(object)
};

// const data1 = { a: 1, b: 2 };
// console.log(makePairs(data1)); // [['a', 1], ['b', 2]]