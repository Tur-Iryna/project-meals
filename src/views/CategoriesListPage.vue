<template>
	<div class="details">
		<div class="container">
			<h2 class="details__name title">Category: {{ category }}</h2>
			<BaseMealsList
				:itemsCategoryList="itemsCategoryList"
				@selectMeals="selectMeals"
			/>
		</div>
	</div>
</template>

<script>
import { useGetSelectCategory } from "@/store/getSelectCategory";
import { useGetDetailsByMeals } from "@/store/getDetailsMeals";
import BaseMealsList from "@/components/global/BaseMealsList.vue";
import { mapState, mapActions } from "pinia";

export default {
	components: {
		BaseMealsList,
	},
	computed: {
		...mapState(useGetSelectCategory, ["itemsCategoryList", "category"]),
		...mapState(useGetDetailsByMeals, ["mealsInfo"]),
	},
	methods: {
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
		selectMeals(mealsId) {
			console.log(mealsId);
			this.getDetailsInfoMeals(mealsId);
		},
	},
};
</script>

<style lang="scss"></style>
