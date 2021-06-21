class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity || 1
    }
    increment() {
        this.quantity++
    }
    decrement() {
        this.quantity--
    }
}

