require('./bootstrap');
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('app', require('./components/App.vue'));
Vue.component('sidebar', require('./components/layouts/Sidebar.vue'));

import Dash from './components/dash/Dash.vue'

const routes = [
  { path: '/dash', component: Dash },
  { path: '/permission', component: require('./components/permission/PermissionList.vue') }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router
}).$mount('#wrapper')
