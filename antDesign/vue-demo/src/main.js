import Vue from "vue"
import App from './app.vue'
import router from "./router/router.js"
import axios from 'axios'
import echarts from 'echarts'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
Vue.use(Antd)

Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts

// 引用插件

import myPlugin from './assets/plugin/myPlugin.js';
Vue.use(myPlugin)
const root = document.createElement('div')
document.body.appendChild(root);

new Vue({
    router,
    render: (h)=>h(App)
}).$mount(root)