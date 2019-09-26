import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component("my-header", Header);
Vue.component("my-footer", Footer);
// 配置请求的基准URL地址
axios.defaults.baseURL = 'http://localhost:5050/';
Vue.prototype.axios=axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')