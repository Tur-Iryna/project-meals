import {defineStore} from 'pinia';
import DetailsMealsApi from '@/api/detailsMeals';

export const useGetDetailsByMeals = defineStore('getDetailsByMeals',{
	state:()=>({
		mealsInfo : [],
		videoUrl : '',
		loading:false,
	}),
	actions:{
		async getDetailsInfoMeals(idMeals){
			try{
				this.loading = true;
				const params = {i : idMeals};
                const data = await DetailsMealsApi.getDetailsInfoMeals(params)
				this.mealsInfo = data.meals;
				if (data.meals[0].strYoutube) {
					const videoId = data.meals[0].strYoutube.split("v=")[1];
					this.videoUrl = `${import.meta.env.VITE_VIDEO_URL}/${videoId}`;
				}else{
					this.videoUrl = '';
				}
				console.log(this.videoUrl)
                return data;
			}catch(error){
            console.log('Error', error);
			}finally{
				this.loading = false;
			}

		},
	}
});
