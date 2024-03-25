//Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

function sumFunction() {
    let total = 0;
    return function (num) {
        total += num;
        return total;
    };
}

const sum = sumFunction();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));