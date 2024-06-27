import {defineStore} from 'pinia';

export const useGetDetailsByMeals = defineStore('getDetailsByMeals',{
	state:()=>({
		mealsInfo : [],
	}),
	actions:{
		async getDetailsInfoMeals(idMeals){
			try{
				const response = await fetch (`${import.meta.env.VITE_BASE_URL}/lookup.php?i=${idMeals}`)
				const data = await response.json();
				this.mealsInfo = data.meals;
				console.log('meals', data)
                return data;
			}catch(error){
            console.log(error)
			}
		}
	}
})
