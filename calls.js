let person_1 = new Human('Alex', 28);
let person_2 = new Human('Denis', 17);
person_1.humanInfo();
person_2.humanInfo();

let car_1 = new Car('Ford', 'Focus', 2016, 1.6);
car_1.carOwner(person_1);
car_1.carInfo();

let car_2 = new Car('Chevrolet', 'Lacheti', 2012, 1.4);
car_2.carOwner(person_2);
car_2.carInfo();