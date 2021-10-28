/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 14:09:26
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:11:22
 * @Description: 
 */
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    // 根据全局参数判断自己是作为第几层应用运行，加上对应的前缀，其实这里的前缀也可以在上层应用配置对应的全局参数来传递
    base: window.__POWERED_BY_QIANKUN_PARENT__ ? '/qk-b/qk-c' : (window.__POWERED_BY_QIANKUN__ ? '/qk-c' : '/'),
    routes: []
})