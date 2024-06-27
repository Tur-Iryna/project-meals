import { defineStore } from "pinia";

export const useGetRandomList = defineStore('getRandomList', {
  state: () => ({
    randomMealsList: [],
  }),
  actions: {
    async getRandomMeals() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/random.php`);
        const data = await response.json();
        this.randomMealsList = data.meals;
		return data;
      } catch (error) {
        console.error("Error fetching random meals:", error);
      }
    }
  }
});

