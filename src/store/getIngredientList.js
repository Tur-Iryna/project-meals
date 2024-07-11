import { defineStore } from "pinia";
import IngredientListApi from "@/api/ingredientList";

export const useGetIngredientList = defineStore('getIngredientList',{
	state:()=>({
		ingredientsList : [],
		loading : false
	}),
	actions:{
		async getIngredientsItemsList(ingredient){
			try{
				this.loading = true;
				const params = {i : ingredient}
				const data = await IngredientListApi.getIngredientList(params)
				this.ingredientsList = data.meals;
			}catch(error){
                console.log('Error', error);
			}finally{
				this.loading = false;
			}
		   }
	}
});
