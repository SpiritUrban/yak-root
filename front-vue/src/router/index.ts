import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import EditComponent from '../components/post/Edit.vue';
import CreateComponent from '@/components/post/Create.vue';
import PostComponent from '@/components/post/Post.vue';


const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'home' } },
  { path: '/home', name: 'home', component: Home },
  { path: '/create', name: 'Create', component: CreateComponent },
  { path: '/edit/:id', name: 'Edit', component: EditComponent },
  { path: '/post/:id', name: 'Post', component: PostComponent },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
