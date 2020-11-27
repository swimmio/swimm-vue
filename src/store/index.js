import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const findItem = (items, id) => {
  return items.reduce((acc, item) => {
    if (acc) {
      return acc;
    }

    if (item.id === id) {
      return item;
    }

    if (item.children) {
      return findItem(item.children, id);
    }

    return acc;
  }, null);
}

export default new Vuex.Store({
  state: {
    nextId: 26,
    selectedItem: {},

  },
  mutations: {
    SAVE_STATE(state, newStateItems) {
      state.items = [...newStateItems];
    },
    INC_ID(state) {
      state.nextId += 1;
    },
  },
  actions: {
    saveState({ commit }, updateItems) {
      commit('SAVE_STATE', updateItems);
    },
    incId({ commit }) {
      commit('INC_ID');
    }
  },
  getters: {
    getItemsRoot: (state) => (state.items),
    getItemByID: (state, id) => (findItem(state.items, id)),
    getNextId: (state) => state.nextId,
  }
})
