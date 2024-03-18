// //Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).


const userNumber = +prompt('Введите число');
const userPow = +prompt('Введите степень');

function pow(num, degree) {
    if (degree === 0) {
        return 1
    }
    return num * pow(num, degree - 1);
};

const result = pow(userNumber, userPow);
alert(`${userNumber} в степени ${userPow} равняеться ${result}`);