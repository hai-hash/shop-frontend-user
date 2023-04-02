
// initial state
const state = () => ({
  items: [],
  checkoutStatus: null
})

// getters
const getters = {
  getItemCheckout:state =>{
    return state.items
  }
}

// actions
const actions = {
    setItemCheckout ({ commit}, products) {
        commit('setItemCheckout',products)
      },
}

// mutations
const mutations = {
    setItemCheckout: (state,payload) =>{
        state.items = payload;
    },
    setCheckoutStatus (state, status) {
        state.checkoutStatus = status
      }
}

export default {
    state,
    getters,
    actions,
    mutations
}