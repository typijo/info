<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <Menu />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer id="footer">
        (c) 2020 typijo
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#footer {
  text-align: center;
}

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

h2 {
  text-align: left;
}
</style>
