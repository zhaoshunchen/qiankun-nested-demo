/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 11:26:18
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:12:08
 * @Description: 
 */
import './public-path' // 注意需要引入public-path
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
let instance = null
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
// 解决加载资源是404的问题
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('-----加载3333----mount-')
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}