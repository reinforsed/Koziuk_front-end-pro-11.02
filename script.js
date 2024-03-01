let userLength = +prompt('Введите длину массива:');
//Пользователь добавляет массив

let arr = [];
let i = 0;
do {
    let element = parseInt(prompt('Введите элемент'));
    arr.push(element);
    i++;
} while (i < userLength);

console.log(arr);
//Сортируем по возрастанию
arr.sort();

console.log(arr);
// Удаляем 1 и 3 элемент
arr.splice(1, 3);

console.log(arr);



