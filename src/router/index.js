/**
 * Created by hh on 2018/7/10.
 */
import Vue from 'vue';
import vueRouter from 'vue-router';
import login from '../components/login/login.vue';
import register from '../components/Register.vue';
import hello from '../page/hello.vue';
Vue.use(vueRouter)
const router = new vueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: hello,
    meta: {
      requiresAuth: true
    }
  },
    {
      path: '/Hello',
      name: 'Hello',
      component: hello,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
  ]
});
export default router;
