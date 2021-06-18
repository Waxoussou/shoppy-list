import { createStore } from 'vuex'

const state = {
  username: null,
  isLoggedIn: false
}
const mutations = {
  logIn: (state) => state.isLoggedIn = true
}
const actions = {}
const modules = {}

export default createStore({
  state,
  mutations,
  actions,
  modules
})
