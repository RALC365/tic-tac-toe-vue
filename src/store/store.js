import vue from "vue";
import vuex from "vuex";
import {state} from "./state";

vue.use(vuex);

export const store = new vue.store({
    state
})