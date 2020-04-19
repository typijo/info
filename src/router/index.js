import Vue from 'vue'
import Router from 'vue-router'

import PageIntro from '@/components/Page-Intro.vue'
import Articles from '@/components/Articles.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: PageIntro
    },
    // {
    //   path: '/posts',
    //   name: 'posts',
    //   component: PagePosts
    // },
    {
      path: '/articles/:category',
      name: 'articles',
      component: Articles,
      props: true
    }
  ]
})
