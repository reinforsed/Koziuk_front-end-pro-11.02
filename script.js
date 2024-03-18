//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [1, 'apple', 2, 'banana', 3, 4, '5'];

function avarageArrNum(array) {
    let sum = 0;
    let count = 0;

    array.forEach(element => {
        if (typeof element === 'number') {
            sum += element;
            count++;
        }
    });

    if (count === 0) {
        return 0;
    }

    return sum / count;
};

const avarage = avarageArrNum(array);

console.log(avarage);

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
const x = +prompt("Введите первое число:");
const znak = prompt("Введите знак операции (+, -, *, /, %, ^):");
const y = +prompt("Введите второе число:");

function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = "Нет такой операции";
    }

    return result;
}


const result = doMath(x, znak, y);
alert("Результат: " + result);

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
const mainArr = +prompt("Введите длину основного массива:");
const innerArr = +prompt("Введите длину внутреннего массиво:");


function fillArrWithUserInput(rows, columns) {
    const array = [];

    for (let i = 0; i < rows; i++) {
        const innerArray = [];
        for (let j = 0; j < columns; j++) {
            const userInput = prompt(`Введите значення для елемента массива:`);
            innerArray.push(userInput);
        }
        array.push(innerArray);
    }

    return array;
}


const userArray = fillArrWithUserInput(mainArr, innerArr);
console.log("Ваш двухмерный месив:", userArray);

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const inputString = prompt("Введите строку:");
const charactersToRemove = prompt("Ввелиие символы для удаления (без пробелов):").split('');

function removeCharactersFromString(str, charRemove) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (!charRemove.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
};

const stirngWithoutCharacters = removeCharactersFromString(inputString, charactersToRemove);

console.log(stirngWithoutCharacters);