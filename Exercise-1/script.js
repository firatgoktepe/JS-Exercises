function BuildString(str1, str2) {
        let pos = Math.floor(str1.length / 2);
        return str1.slice(0, pos) + str2 + str1.slice(pos);
    }
    
    let output = BuildString('something', 'great');
    
    console.log(output);