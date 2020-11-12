import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/child-1'
  },
  {
    path: '/parent-route',
    component: () => import('@/views/ParentRoute.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'child-1'
      },
      {
        path: 'child-1',
        component: () => import('@/views/ChildOne.vue')
      },
      {
        path: 'child-2',
        component: () => import('@/views/ChildTwo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
