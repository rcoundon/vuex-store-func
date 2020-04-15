import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    myState: ''
  },
  mutations: {
    SET_MY_STATE(state, payload) {
      state.myState = payload;
      this.myFunc('Hi from the mutation');
    },
  },
  actions: {
    setMyState({ commit }, payload) {
      this.myFunc('Hi from the action');
      commit('SET_MY_STATE', payload);
    },
  },
  modules: {
  }
})

store.myFunc = (text) => {
  console.log(text)
}

export default store;
