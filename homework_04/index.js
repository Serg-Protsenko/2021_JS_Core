function stringToObject (str){
    const array = str.split('.').reduceRight((previous, current) => ({ [current]: previous }), null);
    return array;
}

// console.log(stringToObject('a.b.c.d'));

