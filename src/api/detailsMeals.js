import ApiBase from "./apiBase";
import { http } from '@/composables/useAxios';

class DetailsMealsApi extends ApiBase{
	constructor(){
		super()
		this.resource = 'lookup.php'
	}

	async getDetailsInfoMeals(params) {
		const url = `${ApiBase.baseApiUrl()}/${this.resource}`;
		try {
		  const response = await http('get', url, params);
		  return response.data;
		} catch (error) {
		  throw new Error('Error fetching filters: ' + error.message);
		}
	  }
}

export default new DetailsMealsApi()
