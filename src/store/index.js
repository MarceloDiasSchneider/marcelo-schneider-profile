import { createStore } from "vuex";
import languagesData from "@/languages_data.json";

export default createStore({
  state: {
    languages: languagesData,
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {},
});
