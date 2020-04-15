<template>
  <el-container class="entry">
    <el-header class="entry-header">
      <el-container>
        <el-main><div class="entry-title">{{title}}</div></el-main>
        <el-aside><div class="entry-date">{{date}}</div></el-aside>
      </el-container>
    </el-header>
    <el-main>
      <div v-html="content_parsed" class="entry-content"/>
    </el-main>
  </el-container>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

export default {
  props: [
    'src'
  ],
  data () {
    return {
      'title': 'テスト項目',
      'date': '2020/1/1',
      'content': ''
    }
  },
  mounted () {
    this.src && this.load(this.src)
  },
  watch: {
    src (path) {
      path && this.load(path)
    }
  },
  computed: {
    content_parsed: function () {
      return marked(this.content, {sanitize: true})
    }
  },
  methods: {
    load: function (path) {
      var vuethis = this
      axios.get(path)
        .then((res) => {
          var sents = res.data.split('\n')
          vuethis.title = sents[0]
          vuethis.date = sents[1]
          vuethis.content = sents.slice(3).join('\n')
        })
        .catch((err) => { console.log(err) })
    }
  }
}
</script>

<style>
.entry {
  border: 1px solid #eee;
  margin: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.entry-header {
  border-bottom: 1px solid #eee;
}

.entry-title {
  text-align: left;
  font-size: 1.25em;
}

.entry-date {
  text-align: right;
  color: #999;
}

.entry-content {
  text-align: left;
}
</style>
