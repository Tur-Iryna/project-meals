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
	</div>
</template>

<script>
import { useGetSelectCategory } from "@/store/getSelectCategory";
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
		...mapState(useGetDetailsByMeals, ["mealsInfo"]),
		itemsMealsList() {
			return this.mealsList;
		},
	},
	methods: {
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
		selectMeals(mealsId) {
			this.$emit("selectMeals", mealsId);
		},
	},
};
</script>

<style lang="scss">
.base-list {
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
	&__name {
		font-size: 27px;
		line-height: 28px;
	}
	&__title {
		font-size: 20px;
		text-align: center;
		color: $black-color;
	}
}
</style>
