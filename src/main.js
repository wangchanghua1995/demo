// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
//按需引用
import { Button, Row,Col } from 'element-ui';

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
//注册使用
Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },

  template: '<App/>'
});
