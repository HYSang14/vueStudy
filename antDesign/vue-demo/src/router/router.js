import Vue from 'vue'
import VRouter from "vue-router"
import login from '../components/login.vue'
import register from '../components/register.vue'
import getIndex from "../components/getIndex.vue"
import test from "../components/test.vue"
Vue.use(VRouter)

const router = new VRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            name: 'index',
            component: getIndex
        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})
router.beforeEach((to, from, next) => {
    const nextRoute = ['register', 'index', "test" ]
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
