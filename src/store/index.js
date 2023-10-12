// store/index.js

import { createStore } from 'vuex';
import userModule from './user';
import systemConfig from "@/store/systemConfig";

export default createStore({
    getters: {
        // 类似计算属性，必需return
        getUser: (state) => {
            return state.user
        }
    },
    modules: {
        user: userModule,
        systemConfig: systemConfig
    },
});
