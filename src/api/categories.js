import ApiBase from "./apiBase";
import { http } from '@/composables/useAxios';

class CategoriesApi extends ApiBase{
	constructor(){
		super()
		this.resource = 'categories.php'
	}

	async getCategoriesData(params) {
		const url = `${ApiBase.baseApiUrl()}/${this.resource}`;
		try {
		  const response = await http('get', url, params);
		  return response.data;
		} catch (error) {
		  throw new Error('Error fetching cards: ' + error.message);
		}
	  }
}

export default new CategoriesApi()
