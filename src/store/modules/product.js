import Product from "@/services/Product";

const state = {
    values: []
}

const getters = {
    byName: state => state.values.map(item => item.name)
}

const mutations = {
    setProducts(state, payload) {
        state.values = payload;
    },
    addProduct(state, payload) {
        state.values.push(payload)
    }
}

const actions = {
    async _init(context) {
        const data = await Product.getAll();
        context.commit("setProducts", data)
    },

    async createNewProduct(context, payload) {
        try {
            const product = await Product.addNewProduct(payload);
            context.commit("addProduct", product);
            context.commit("selection/addItem", product, { root: true });
            return product;
        } catch (e) {
            return e.message
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}