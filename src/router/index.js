import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CategoriesListPage from '@/views/CategoriesListPage.vue'
import MealDetailPage from '@/views/MealDetailPage.vue'
import SearchResultPage from '@/views/SearchResultPage.vue'
import ErrorPage from '@/views/ErrorPage.vue'

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
      component: MealDetailPage
    },
	{
		path: '/search-results',
		name: 'search',
		component: SearchResultPage
	  },
	  {
		path: '/:pathMatch(.*)*',
		name: 'error',
		component: ErrorPage
	  },
  ]
})

export default router
