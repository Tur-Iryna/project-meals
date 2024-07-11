import {defineStore} from 'pinia';
import SelectCategoryApi from '@/api/selectCategory';

export const useGetSelectCategory = defineStore('getSelectCategory',{
	state:()=>({
		itemsCategoryList : [],
		category : null,
		loading:false
	}),
	actions:{
		async getItemsListByCategory (category){
			try{
				this.loading = true;
				this.category = category;
				const params = { c: category };
				const data = await SelectCategoryApi.getSelectCategory(params)
				this.itemsCategoryList = data.meals;
				return data;
			}catch(error){
                console.log('Error', error)
			}finally{
				this.loading = false;
			}
		}
	}
});
