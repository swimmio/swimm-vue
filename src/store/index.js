import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextId: 0,
    items: [],

  },
  mutations: {
    UPDATE_ITEMS(state, items) {
      state.items = [...items]
    },
    UPDATE_NEXTID(state, nextId) {
      state.nextId = nextId;
    },
  },
  actions: {
    updateStore({ commit }) {
      if (localStorage.getItem("items")) {
        try {
          const items = JSON.parse(localStorage.getItem("items"));
          commit('UPDATE_ITEMS', items);

        } catch (e) {
          localStorage.removeItem("items");
        }
      }

      if (localStorage.getItem("nextID")) {
        try {
          const nextID = JSON.parse(localStorage.getItem("nextID"));
          commit('UPDATE_NEXTID', nextID);

        } catch (e) {
          localStorage.removeItem("nextID");
        }
      }
    },
    saveToLocalStorage(items, nextId) {
      console.log("save to local storage");
      const parsed = JSON.stringify(items);
      localStorage.setItem("items", parsed);
      localStorage.setItem("nextID", nextId);
      this.updateStore();
    },
  },
  getters: {
    getItemsRoot: (state) => (state.items),
    getNextId: (state) => state.nextId,
  }
})
