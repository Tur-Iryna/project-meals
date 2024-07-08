import {defineStore} from 'pinia';
import SelectCategoryApi from '@/api/selectCategory';

export const useGetSelectCategory = defineStore('getSelectCategory',{
	state:()=>({
		itemsCategoryList : [],
		category : null
	}),
	actions:{
		async getItemsListByCategory (category){
			try{
				this.category = category;
				const params = { c: category };
				const data = await SelectCategoryApi.getSelectCategory(params)
				this.itemsCategoryList = data.meals;
				return data;
			}catch(error){
            console.log('Error', error)
			}
		}
	}
})
