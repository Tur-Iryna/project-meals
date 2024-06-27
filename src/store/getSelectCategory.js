import {defineStore} from 'pinia';

export const useGetSelectCategory = defineStore('getSelectCategory',{
	state:()=>({
		itemsCategoryList : [],
		category : null
	}),
	actions:{
		async getItemsListByCategory (category){
			try{
				this.category = category;
				const response = await fetch(`${import.meta.env.VITE_BASE_URL}/filter.php?c=${category}`)
				const data = await response.json();
				this.itemsCategoryList = data.meals;
				return data;
			}catch(error){
            console.log('Error', error)
			}
		}
	}
})
