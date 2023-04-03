// store/snackbar.js

const state = {
    message: '',
    color: 'primary',
    timeout: 6000,
    top: false,
    bottom: true,
    left: false,
    right: false,
    multiLine: false,
    vertical: false,
    queue: false,
    closeOnContentClick: false,
    closeOnClick: true,
    show: false,
  };
  
  const getters = {
    message: (state) => state.message,
  };
  
  const actions = {
    showSnackbar({ commit }, { message, options }) {
      commit('showSnackbar', { message, options });
    },
    hideSnackbar({commit}){
        commit('hideSnackbar');
    }
  };
  
  const mutations = {
    showSnackbar(state, { message, options }) {
      state.message = message;
      state.color = options.color || 'primary';
      state.timeout = options.timeout || 6000;
      state.top = options.top || false;
      state.bottom = options.bottom || true;
      state.left = options.left || false;
      state.right = options.right || false;
      state.multiLine = options.multiLine || false;
      state.vertical = options.vertical || false;
      state.queue = options.queue || false;
      state.closeOnContentClick = options.closeOnContentClick || false;
      state.closeOnClick = options.closeOnClick || true;
      state.show = true;
    },
  
    hideSnackbar(state) {
      state.message = '';
      state.show = false;
    },
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };
  