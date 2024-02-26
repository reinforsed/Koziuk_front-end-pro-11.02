// First part
let currentYear = 2024;
let userAge = +prompt('Какой год вашего рождения?');
let userCapital = prompt('В каком городе вы проживаете?')
let userFavSport = prompt('Какой ваш любимый вид спрорта?');

//User age
let mathAge = currentYear - userAge;
let currentUserAge = 'Вам' + ' ' + mathAge + ' ' + 'года';

if (userAge == false) {
    currentUserAge = 'Жаль что вы не захотели вводить год своего рождения';
}

//User city
let userCountry;

if (userCapital == 'Киев') {
    userCountry = 'Вы проживаете в столице Украины';
} else if (userCapital == 'Лондон') {
    userCountry = 'Вы проживаете в столице Англии';
} else if (userCapital == 'Вашингтон') {
    userCountry = 'Вы проживаете в столице США';
} else if (userCapital) {
    userCountry = 'Ты живешь в ' + userCapital;
} else {
    userCountry = 'Жаль что вы не захотели вводить город вашего проживания'
}

//User Sport
let userChamp;

if (userFavSport == 'Бокс') {
    userChamp = 'Круто! хочешь стать как Александр Усик?'
} else if (userFavSport == 'Футбол') {
    userChamp = 'Круто! хочешь стать как Девид Бэкхем?'
} else if (userFavSport == 'Баскетбол') {
    userChamp = 'Круто! хочешь стать как Леброн Джеймс?'
} else {
    userChamp = 'Жаль что вы не захотели вводить свои любимый вид спорта'
};

alert(`${currentUserAge}
${userCountry}
${userChamp}`);

