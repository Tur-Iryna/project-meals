<template>
	<Loader v-if="loading" />
	<div>
		<Header />
		<router-view />
	</div>
</template>

<script>
import Header from "./components/global/Header.vue";
import Loader from "./components/global/Loader.vue";
import { useGetCategories } from "./store/CategoriesListStore";
import { mapState } from "pinia";

export default {
	components: {
		Header,
		Loader,
	},
	computed: {
		...mapState(useGetCategories, ["loading"]),
	},
};
</script>


