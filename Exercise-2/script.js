function upperThenLower(str) {
    str = str.replaceAll(' ', '');
    let lowerCase = '';
    let upperCase = '';

    for (let i; i < str.length; i++) {
        let charCase;
        charCase = str.charCodeAt(i);
        if( (charCase >= 65) && (charCase <= 90) ) {
            upperCase += str[i];
        } else if ( (charCase >= 97) && (charCase <= 122) ) {
            lowerCase += str[i];
        }
    }

    return upperCase + lowerCase;
}

let output = upperThenLower("Hello World");

console.log(output);