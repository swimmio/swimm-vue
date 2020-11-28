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
      console.log('update state', items)
      state.items = [];
      state.items.push(...items);
    },
    UPDATE_NEXTID(state, nextId) {
      state.nextId = nextId;
    },
  },
  actions: {
    updateStore({ commit }) {
      if (localStorage.getItem("items")) {
        try {
          const itemsFromStorage = JSON.parse(localStorage.getItem("items"));
          console.log('calling the mutation', itemsFromStorage)
          commit('UPDATE_ITEMS', itemsFromStorage);

        } catch (e) {
          console.log('calling remove', e)
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
    updateItems({ commit }) {
      if (localStorage.getItem("items")) {
        try {
          const items = JSON.parse(localStorage.getItem("items"));
          commit('UPDATE_ITEMS', items);

        } catch (e) {
          localStorage.removeItem("items");
        }
      }
    },
    updateNextID({ commit }) {
      if (localStorage.getItem("nextID")) {
        try {
          const nextID = JSON.parse(localStorage.getItem("nextID"));
          commit('UPDATE_NEXTID', nextID);

        } catch (e) {
          localStorage.removeItem("nextID");
        }
      }
    },
    saveItemsToLocalStorage({ commit }, items) {
      console.log("save to local storage", items);
      const parsed = JSON.stringify(items);
      console.log(parsed);
      localStorage.setItem("items", parsed);
      commit('UPDATE_ITEMS', items);
    },
    saveNextIdToLocalStorage({ commit }, nextId) {
      commit('UPDATE_NEXTID', nextId);
    },
    saveToLocalStorage({ commit }, items, nextId) {
      console.log("save to local storage", items);
      const parsed = JSON.stringify(items);
      console.log(parsed);
      localStorage.setItem("items", parsed);
      localStorage.setItem("nextID", nextId);
      commit('UPDATE_ITEMS', items);
      commit('UPDATE_NEXTID', nextId);
    },
  },
  getters: {
    getItemsRoot: (state) => (state.items),
    getNextId: (state) => state.nextId,
  }
})
