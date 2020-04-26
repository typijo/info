<template>
  <div>
    <h1>プロジェクト</h1>
    <div v-if="this.posts && this.posts.length > 0">
      <Entry
        v-for="post in this.posts" v-bind:key="post" :src="post"/>
    </div>
    <div v-else>
      <span class="noentry" v-if="this.posts">No article.</span>
      <span v-else></span>
    </div>
  </div>
</template>

<script>
import Entry from './Entry.vue'
import {loadDocs} from '../libs/loaders'

const cat = 'projects'

export default {
  components: {
    Entry
  },
  mounted () {
    loadDocs(this, cat)
  },
  data () {
    return {
      posts: undefined
    }
  }
}
</script>

<style>
</style>
