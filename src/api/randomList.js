import ApiBase from "./apiBase";
import { http } from '@/composables/useAxios';

class RandomListApi extends ApiBase{
	constructor(){
		super();
		this.resource = 'random.php'
	}

	async getRandomList() {
		const url = `${ApiBase.baseApiUrl()}/${this.resource}`;
		try {
		  const response = await http('get', url);
		  return response.data;
		} catch (error) {
		  throw new Error('Error fetching filters: ' + error.message);
		}
	  }
}

export default new RandomListApi()
