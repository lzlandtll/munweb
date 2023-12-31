import { createApp } from 'vue'
import router from "./router/index.ts";
import App from './app.vue'
import store from './store'
import './assets/css/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
app.use(router);
app.use(store)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app');
