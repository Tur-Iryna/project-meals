import { defineStore } from "pinia";
import RandomListApi from "@/api/randomList";

export const useGetRandomList = defineStore('getRandomList', {
  state: () => ({
    randomMealsList: [],
	loading:false
  }),
  actions: {
    async getRandomMeals() {
      try {
		this.loading = true;
        const data = await RandomListApi.getRandomList();
        this.randomMealsList = data.meals;
		return data;
      } catch (error) {
        console.error("Error fetching random meals:", error);
      }finally{
		this.loading = false;
	  }
    }
  }
});

