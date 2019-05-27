import './firebase';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import VueFire from 'vuefire'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Employees from './components/Employees'
import Books from './components/Books'
import Home from './components/Home'
import Create from './components/Create'


const routes = [
  {path: '/employees', component: Employees},
  {path: '/books', component: Books},
  {path: '/', component: Home},
  {path: '/create', component: Create}


];
const router = new VueRouter({
  routes

}); 

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueFire)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
