
// initial state
const state = () => ({
  dialog: null,
  isShowDialog: false,
})

// getters
const getters = {
}

// actions
const actions = {
  callDialogConfirm({ commit }, payload) {
    commit('callDialogConfirm', payload)
  },
  closeDialog({ commit }) {
    commit('closeDialog')
  },
}

// mutations
const mutations = {
  callDialogConfirm: (state, payload) => {
    state.dialog = payload;
    state.isShowDialog = true;
  },
  closeDialog: (state) => {
    state.isShowDialog = false;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}