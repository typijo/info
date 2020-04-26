import Vue from 'vue'
import Router from 'vue-router'

import PageIntro from '@/components/Page-Intro.vue'
import PagePapers from '@/components/Page-Papers.vue'
import PageProjects from '@/components/Page-Projects.vue'
import PageStuffs from '@/components/Page-Stuffs.vue'
// import Articles from '@/components/Articles.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: PageIntro
    },
    // {
    //   path: '/articles/:category',
    //   name: 'articles',
    //   component: Articles,
    //   props: true
    // },
    {
      path: '/papers',
      name: 'papers',
      component: PagePapers
    },
    {
      path: '/projects',
      name: 'projects',
      component: PageProjects
    },
    {
      path: '/stuffs',
      name: 'stuffs',
      component: PageStuffs
    }
  ]
})
