import { defineStore } from "pinia";
import RandomListApi from "@/api/randomList";

export const useGetRandomList = defineStore('getRandomList', {
  state: () => ({
    randomMealsList: [],
  }),
  actions: {
    async getRandomMeals() {
      try {
        const data = await RandomListApi.getRandomList();
        this.randomMealsList = data.meals;
		return data;
      } catch (error) {
        console.error("Error fetching random meals:", error);
      }
    }
  }
});

