import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Marketplace from '../components/Marketplace.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Express-Vue-QuickStart',
            component: Home
        },
        {
            path: '/Marketplace',
            name: 'Marketplace',
            component: Marketplace
        },
        {
            path: '*',
            name: '',
            component: Home
        }

    ]
})