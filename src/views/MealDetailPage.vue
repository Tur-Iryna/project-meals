<template>
	<div class="details-info">
		<div class="container">
			<h2 class="details-info__title title">Details Meals</h2>
			<div class="details-info__inner">
				<div class="details-info__loading" v-if="!mealInfo">
					Loading...
				</div>
				<AboutMeals v-if="mealInfo" :mealInfo="mealInfo" />
				<IngredientsMeals v-if="mealInfo" :mealInfo="mealInfo" />
				<InstructionsMeals v-if="mealInfo" :mealInfo="mealInfo" />
			</div>
		</div>
	</div>
</template>

<script>
import AboutMeals from "@/components/details/AboutMeals.vue";
import IngredientsMeals from "@/components/details/IngredientsMeals.vue";
import InstructionsMeals from "@/components/details/InstructionsMeals.vue";
import { mapState, mapActions } from "pinia";
import { useGetDetailsByMeals } from "@/store/MealDetailsStore";

export default {
	components: {
		AboutMeals,
		IngredientsMeals,
		InstructionsMeals,
	},
	computed: {
		...mapState(useGetDetailsByMeals, ["mealsInfo"]),
		mealInfo() {
			return this.mealsInfo[0];
		},
	},
	methods: {
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
	},
	async mounted() {
		let mealsId = this.$route.params.mealsId;
		if (mealsId) {
			await this.getDetailsInfoMeals(mealsId);
		}
		window.scrollTo({ top: 0, behavior: "smooth" });
	},
};
</script>

<style lang="scss">
.details-info {
	padding: 30px 0px 70px;
	&__title {
		margin-bottom: 20px;
	}
	&__loading {
		text-align: center;
	}
}
</style>
