import { defineStore } from "pinia";
import IngredientListApi from "@/api/ingredientList";

export const useGetIngredientList = defineStore('getIngredientList',{
	state:()=>({
		ingredientsList : [],
	}),
	actions:{
		async getIngredientsItemsList(ingredient){
			try{
				const params = {i : ingredient}
				const data = await IngredientListApi.getIngredientList(params)
				this.ingredientsList = data.meals;
			}catch(error){
                console.log(error)
			}
		   }
	}
});
