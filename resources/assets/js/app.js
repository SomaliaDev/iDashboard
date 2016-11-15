require('./bootstrap');
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(VueRouter)
Vue.use(Element)

Vue.component('app', require('./components/App.vue'));
Vue.component('sidebar', require('./components/layouts/Sidebar.vue'));

import Dash from './components/dash/Dash.vue'

const routes = [
  { path: '/dash', component: Dash },
  { path: '/permission', component: require('./components/permission/PermissionList.vue') },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass:'active',
  routes
})

const app = new Vue({
  router
}).$mount('#wrapper')
