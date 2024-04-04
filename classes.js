class Human {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    humanInfo() {
        console.log(`Имя: ${this.name}, возраст ${this.age} лет`);
        ;

    }
}

class Car {
    brand;
    model;
    yearOfManufacturer;
    engineCapacity;
    owner;


    constructor(brand, model, yearOfManufacturer, engineCapacity) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacturer = yearOfManufacturer;
        this.engineCapacity = engineCapacity;
        this.owner = null;
    }

    carOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
            console.log(`Автомобиль принадлежит ${owner.name}`)
        } else {
            console.log('Владельцу должно быть больше, либо 18 лет')
        }
    }

    carInfo() {
        console.log(`Марка авто: ${this.brand}, модель авто: ${this.model}, год выпуска: ${this.yearOfManufacturer}, обьем двигателя: ${this.engineCapacity}`)
        if (this.owner) {
            console.log('Иформация про владельца:')
            this.owner.humanInfo()
        } else {
            console.log('Владельца нет')
        }
    }


}

