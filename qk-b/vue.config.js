/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 14:08:26
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-25 14:24:24
 * @Description: 
 */
// package.json的name需注意与主应用一致
const { name } = require('./package.json')

module.exports = {
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  },
  devServer: {
    port: 8082, // 在.env中VUE_APP_PORT=7788，与父应用的配置一致
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  }
}