<template>
	<div class="ingredients">
		<div class="container">
			<h2 class="ingredients__title title">
				Search Results for "{{ searchQuery }}"
			</h2>
			<div v-if="!loading" class="ingredient__inner">
				<BaseMealsList
					v-if="ingredientsList"
					:mealsList="ingredientsList"
					@searchMeals="searchMeals"
				/>
				<div v-else class="details-info__loading">
					Not found meals...Please try again
				</div>
			</div>
			<div v-else class="ingredients-loading">Loading...</div>
		</div>
	</div>
</template>

<script>
import BaseMealsList from "@/components/global/BaseMealsList.vue";
import { useGetIngredientList } from "@/store/IngredientListStore";
import { mapActions, mapState } from "pinia";

export default {
	components: {
		BaseMealsList,
	},
	computed: {
		...mapState(useGetIngredientList, ["ingredientsList", "loading"]),
		searchQuery() {
			return this.$route.query.q || "";
		},
	},
	methods: {
		...mapActions(useGetIngredientList, ["getIngredientsItemsList"]),
		searchMeals() {
			this.getIngredientsItemsList(this.searchQuery);
		},
	},
	watch: {
		searchQuery: {
			immediate: true,
			handler(newQuery) {
				if (newQuery) {
					this.searchMeals();
				}
			},
		},
	},
};
</script>

<style lang="scss">
.ingredients {
	margin-top: 60px;
	&-loading {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>

