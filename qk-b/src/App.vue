<!--
 * @Author: 赵顺陈
 * @Date: 2021-10-25 11:26:18
 * @LastEditors: 赵顺陈
 * @LastEditTime: 2021-10-28 10:25:27
 * @Description: 
-->
<template>
  <div class="container">
    <h2>应用-B</h2>
    <button @click="fnClick">加载C应用</button>
    <div id="qk-c-container"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    fnClick(){
      this.$router.push('/qk-c')
    }
  },

}
</script>

<style>
.container{
  margin: 50px 0;
}

.container > div{
  margin: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
