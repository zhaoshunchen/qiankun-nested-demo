/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 10:34:42
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:24:54
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
import router from './router'
Vue.config.productionTip = false

// 由于本身有window.__POWERED_BY_QIANKUN__参数，sub应用无法判断自己在第几层
// 设置一个全局参数，让sub应用检测到该参数则说明自己作为孙子应用运行
window.__POWERED_BY_QIANKUN_PARENT__ = true

registerMicroApps([{
  name: 'qk-b',
  entry: '//localhost:8082/',
  activeRule: '/qk-b',
  container: '#qk-b-container', // 子应用挂载的div
},
]);

start();

new Vue({
  router  ,
  render: h => h(App),
}).$mount('#app')