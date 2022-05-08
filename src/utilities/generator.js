const letters = 'abcdefghijklmnopqrstuvwxyz'

export const lowercase = letters.split('');
export const uppercase = letters.toUpperCase().split('');
export const numbers = '0123456789'.split('');
export const symbols = '!@#$%^&*()_-+=[]|{}?,.'.split('');

export const obj = {
    lowercase,
    uppercase,
    numbers,
    symbols
}

export function generate(obj, len) {
    const passArr = [];
    const keys = Object.keys(obj);
    while(passArr.length <= len) {
        let randomArr = Math.floor(Math.random() * keys.length);
        let randomChar = Math.floor(Math.random() * obj[keys[randomArr]].length);
        passArr.push(obj[keys[randomArr]][randomChar]);
    }
    return passArr.join('');
}
