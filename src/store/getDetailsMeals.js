import {defineStore} from 'pinia';
import DetailsMealsApi from '@/api/detailsMeals';

export const useGetDetailsByMeals = defineStore('getDetailsByMeals',{
	state:()=>({
		mealsInfo : [],
		loading:false,
	}),
	actions:{
		async getDetailsInfoMeals(idMeals){
			try{
				this.loading = true;
				const params = {i : idMeals};
                const data = await DetailsMealsApi.getDetailsInfoMeals(params)
				this.mealsInfo = data.meals;
                return data;
			}catch(error){
            console.log('Error', error);
			}finally{
				this.loading = false;
			}

		},
	}
});
