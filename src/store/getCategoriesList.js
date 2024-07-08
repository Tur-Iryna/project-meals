import { defineStore } from 'pinia';
import CategoriesApi from '@/api/categories';

export const useGetCategories = defineStore('getCategories',{
	state: ()=>({
		categoriesList:[],
		loading:false,
	}),
	actions:{
		async getCategoriesList(){
			try{
				this.loading = true;
				const data = await CategoriesApi.getCategoriesData()
				this.categoriesList = data.categories;
			}catch(error){
				console.log('Error', error)
			}finally{
				this.loading = false;
			}
		}
	}
})
