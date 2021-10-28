/*
 * @Author: 赵顺陈
 * @Date: 2021-10-25 14:08:26
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:09:51
 * @Description: 
 */
// package.json的name需注意与主应用一致
const { name } = require('./package.json')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  },
  devServer: {
    port: 8083,
    headers: {
      'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
    }
  },
}