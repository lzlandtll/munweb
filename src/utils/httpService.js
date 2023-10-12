import axios from 'axios';
import store from "@/store/index";
import encrypt from "@/utils/encrypt"
import dateUtils from "@/utils/dataUtils"

const httpService = axios.create({
    baseURL: store.state.systemConfig.serverURL,
    timeout: 5000,
    withCredentials: true
});

// 请求拦截器：在请求发送之前执行的逻辑
httpService.interceptors.request.use(
    (config) => {
        if(store.state.user.userInfo.token){
            //return new Promise(() => {});
        }
        // 在请求发送之前可以添加一些逻辑，例如设置请求头
        config.headers.Authorization = store.state.user.userInfo.token;
        config.headers.sCode = encrypt.encrypt(dateUtils.formatDate(new Date(), "yyyyMMddHHmmss"));
        config.headers.uuid = store.state.user.userInfo.uuid;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器：在响应返回之后执行的逻辑
httpService.interceptors.response.use(
    (response) => {
        // 在响应返回之后可以添加一些逻辑，例如处理成功响应
        return response;
    },
    (error) => {
        // 在响应返回之后可以添加一些逻辑，例如处理错误响应
        return Promise.reject(error);
    }
);

function get(url, params = {}) {
    return httpService.get(url, { params });
}

function post(url, data = {}) {
    return httpService.post(url, data);
}

export default {
    get,
    post,
};
