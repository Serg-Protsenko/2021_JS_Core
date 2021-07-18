function stringToObject (str) {
    return str.split('.').reduceRight((previous, current) => ({ [current]: previous }), null);
}

// console.log(stringToObject('a.b.c.d'));


function createDebounceFunction(callback, ms) {
    let alreadyRun ;
    return () => {
        const anotherCall = () => callback.apply(this, arguments)
        clearTimeout(alreadyRun);
        alreadyRun = setTimeout(anotherCall, ms);
    }
}

// const log100 = () => console.log(100);
// const debounceLog100 = createDebounceFunction(log100, 1000);
// debounceLog100()
// setTimeout(debounceLog100, 200);


Function.prototype.myBind = function (obj, ...args) {
  const func = this;
  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};


// const person = {
//   name: 'Anton',
// }

// function info(phone, email) {
//     console.log(`Name: ${this.name}, Tel: ${phone}, Email: ${email}`);  
// }

// let newFunc = info.myBind(person, '+3803243247973')
// newFunc('anton@gmail.com')
