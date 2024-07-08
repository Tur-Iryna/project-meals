import {defineStore} from 'pinia';
import DetailsMealsApi from '@/api/detailsMeals';

export const useGetDetailsByMeals = defineStore('getDetailsByMeals',{
	state:()=>({
		mealsInfo : [],
	}),
	actions:{
		async getDetailsInfoMeals(idMeals){
			try{
				const params = {i : idMeals};
                const data = await DetailsMealsApi.getDetailsInfoMeals(params)
				this.mealsInfo = data.meals;
                return data;
			}catch(error){
            console.log(error)
			}
		},
	}
});
