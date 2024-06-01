function transformString(str) {
    const len = str.length;
    if (len % 15 === 0) {
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        return str.split('').reverse().join('');
    } else if (len % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    return str;
}
