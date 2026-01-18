import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Members from '../pages/Members.vue'
import Practice from '../pages/Practice.vue'
import Cases from '../pages/Cases.vue'
import Contact from '../pages/Contact.vue'
import Location from '../pages/Location.vue'
import Member1 from '../pages/Member1.vue'
import Member2 from '../pages/Member2.vue'
import PracticeDetail from '../pages/PracticeDetail.vue'
import CaseDetail from '../pages/CaseDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    { path: '/practice', component: Practice },
    { path: '/cases', component: Cases },
    { path: '/contact', component: Contact },
    { path: '/location', component: Location },
    { path: '/practice/:title', name: 'PracticeDetail', component: PracticeDetail},
    { path: '/cases/:id', component: CaseDetail,
        meta: {
            showSubHero: false,
            forceScrolled: true,   // 🔥 핵심
        },},
    {
        path: '/members/1',
        component: Member1,
        meta: {
            showSubHero: false,
            forceScrolled: true,   // 🔥 핵심
        },
    },
    {
        path: '/members/2',
        component: Member2,
        meta: {
            showSubHero: false,
            forceScrolled: true,   // 🔥 핵심
        },
    }

  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
