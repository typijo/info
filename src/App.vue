<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <Menu />
      </el-header>
      <el-main>
        <transition name="tr_appear" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
      <el-footer id="footer">
        2022 YAMAKOSHI Takahiro&nbsp;&nbsp;&nbsp;&nbsp;Contact: @typijo（twitter）&nbsp;&nbsp;t.yama.pijotts★gmail.com（★は@に）
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

.tr_appear-enter {
  opacity: 0;
}

.tr_appear-enter-to {
  opacity: 1;
}

.tr_appear-enter-active {
  transition: all 500ms;
}

.tr_appear-leave {
  opacity: 1;
}

.tr_appear-leave-to {
  opacity: 0;
}

.tr_appear-leave-active {
  transition: all 200ms;
}
</style>
