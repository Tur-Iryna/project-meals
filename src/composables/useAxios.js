import axios from 'axios'
import { notify } from '@kyvg/vue3-notification'
import { useGetSelectCategory } from '@/store/SelectCategoryStore'
import { useGetDetailsByMeals } from '@/store/MealDetailsStore'
import { useGetIngredientList } from "@/store/IngredientListStore";

export function http (method, url, params, header, isCustomError = false) {
	method = method.toLowerCase()
	const config = {
	  method: method,
	  url
	}
	if (method === 'get') {
	  config.params = params
	} else if (method === 'post' || method === 'put' || method === 'delete' || method === 'patch') {
	  config.data = params
	}
	config.headers = {... header }
	return new Promise((resolve, reject) => {
	  return axios(config)
		.then(response => {
		  resolve(response)
		})
		.catch(error => {
		  if (error.response && !isCustomError) {
			switch (error.response.status) {
			  case 302:
				reject(error.response.data)
				break
			  case 400:
				notify(error.response.data.message)
				reject(error)
				break
			  case 401:
				notify( error.response.data.message)
				let store
				if (url.includes('category')) {
					store = useGetSelectCategory()
				  } else if (url.includes('details')) {
					store = useGetDetailsByMeals()
				  }else if (url.includes('search-results')){
					store = useGetIngredientList()
				  }
				if(store){
					store.logout()
				}
				reject(error)
				break
			  case 403:
				notify(error.response.data.message)
				reject(error.response.data)
				break
			  case 404:
				let message = error.response
				  && error.response.data
				  && error.response.data.message
				  ? error.response.data.message
				  : 'Endpoint is not found'

				notify(message)
				reject({
				  ...error.response.data,
				  status: error.response.status
				})
				break
			  case 405:
				notify(error?.response?.data?.message)
				reject(error)
				break
			  case 422:
				notify(error?.response?.data?.message)
				reject({
				  ...error.response.data,
				  status: error.response.status
				})
				break
			  case 429:
				notify(error.response?.data?.message)
				reject(error)
				break
			  case 417:
				notify(error.response?.data?.message)
				reject(error)
				break
			  case 500:
				notify(error.response?.data?.message)
				reject(error)
				break
			  default:
				notify(error.response)
				reject(error)
				break
			}
		  } else if (isCustomError) {
			reject(error)
		  } else {
			console.error(error)
			reject(error)
		  }
		})
	})
  }

