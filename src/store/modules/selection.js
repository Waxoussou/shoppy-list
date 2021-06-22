
const state = {
    items: [
        { name: "fraise", quantity: 1, category: 'fruits & légumes' },
        { name: "bananes", quantity: 1, category: 'fruits & légumes' },
        { name: "orange", quantity: 1, category: 'fruits & légumes' },
        { name: "café", quantity: 1, category: "epicerie" }
    ],
    currentSelection: null
}

const getters = {
    byCategory: state => state.items.reduce((acc, currentItem) => {
        const { category, ...rest } = currentItem
        const cat = category || "other"
        const indexOfCat = acc.findIndex(listByCat => listByCat.name === cat);
        if (indexOfCat === -1) {
            // create a new category in acc
            return [...acc, { name: cat, values: [rest] }]
        } else {
            acc[indexOfCat].values.push(rest);
            return acc;
        }
    }, [])


}

const mutations = {
    addItem(state, payload) {
        const isAlreadySelected = state.items.some(item => item.name === payload.name);

        if (isAlreadySelected) {
            const element = state.items.filter(item => item.name === payload.name)[0]
            element.quantity++
            // replace updated item
            const index = state.items.findIndex(item => item.name === payload.name);
            state.items.splice(index, 1, element)
        } else {
            state.items.push({ name: payload.name, quantity: 1 })
        }
    },

    updateItem(state, payload) {
        const index = state.items.findIndex(item => item.name === payload.name);
        if (index !== -1) state.items.splice(index, 1, payload)

    },

    removeItem(state, payload) {
        const index = state.items.findIndex(item => item.name === payload.name);
        if (index !== -1) state.items.splice(index, 1)
    },

    select(state, payload) {
        state.currentSelection = payload
    }

}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}