<template>
	<div class="base-list">
		<div class="container">
			<div class="base-list__content">
				<router-link
					v-for="item in itemsMealsList"
					:key="item.strCategory"
					class="base-list__item"
					:to="{
						name: 'details',
						params: { mealsId: item.idMeal },
					}"
					@click="selectMeals(item.idMeal)"
					@searchMeals="searchMeals"
				>
					<img
						:src="item.strMealThumb"
						alt=""
						class="base-list__img"
					/>
					<h2 class="base-list__title">{{ item.strMeal }}</h2>
				</router-link>
			</div>
		</div>
		<div class="details-info__loading" v-if="!mealsList">Loading...</div>
	</div>
</template>

<script>
import { useGetSelectCategory } from "@/store/getSelectCategory";
import { useGetIngredientList } from "@/store/getIngredientList";
import { useGetDetailsByMeals } from "@/store/getDetailsMeals";
import { mapState, mapActions } from "pinia";

export default {
	props: {
		mealsList: {
			type: Array,
			required: true,
		},
	},
	computed: {
		...mapState(useGetSelectCategory, ["itemsCategoryList", "category"]),
		...mapState(useGetIngredientList, ["ingredientList"]),
		...mapState(useGetDetailsByMeals, ["mealsInfo"]),
		itemsMealsList() {
			return this.mealsList;
		},
	},
	methods: {
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
		...mapActions(useGetIngredientList, ["getIngredientsItemsList"]),
		selectMeals(mealsId) {
			this.$emit("selectMeals", mealsId);
		},
		searchMeals(searchQuery) {
			this.getIngredientsItemsList(searchQuery);
		},
	},
};
</script>

<style lang="scss">
.base-list {
	padding: 50px 0;
	&__content {
		display: grid;
		grid-template-columns: repeat(4, 260px);
		justify-content: center;
		row-gap: 70px;
		column-gap: 50px;
	}
	&__img {
		margin-bottom: 15px;
		width: 260px;
	}
	&__item {
		border-radius: 30px;
		box-shadow: rgba(68, 102, 58, 0.4) 0px 0px 0px 2px,
			rgba(61, 139, 71, 0.65) 0px 4px 6px -1px,
			rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
		padding: 15px;
	}
	&__name {
		font-size: 27px;
		line-height: 28px;
		font-family: "Medium";
	}
	&__title {
		font-size: 20px;
		text-align: center;
		color: $black-color;
	}
}

@media (max-width: 1240px) {
	.base-list {
		&__content {
			display: grid;
			grid-template-columns: repeat(3, 260px);
			column-gap: 120px;
		}
	}
}

@media (max-width: 1075px) {
	.base-list {
		&__content {
			column-gap: 70px;
		}
	}
}

@media (max-width: 960px) {
	.base-list {
		&__content {
			grid-template-columns: repeat(2, 280px);
		}
	}
}

@media (max-width: 670px) {
	.base-list {
		&__content {
			grid-template-columns: repeat(1, 280px);
		}
	}
}
</style>
