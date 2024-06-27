<template>
	<div class="details-info">
		<div class="container">
			<h2 class="details-info__title title">Details Meals</h2>
			<div class="details-info__inner">
				<div class="details-info__content">
					<img
						:src="mealInfo.strMealThumb"
						class="details-info__img"
						alt=""
					/>
					<div class="details-info__text">
						<h3 class="details-info__name">
							{{ mealInfo.strMeal }}
						</h3>
						<span class="details-info__category">
							CATEGORY:
							{{ mealInfo.strCategory }}</span
						>
						<a class="details-info__source"
							><span>Source:</span> {{ mealInfo.strYoutube }}</a
						>
						<div class="details-info__box">
							<h3 class="details-info__subtitle">Ingredients:</h3>
							<ul class="details-info__ingredients">
								<li
									v-for="ingredient in ingredientsList"
									:key="ingredient.index"
									class="details-info__ingredient"
								>
									<img
										:src="`www.themealdb.com/images/ingredients/${ingredient}-Small.png`"
										alt=""
									/>
									{{ ingredient }}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="details-info__box">
					<h3 class="details-info__subtitle">Measure:</h3>
					<ul class="details-info__items">
						<li
							v-for="measure in measureList"
							:key="measure.index"
							class="details-info__measure"
						>
							{{ measure }}
						</li>
					</ul>
				</div>
				<div class="details-info__instructions">
					<h2 class="details-info__title">Instructions:</h2>
					<p class="details-info__descr">
						{{ mealInfo.strInstructions }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useGetDetailsByMeals } from "@/store/getDetailsMeals";
import { mapState, mapActions } from "pinia";

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
				if (ingredient) {
					ingredients.push(ingredient);
				}
			}
			return ingredients;
		},
		measureList() {
			const measureItems = [];
			for (let i = 1; i < 20; i++) {
				const measure = this.mealInfo[`strMeasure${i}`];
				if (measure) {
					console.log(measure);
					measureItems.push(measure);
				}
			}
			return measureItems;
		},
	},
	methods: {
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
	},
};
</script>

<style lang="scss">
.details-info {
	padding: 50px 0 70px;
	&__inner {
		background-color: $green-color;
		box-shadow: rgba(50, 94, 64, 0.2) 0px 2px 15px 0px;
		padding: 50px 60px;
	}
	&__img {
		max-width: 400px;
		height: 100%;
	}
	&__content {
		display: flex;
		align-items: center;
		gap: 50px;
		margin-bottom: 40px;
	}
	&__name {
		font-size: 30px;
		margin-bottom: 30px;
	}
	&__category {
		display: inline-block;
		width: 100%;
		font-family: "Bold";
		margin-bottom: 20px;
	}
	&__text {
		padding-top: 30px;
	}
	&__ingredients {
		margin-bottom: 30px;
	}
	&__ingredient {
		font-family: "Roboto";
	}
	&__source {
		font-size: 20px;
		& > span {
			font-family: "Bold";
			display: inline-block;
			margin-bottom: 20px;
		}
	}
	&__title {
		margin-bottom: 20px;
		font-size: 20px;
	}
	&__subtitle {
		font-size: 20px;
	}
	&__descr {
		text-align: start;
	}
	&__items {
		display: grid;
		grid-template-columns: repeat(3, 220px);
		column-gap: 20px;
		row-gap: 10px;
		margin-bottom: 20px;
	}
	&__measure {
		font-family: "Roboto";
	}
}
</style>
