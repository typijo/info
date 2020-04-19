<template>
  <el-card class="entry">
    <div slot="header">
      <span class="entry-title">{{title}}</span>
      <span class="entry-date">{{date}}</span>
    </div>
    <div v-html="content_parsed" class="entry-content"/>
  </el-card>
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
      'title': '',
      'date': '',
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
      return marked(this.content)
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
  float: right;
  color: #999;
}

.entry-content {
  text-align: left;
}
</style>
