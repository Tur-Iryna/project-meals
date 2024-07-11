<template>
	<div class="details-ingredients">
		<div class="details-ingredients__box">
			<h3 class="details-ingredients__subtitle title-ingredients">
				Ingredients:
			</h3>
			<ul class="details-ingredients__info">
				<li
					v-for="item in ingredientsList"
					:key="item.index"
					class="details-ingredients__ingredient"
				>
					{{ item.ingredient }} / {{ item.measure }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useGetDetailsByMeals } from "@/store/getDetailsMeals";

export default {
	computed: {
		...mapState(useGetDetailsByMeals, ["mealsInfo"]),
		mealInfo() {
			return this.mealsInfo[0];
		},
		ingredientsList() {
			const ingredients = [];
			for (let i = 1; i < 20; i++) {
				const ingredient = this.mealInfo[`strIngredient${i}`];
				const measure = this.mealInfo[`strMeasure${i}`];
				if (ingredient && measure) {
					ingredients.push({ ingredient, measure });
				}
			}
			return ingredients;
		},
	},
	methods: {
		...mapActions(useGetDetailsByMeals, [
			"getDetailsInfoMeals",
			"getIngredientsImg",
		]),
	},
};
</script>

<style lang="scss">
.details-ingredients {
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-radius: 20px;
	margin-bottom: 40px;
	&__info {
		display: grid;
		grid-template-columns: repeat(2, 280px);
		margin-bottom: 30px;
	}
	&__ingredient {
		font-family: "Roboto";
		padding-bottom: 5px;
		border-bottom: 1px solid $green-color;
		padding: 10px 35px;
		position: relative;
		&::before {
			content: "";
			position: absolute;
			background-image: url("../../assets/images/icons/check.svg");
			width: 24px;
			height: 24px;
			left: 0;
		}
	}
	&__subtitle {
		font-size: 25px;
		margin-bottom: 30px;
		position: relative;
		margin-bottom: 20px;
	}
}

@media (max-width: 650px) {
	.details-ingredients {
		margin-bottom: 5px;
		&__info {
			grid-template-columns: repeat(1, 240px);
		}
	}
}
</style>
