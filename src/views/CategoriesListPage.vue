<template>
	<div class="categories-list">
		<div class="container">
			<h2 class="categories-list__name title">
				Category: {{ category }}
			</h2>
			<div v-if="!loading" class="categories-list__items">
				<BaseMealsList
					:mealsList="itemsCategoryList"
					@selectMeals="selectMeals"
				/>
			</div>
			<div v-else class="categories-loading">Loading...</div>
		</div>
	</div>
</template>

<script>
import { useGetSelectCategory } from "@/store/getSelectCategory";
import { useGetCategories } from "@/store/getCategoriesList";
import { useGetDetailsByMeals } from "@/store/getDetailsMeals";
import BaseMealsList from "@/components/global/BaseMealsList.vue";
import { mapState, mapActions } from "pinia";

export default {
	components: {
		BaseMealsList,
	},
	async mounted() {
		const nameCategoryLocal =
			this.$route.params.nameCategory ||
			localStorage.getItem("categoryMeals");
		if (nameCategoryLocal) {
			await this.getItemsListByCategory(nameCategoryLocal);
		}
	},
	computed: {
		...mapState(useGetSelectCategory, [
			"itemsCategoryList",
			"category",
			"loading",
		]),
		...mapState(useGetDetailsByMeals, ["mealsInfo"]),
	},
	methods: {
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
		...mapActions(useGetSelectCategory, ["getItemsListByCategory"]),
		...mapActions(useGetCategories, ["getCategoriesList"]),
		selectMeals(mealsId) {
			localStorage.setItem("mealsId", mealsId);
			this.getDetailsInfoMeals(mealsId);
		},
	},
};
</script>

<style lang="scss">
.categories-list {
	margin-top: 50px;
}
</style>
