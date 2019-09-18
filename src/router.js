import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'
import Registe from './views/Registe .vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/Registe', component: Registe },
        { path: '/Login', component: Login },
        { path: '/Index', component: Index },
        { path: '/', component: Index },
        { path: "/*", component: NotFound }
    ]
})