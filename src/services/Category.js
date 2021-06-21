class Category {
    constructor() {
        this.values = []
    }

    async fetchData() {
        return new Promise((res =>
            setTimeout(() => {
                this.values = [
                    "epicerie salée",
                    "epicerie sucrée",
                    "fruits & légumes",
                    "alcool",
                ];
                res(this.values)
            }, 3000)))
    }

    getCategories() {
        return this.values;
    }
}

export default new Category()

