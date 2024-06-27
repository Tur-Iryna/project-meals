<template>
	<div class="ingredients">
		<div class="container">
			<h2 class="ingredients__title title">
				Search Results for "{{ searchQuery }}"
			</h2>
			<div class="ingredient__inner">
				<BaseMealsList
					:ingredientsList="ingredientsList"
					@searchMeals="searchMeals"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { useGetIngredientsList } from "@/store/getIngredientsList";
import BaseMealsList from "@/components/global/BaseMealsList.vue";
import { mapActions, mapState } from "pinia";

export default {
	components: {
		BaseMealsList,
	},
	computed: {
		...mapState(useGetIngredientsList, ["ingredientsList"]),
		searchQuery() {
			return this.$route.query.q || "";
		},
	},
	methods: {
		...mapActions(useGetIngredientsList, ["getIngredientsItemsList"]),
		searchMeals(searchQuery) {
			this.getIngredientsItemsList(searchQuery);
		},
	},
};
</script>

<style></style>
