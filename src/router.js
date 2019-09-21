import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './views/NotFound.vue'
import Login from './views/Login.vue'
<<<<<<< HEAD
import Registe from './views/Registe .vue'
import forum from './views/forum.vue'
Vue.use(Router)
export default new Router({
    routes: [
        { path: '/Registe', component: Registe },
        { path: '/Tourist', component: Tourist },
        { path: '/Login', component: Login },
        
        { path: "/forum", component: forum },
        { path: "/*", component: NotFound }
        
    ]
})