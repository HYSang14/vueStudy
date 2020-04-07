import Vue from 'vue'
import VRouter from "vue-router"
import login from '../components/login.vue'
import register from '../components/register.vue'
import index from '../components/index.vue'
import getForm from "../components/getForm.vue"
Vue.use(VRouter)

const router = new VRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/form',
            name: 'form',
            component: getForm
        },
        {
            path: '/index',
            name: 'index',
            component: index
        }
    ]
})
router.beforeEach((to, from, next) => {
    const nextRoute = ['register', 'form', 'index']
    let isLogin = window.sessionStorage.getItem('isLogin');
    if (nextRoute.indexOf(to.name) >= 0){
        if (!isLogin) {
            router.push({name: 'login'})
        }
    }
    if (to.name === 'login') {
        if (isLogin){
            router.push({name: 'index'})
        }
    }
    next();
})
export default router
