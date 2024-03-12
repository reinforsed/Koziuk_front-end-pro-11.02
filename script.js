//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. 
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let key = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const random = Math.random() * charactersLength;
        key += characters.charAt(random);
    }
    return key;
}

const key = generateKey(16, characters);
console.log(key);