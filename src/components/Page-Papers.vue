<template>
  <div>
    <h1>論文</h1>
    <div v-if="this.posts && this.posts.length > 0">
      <Entry
        v-for="post in this.posts" v-bind:key="post.name"
        :src="post.path" :hash="post.name"
        :isOpened="opened === '#' + post.name"/>
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

const cat = 'papers'

export default {
  components: {
    Entry
  },
  mounted () {
    loadDocs(this, cat)

    var hash = this.$route.hash
    if (hash) {
      this.opened = hash
      setTimeout(() => {
        this.$scrollTo(hash)
      }, 1000)
    } else {
      this.opened = undefined
    }
  },
  data () {
    return {
      posts: undefined,
      opened: undefined
    }
  }
}
</script>

<style>
</style>
