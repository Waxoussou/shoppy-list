
const state = {
    items: [{ name: "fraise", quantity: 1 }, { name: "orange", quantity: 3 }],
    currentSelection: null
}

const getters = {}

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