<template>
  <div>
    <h1>This is YAMAKOSHI Takahiro's page.</h1>
    福井高専から名大に編入しました。<a href="https://shobu-law.com">しょうぶ弁護士事務所</a>と協同し契約書レビューサービス<router-link :to="{name: 'projects', hash: '#_02_legalai'}">LegalAI</router-link>の開発に携わっていました。現在は同事務所に勤務し、法律実務を学んでいます。
    <section>
      <h3>Programming Languages</h3>
      <Cards :targets="proglangs" :cols="cols" v-bind:id="proglangs"/>
      <h3>Libraries</h3>
      <Cards :targets="libraries" :cols="cols" v-bind:id="libraries"/>
      <h3>Development Environments</h3>
      <Cards :targets="envs" :cols="cols" v-bind:id="envs"/>
      <h3>その他</h3>
      <ul>
        <li>ICPCアジア地区予選に参加 (
          <a href="https://icpc.iisf.or.jp/2015-tsukuba/">2015</a>: tebasaki,
          <a href="https://icpc.iisf.or.jp/2016-tsukuba/">2016</a>: tebamoto,
          <a href="https://icpc.iisf.or.jp/2017-tsukuba/">2017</a>: tebanaka )</li>
        <li><a href="https://sites.google.com/view/nu-mds/home/grad-program">実践データサイエンティスト育成プログラム</a>でTAとして活動</li>
        <li>タイ・カセサート大学の<a href="https://www.cpe.ku.ac.th/?page_id=2007" target="_blank">Asanee研究室</a>でタイ語の自然言語処理を研究</li>
      </ul>
    </section>
    <section>
      <h3>Hobbies</h3>
      <Cards :targets="hobbies" :cols="cols" v-bind:id="hobbies"/>
    </section>
  </div>
</template>

<script>
import Cards from './Cards.vue'

import _ from 'lodash'

const calcCols = function () {
  var width = window.innerWidth
  return Math.max(Math.floor(width / 280), 1)
}

export default {
  components: {Cards},
  data () {
    return {
      cols: calcCols(),
      proglangs: [
        {
          img: require('@/assets/python.svg'),
          alt: 'Python',
          desc: '研究で機械学習系のライブラリを触っています。'
        },
        {
          img: require('@/assets/js.svg'),
          alt: 'JavaScript',
          desc: 'LegalAIプロジェクト関係で主に使っています。'
        },
        {
          img: require('@/assets/cpp.svg'),
          alt: 'C++',
          desc: 'かつて競プロで使っていました。また<a href="#/papers#_01_coordination">並列構造解析</a>の研究でも使っていました。'
        },
        {
          img: require('@/assets/java.svg'),
          alt: 'Java',
          desc: '高専時代アプリ開発に使用していました'
        }
      ],
      libraries: [
        {
          img: require('@/assets/tf.svg'),
          alt: 'TensorFlow',
          desc: '最近の研究で使っています。'
        },
        {
          img: require('@/assets/sklearn.svg'),
          alt: 'TensorFlow',
          desc: '研究その他もろもろで使っています。'
        },
        {
          img: require('@/assets/chainer.svg'),
          alt: 'Chainer',
          desc: '<a href="#/papers#_01_coordination">並列構造解析</a>の研究で使っていました。'
        },
        {
          img: require('@/assets/keras.svg'),
          alt: 'Keras',
          desc: 'Keras. インターンのプロジェクトで触ったことがあります。（TF2.0でも実質触っているが）'
        }
      ],
      envs: [
        {
          img: require('@/assets/node.svg'),
          alt: 'Node',
          desc: '<a href="#/projects/#_02_legalai">LegalAI</a>のサーバサイドで使用しています。'
        },
        {
          img: require('@/assets/aws.svg'),
          alt: 'Amazon Web Services',
          desc: '<a href="#/projects/#_02_legalai">LegalAI</a>のインフラで使用しています。'
        },
        {
          img: require('@/assets/gcp.svg'),
          alt: 'Google Cloud Platform',
          desc: '<a href="#/projects/#_02_legalai">LegalAI</a>の一部機能で使用しています。'
        },
        {
          img: require('@/assets/react.svg'),
          alt: 'React',
          desc: 'ReactJS：<a href="#/projects/#_02_legalai">LegalAI</a>のフロントで使用、動作理解のために勉強しています。'
        },
        {
          img: require('@/assets/logo.png'),
          alt: 'Vue.js',
          desc: 'Vue.js：ReactJSと関連して勉強しています。このサイトもVueで作っています。'
        },
        {
          img: require('@/assets/android.svg'),
          alt: 'Android SDK',
          desc: '高専時代Androidアプリを開発していました'
        }
      ],
      hobbies: [
        {
          img: require('@/assets/shiren.png'),
          alt: 'ローグライク',
          desc: 'ローグライク：ヘタレシレンジャー。勝率はお察し'
        },
        {
          img: require('@/assets/langs.png'),
          alt: '自然言語学習',
          desc: '言語学習：Duolingoでいろいろな言語を学んでいますが、会話力はお察し'
        },
        {
          img: require('@/assets/car.png'),
          alt: 'ドライブ',
          desc: 'ドライブ：趣味と実益を兼ねてMTの小型車を乗り回しています'
        }
      ]
    }
  },
  methods: {
    handleResize: _.debounce(function () {
      this.$set(this, 'cols', calcCols())
    }, 100)
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
</style>
