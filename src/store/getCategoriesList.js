import { defineStore } from 'pinia';

export const useGetCategories = defineStore('getCategories',{
	state: ()=>({
		categoriesList:[],
		loading:false,
	}),
	actions:{
		async getCategoriesList(){
			try{
				this.loading = true;
				const response = await fetch(`${import.meta.env.VITE_BASE_URL}/categories.php`)
				if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
				const data = await response.json();
				this.categoriesList = data.categories;
			}catch(error){
				console.log('Error', error)
			}finally{
				this.loading = false;
			}
		}
	}
})
