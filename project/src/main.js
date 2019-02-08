import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './assets/css/base.css'
import './assets/css/common.css'

import axios from 'axios'

Vue.prototype.$http=axios

//拦截器
axios.interceptors.request.use(function (config) {
  // 发送请求成功时，拦截，做点事，config=请求时的配置
  vm.$data.bLoading=true;
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response) {
  vm.$data.bLoading=false
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


Vue.config.productionTip = false

import loading from './components/loading'
Vue.use(loading)
var vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
