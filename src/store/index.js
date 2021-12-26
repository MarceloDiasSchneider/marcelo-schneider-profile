import { createStore } from "vuex";
import languagesData from "@/languages_data.json";

export default createStore({
  state: {
    selected_languade: "english",
    languages: languagesData.lenguages,
    config: languagesData.config,
  },
  mutations: {
    set_select_lenguage(state, payload) {
      state.selected_languade = payload.language;
    },
  },
  getters: {
    language: (state) => {
      return state.languages[state.selected_languade];
    },
  },
  actions: {
    select_lenguage({ commit }, payload) {
      commit("set_select_lenguage", payload);
    },
  },
  modules: {},
});
