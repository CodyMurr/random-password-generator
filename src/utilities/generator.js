const letters = 'abcdefghijklmnopqrstuvwxyz'

export const lowercase = letters.split('');
export const uppercase = letters.toUpperCase().split('');
export const numbers = '0123456789'.split('');
export const symbols = '!@#$%^&*()_-+=[]|{}?,.'.split('');

export const charObj = {
    lowercase,
    uppercase,
    numbers,
    symbols
}

export function generate(arr, len) {
    const passArr = [];
    while(passArr.length <= len) {
        let randomArr = Math.floor(Math.random() * arr.length);
        let randomChar = Math.floor(Math.random() * arr[randomArr].length);
        passArr.push(arr[randomArr][randomChar]);

        console.log(randomArr)
    }
    return passArr.join('');
}
