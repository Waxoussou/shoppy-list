import Vue from 'vue'
import Vuex from 'vuex'
import { selection, product } from "./modules"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    selection,
    product
  }
})


export default store;

