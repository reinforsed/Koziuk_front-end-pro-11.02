class Hamburger {
    constructor(size, filling) {
        this.size = size;
        this.filling = filling;
        this.toppings = [];
    }

    static SMALL_SIZE = { cost: 50, callories: 20 };
    static BIG_SIZE = { cost: 100, callories: 40 };

    static ADD_FILLING_CHEASE = { cost: 10, callories: 20 };
    static ADD_FILLING_SALAT = { cost: 20, callories: 5 };
    static ADD_FILLING_POTATO = { cost: 15, callories: 10 };

    static ADD_TOPPINGS_FLAVOR = { cost: 15, callories: 0 };
    static ADD_TOPPINGS_MAYO = { cost: 20, callories: 5 };

    addTopings(toppings) {
        this.toppings.push(toppings);
    }

    calcultePrise() {
        let price = this.size.cost;
        price += this.filling.cost;
        this.toppings.forEach(toppings => {
            price += toppings.cost;
        });
        return price;
    }

    calculteCallories() {
        let callories = this.size.callories;
        callories += this.filling.callories;
        this.toppings.forEach(toppings => {
            callories += toppings.callories;
        });
        return callories;
    }
}

let hamburger = new Hamburger(Hamburger.SMALL_SIZE, Hamburger.ADD_FILLING_CHEASE);

hamburger.addTopings(Hamburger.ADD_TOPPINGS_MAYO);

console.log('Callories: ' + hamburger.calculteCallories());
console.log('Price: ' + hamburger.calcultePrise());

hamburger.addTopings(Hamburger.ADD_TOPPINGS_FLAVOR);

console.log('Price with flavor: ' + hamburger.calcultePrise());


