/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 14:09:26
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:17:30
 * @Description: 
 */
import Router from 'vue-router'
import Vue from 'vue'
import Normal from '@/components/Normal'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/normal',
            name: 'normal',
            component: Normal,
            meta: {
            }
        }
        // ,
        // {
        //     path: '/qk-2',
        //     name: 'qk-2',
        //     entry: '//localhost:8082/',
        //     container: '#subapp-viewport',
        //     activeRule: '/qk-2',
        // }
    ]
})