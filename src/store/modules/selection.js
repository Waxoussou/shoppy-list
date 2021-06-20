const state = {
    items: [],
}

const getters = {}

const mutations = {
    addItem(state, payload) {
        state.items.push(payload)
    },

}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}