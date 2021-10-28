/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 11:26:18
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:35:43
 * @Description: 
 */
import { registerMicroApps, start, } from 'qiankun'
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App'
Vue.use(VueRouter)
let router = null;
let instance = null;
let flag = false;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN_PARENT__ ? '/qk-b/' : '/',
    mode: 'history',
    routes:[]
  });
  // 根据业务情况进行实际使用
  // const childRoute = ['/qk-b'];
  // const isChildRoute = path => childRoute.some(item => path.startsWith(item))
  // const rawAppendChild = HTMLHeadElement.prototype.appendChild;
  // const rawAddEventListener = window.addEventListener;
  // router.beforeEach((to, from, next) => {
  //   // 从子项目跳转到主项目
  //   if(isChildRoute(from.path) && !isChildRoute(to.path)){
  //     HTMLHeadElement.prototype.appendChild = rawAppendChild;
  //     window.addEventListener = rawAddEventListener;
  //   }
  //   next();
  // });

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');

  if(!flag){
    registerMicroApps([
      {
        name: 'qk-c',
        entry: 'http://localhost:8083',
        container: '#qk-c-container',
        activeRule: window.__POWERED_BY_QIANKUN_PARENT__ ? '/qk-b/qk-c' : '/qk-c',
      }
    ]);
    start();
    flag = true
  }
}

if (!window.__POWERED_BY_QIANKUN_PARENT__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}
