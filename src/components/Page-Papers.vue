<template>
  <div>
    <Entry
      v-for="post in posts" v-bind:key="post.src" :src="post.src"/>
  </div>
</template>

<script>
import Entry from './Entry.vue'

var posts = [
  {
    src: './static/docs/papers/test.md'
  }
]

export default {
  components: {
    Entry
  },
  data () {
    return {
      posts
    }
  }
}
</script>

<style>
</style>
