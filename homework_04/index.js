function stringToObject (str){
    const array = str.split('.').reduceRight((previous, current) => ({ [current]: previous }), null);
    return array;
}

// console.log(stringToObject('a.b.c.d'));


function createDebounceFunction(callback, ms) {
    let alreadyRun = false;
    return () => {
        if (alreadyRun) clearTimeout(alreadyRun);
        alreadyRun = setTimeout(callback, ms);
    }
}

// const log100 = () => console.log(100);
// const debounceLog100 = createDebounceFunction(log100, 1000);
// debounceLog100()
// setTimeout(debounceLog100, 200);

