import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)


const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/lostfound',
        name: 'lostfound',
        component: () =>
            import ('../views/services/LostFound.vue')
    },
    {
        path: '/flightinformation',
        name: 'flightinformation',
        component: () =>
            import ('../views/flights/FlightInformation.vue')
    },
    {
        path: '/trackflights',
        name: 'trackFlights',
        component: () =>
            import ('../views/flights/trackflights.vue')
    },
    {
        path: '/DutyFree',
        name: 'dutyfree',
        component: () =>
            import ('../views/attheairport/DutyFree.vue')
    },
    {
        path: '/FoodandDrink',
        name: 'foodanddrink',
        component: () =>
            import ('../views/attheairport/FoodandDrink.vue')
    },
    {
        path: '/charmingChennai',
        name: 'charmingChennai',
        component: () =>
            import ('../views/flights/charmingChennai.vue')
    },
    {
        path: '/services',
        name: 'airportServices',
        component: () =>
            import ('../views/services/airportServices.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router