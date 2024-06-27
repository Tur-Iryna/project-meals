import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CategoriesListPage from '@/views/CategoriesListPage.vue'
import DetailsInfoPage from '@/views/DetailsInfoPage.vue'
import SearchResultPage from '@/views/SearchResultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/category/:nameCategory',
      name: 'category',
      component: CategoriesListPage
    },
    {
      path: '/details/:mealsId',
      name: 'details',
      component: DetailsInfoPage
    },
	{
		path: '/search-results',
		name: 'search',
		component: SearchResultPage
	  }
  ]
})

export default router
