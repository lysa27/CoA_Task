function transformString(text) {
    const reverseString = str => str.split("").reverse().join("");
    const toAscii = str => str.split('').map(char => char.charCodeAt(0)).join(' ');

    switch (true) {
        case (text.length % 3 === 0 && text.length % 5 === 0):
            text = reverseString(text);
            text = toAscii(text);
            break;
        case (text.length % 3 === 0):
            text = reverseString(text);
            break;
        case (text.length % 5 === 0):
            text = toAscii(text);
            break;
    }
    return text;
}

// Example usage
const text = "Helloowrtyftsiu";
console.log(transformString(text));  // Output: 117 105 115 116 102 116 121 114 119 111 108 108 101 72

const text2 = "Helloo";
console.log(transformString(text2));  // Output: oolleH

const text3 = "World";
console.log(transformString(text3));  // Output: 87 111 114 108 100

const text4 = "Hello world";
console.log(transformString(text4));  // Output: Hello world
