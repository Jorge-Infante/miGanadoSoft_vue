import { createStore } from "vuex";
import animal_store from "@/modules/animal/store/animal_store";
import global_store from "@/modules/miGanadoSoft/store/global_store";

const store = createStore({
  modules: {
    global_store,
    animal_store,
  },
});

export default store;
