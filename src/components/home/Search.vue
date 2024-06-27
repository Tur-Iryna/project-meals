<template>
	<div class="search-inner">
		<div class="search-inner__box">
			<input
				v-model="searchQuery"
				class="search-inner__input"
				placeholder="Enter name of meals"
			/>
			<button @click="searchMeal(searchQuery)" class="search-inner__btn">
				<img src="../../assets/images/icons/search.svg" alt="" />
			</button>
		</div>
		<p class="search-inner__text">What are you favorite cuisines?</p>
	</div>
</template>

<script>
import { useGetIngredientsList } from "@/store/getIngredientsList";
import { mapActions, mapState } from "pinia";

export default {
	data() {
		return {
			searchQuery: "",
		};
	},
	computed: {
		...mapState(useGetIngredientsList, ["ingredientsList"]),
	},
	methods: {
		...mapActions(useGetIngredientsList, ["getIngredientsItemsList"]),
		searchMeal(searchQuery) {
			this.$emit("searchMeals", searchQuery);
			this.$router.push({
				path: "/search-results",
				query: { q: this.searchQuery },
			});
		},
	},
};
</script>

<style lang="scss">
.search-inner {
	&__box {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin-bottom: 20px;
	}
	&__input {
		width: 360px;
		height: 40px;
		border-radius: 20px;
		padding: 10px 0 10px 20px;
		outline: none;
		&::placeholder {
			font-family: "Regular";
		}
	}
	&__btn {
		background-color: $white-color;
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__text {
		color: $white-color;
		font-size: 21px;
		line-height: 25px;
		margin-left: 30px;
	}
}
</style>
