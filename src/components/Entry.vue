<template>
  <el-card class="entry" :id="hash">
    <div slot="header" @click="active">
      <span v-if="isActive"><i class="el-icon-caret-top" /></span>
      <span v-else><i class="el-icon-caret-bottom" /></span>
      <span class="entry-title">{{title}}</span>
      <span class="entry-date">{{date}}</span>
    </div>
    <transition name="tr_appear">
      <div v-if="isActive" v-html="content_parsed" class="entry-content"/>
    </transition>
  </el-card>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

export default {
  props: [
    'src', 'isOpened', 'hash'
  ],
  data () {
    return {
      'title': '',
      'date': '',
      'content': '',
      'isActive': false
    }
  },
  mounted () {
    this.src && this.load(this.src)
    if (this.isOpened) {
      this.isActive = true
    }
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
    },
    active: function () {
      this.isActive = !this.isActive
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
