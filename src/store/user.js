
export default {
    namespaced: true,
    state: {
        userInfo: {
            uuid: "-1",
            userName: "xiaoliu",
            token: "-1",
            iconUrl: require("@/assets/imgs/common/unLogin.png")
        },
        count: 0
    },
    getters: {
        // 类似计算属性，必需return
        handleUserInfo: (state) => {
            return state.userInfo.age = 20;
        }
    },
    actions: {
        // 异步过程，调用mutations中方法改变state
        asyncUpdateUserInfo(store, newData) { // 第一个参数是vuex固定的参数，不需要手动去传递
            store.commit("updateUserInfo", newData)
        },
    },
    mutations: {
        updateUUID(state, newData){
            state.userInfo.uuid = newData;
        },
        // 改变state
        updateUser(state, newData) {
            state.userInfo = newData;
        },
        updateToken(state, newData){
            state.userInfo.token = newData;
        },
        increment (state) {
            state.count++
        }
    }
}
