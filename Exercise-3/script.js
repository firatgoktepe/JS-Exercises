function dictionaryObj(arr) {
    let dictionary = {};

    for (let val of arr) {
        if (dictionary[val]) {
            dictionary[val]++;
        } else {
            dictionary[val] = 1;
        }
    }

    return dictionary;

}

arr = ["a", "a", "b", "c", "b"]

console.log( dictionaryObj(arr) )