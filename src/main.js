import Vue from 'vue'
import App from './components/App.vue'
import VueResource from 'vue-resource';
import router from './router'     //路由切换
import store from  './js/store'   //引入Vuex

Vue.use(VueResource); //全局使用Vue调用数据

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',  //子组件(包含头和尾)
  components: { App }  //子组件(包含头和尾)
})
