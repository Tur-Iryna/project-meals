import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import MealDetails from '../views/MealDetails.vue';
import Ingredients from '../views/Ingredients.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
     children : [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: Ingredients
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      },
     ]
    },
    
  ]
})

export default router
