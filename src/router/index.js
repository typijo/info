import Vue from 'vue'
import Router from 'vue-router'

import PageIntro from '@/components/Page-Intro.vue'
import PagePosts from '@/components/Page-Posts.vue'
import PagePapers from '@/components/Page-Papers.vue'
import PageProjects from '@/components/Page-Projects.vue'
import PageStuffs from '@/components/Page-Stuffs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: PageIntro
    },
    {
      path: '/posts',
      name: 'posts',
      component: PagePosts
    },
    {
      path: '/works/papers',
      name: 'papers',
      component: PagePapers
    },
    {
      path: '/works/projects',
      name: 'projects',
      component: PageProjects
    },
    {
      path: '/works/stuffs',
      name: 'stuffs',
      component: PageStuffs
    }
  ]
})
