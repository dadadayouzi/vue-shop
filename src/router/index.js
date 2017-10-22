import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '../containers/Home.vue';
import MyCar from '../containers/MyCar.vue';
import Profile from '../containers/Profile.vue';
import Detail from '../containers/Detail.vue';
import Login from '../containers/Login.vue'
import Register from '../containers/Register.vue'

export default new Router({
  mode:'history',
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/mycar', component: MyCar},
    {path: '/profile', component: Profile},
    {path: '/detail/:nid', component: Detail, name: 'detail'},
    {path: '/detail', component: Detail},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '*', redirect: '/home'},
  ]
})
