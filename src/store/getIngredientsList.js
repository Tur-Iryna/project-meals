import { defineStore } from "pinia";

export const useGetIngredientsList = defineStore('getIngredientsList',{
	state:()=>({
		ingredientsList : [],
	}),
	actions:{
		async getIngredientsItemsList(ingredient){
			try{
				const response = await fetch(`${import.meta.env.VITE_BASE_URL}/filter.php?i=${ingredient}`)
				const data = await response.json();
				console.log(data)
				this.ingredientsList = data.meals;
			}catch(error){
                console.log(error)
			}
		   }
	}
})
