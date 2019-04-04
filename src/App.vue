<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div class="box">你好</div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  width:100px;
  height:100px;
  line-height: 100px;
  text-align: center;
  padding: 30px;
  border: 10px solid #2c3e50;
  box-sizing: content-box;
  background-color: pink;
}
</style>
