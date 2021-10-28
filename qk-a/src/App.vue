<!--
 * @Author: 赵顺陈
 * @Date: 2021-10-25 10:34:42
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:24:07
 * @Description: 
-->
<template>
  <div id="app">
    <div><img alt="Vue logo" src="./assets/logo.png"></div>
    <h2>应用-A</h2>
    <button @click="fnClickPage1">常规路径</button>
    <button @click="fnClickPage2">qiankun-嵌套路由</button>
    <router-view></router-view>
    <div id="qk-b-container"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    fnClickPage1(){
      this.$router.push("/normal")
    },
    fnClickPage2(){
      this.$router.push("/qk-b")
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > button {
  margin: 20px;
}

#subapp-viewport{
  height: 300px;
  width: 300px;
}
</style>
