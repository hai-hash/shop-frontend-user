import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import common from './modules/common'
import snackbar from './modules/snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    common,
    snackbar
  },
})