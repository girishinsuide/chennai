import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import ScrollAnimation from './directives/scrollanimation'
import './assets/css/style.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'


Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')