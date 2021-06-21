class Product {
    constructor() {
        this.data = [
            { name: "orange", category: "fruits & légumes" },
            { name: "banane", category: "fruits & légumes" },
            { name: 'vin rouge', category: "alcool" },
            { name: 'café', category: "epicerie" }
        ]
    }
    getAll() {
        return new Promise((res) => {
            setTimeout(() => {
                res(this.data)
            }, 1000);
        })
    }
    addNewProduct(product) {
        const id = Math.random(1)
        this.data.push({ id, ...product })
        return { id, ...product };
    }
}

export default new Product();