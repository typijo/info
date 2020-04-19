<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item
        index="about" :route="{ name: 'about' }">About</el-menu-item>
      <el-menu-item
        index="papers" :route="{
          name: 'articles', params: { category: 'papers' }
        }">Papers</el-menu-item>
      <el-menu-item
        index="projects" :route="{
          name: 'articles', params: { category: 'projects' }
        }">Projects</el-menu-item>
      <el-menu-item
        index="stuffs" :route="{
          name: 'articles', params: { category: 'stuffs' }
        }">Stuffs</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: ''
    }
  },
  mounted () {
    this.activeIndex = this.$route.name
  }
}
</script>

<style>
</style>
