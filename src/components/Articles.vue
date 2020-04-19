<template>
  <div>
    <h1>{{ this.title }} </h1>
    <div v-if="this.posts.length > 0">
      <Entry
        v-for="post in this.posts" v-bind:key="post" :src="post"/>
    </div>
    <div v-else>
      <span class="noentry">No article.</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Entry from './Entry.vue'

const category2title = {
  'papers': '論文',
  'projects': 'プロジェクト',
  'stuffs': '雑多なもの',
  '_init': ''
}

const loadDocs = (obj) => {
  obj.$set(obj, 'title', category2title[obj.category])

  axios
    .get(`./static/docs/${obj.category}/list.json`)
    .then((res) => {
      res.data.forEach((fname) => {
        var path = `./static/docs/${obj.category}/${fname}`
        obj.posts.push(path)
      })
    }).catch((e) => {
      console.warn('list not found')
    })
}

export default {
  props: ['category'],
  components: {
    Entry
  },
  mounted () {
    loadDocs(this)
  },
  watch: {
    category: function () {
      this.posts = []
      loadDocs(this)
    }
  },
  data () {
    return {
      posts: [],
      title: category2title['_init']
    }
  }
}
</script>

<style>
</style>
