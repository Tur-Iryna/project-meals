<template>
	<div class="search-inner" v-click-outside="toggleDropdown">
		<div class="search-inner__box">
			<input
				v-model="searchQuery"
				@input="onInput"
				@keydown.enter="searchMeal(searchQuery)"
				class="search-inner__input"
				placeholder="Enter name of ingredient"
			/>
			<button v-if="searchQuery" @click="clearSearch" class="clear-btn">
				<img
					class="search-inner__img"
					src="@/assets/images/icons/close.svg"
					alt=""
				/>
			</button>
			<ul v-if="filteredIngredients.length" class="autocomplete-list">
				<li
					v-for="option in filteredIngredients"
					:key="option.idMeal"
					@click="selectOption(option)"
					class="autocomplete-list__item"
				>
					{{ option.strMeal }}
				</li>
			</ul>
			<button @click="searchMeal(searchQuery)" class="search-inner__btn">
				<img src="../../assets/images/icons/search.svg" alt="" />
			</button>
		</div>
		<p class="search-inner__text">What are you favourite meals?</p>
	</div>
</template>

<script>
import { useGetIngredientList } from "@/store/getIngredientList";
import { useGetDetailsByMeals } from "@/store/getDetailsMeals";
import { mapActions, mapState } from "pinia";

export default {
	data() {
		return {
			searchQuery: "",
			filteredIngredients: [],
		};
	},
	computed: {
		...mapState(useGetIngredientList, ["ingredientsList"]),
	},
	methods: {
		...mapActions(useGetIngredientList, ["getIngredientsItemsList"]),
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
		searchMeal(searchQuery) {
			if (searchQuery) {
				this.$emit("searchMeals", searchQuery);
				this.$router.push({
					path: "/search-results",
					query: { q: this.searchQuery },
				});
			}
		},
		async onInput() {
			await this.getIngredientsItemsList(this.searchQuery);
			this.filterOptions();
		},
		selectOption(option) {
			const mealId = option.idMeal;
			this.getIngredientsItemsList(mealId);
			this.searchQuery = option.idMeal;
			this.filteredIngredients = [];
			this.getDetailsInfoMeals(this.searchQuery);
			this.$router.push({
				name: "details",
				params: { mealsId: this.searchQuery },
			});
		},
		filterOptions() {
			if (this.ingredientsList) {
				this.filteredIngredients = this.ingredientsList.filter(
					(ingredient) =>
						ingredient.strMeal
							.toLowerCase()
							.includes(this.searchQuery.toLowerCase())
				);
			}
		},
		toggleDropdown() {
			this.filteredIngredients = [];
		},
		clearSearch() {
			this.searchQuery = "";
		},
	},
	watch: {
		ingredientsList() {
			this.filterOptions();
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
		position: relative;
		width: 400px;
	}
	&__input {
		width: 100%;
		height: 40px;
		border-radius: 20px;
		padding: 10px 0 10px 20px;
		outline: none;
		position: relative;
		&::placeholder {
			font-family: "Regular";
		}
	}
	&__btn {
		background-color: $white-color;
		border: none;
		border-radius: 50%;
		width: 45px;
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
		margin-left: 28px;
	}
}

.clear-btn {
	background-color: transparent;
	border: none;
	position: absolute;
	right: 52px;
	top: 11px;
	cursor: pointer;
}
.autocomplete-list {
	position: absolute;
	top: 43px;
	left: 9px;
	z-index: 1000;
	background: white;
	border: 1px solid #ccc;
	border-top: none;
	width: 335px;
	max-height: 150px;
	overflow-y: auto;
	margin: 0;
	padding: 10px;
	list-style: none;
	box-sizing: border-box;
	&__item {
		font-family: "Regular";
		font-size: 16px;
		cursor: pointer;
		&:hover {
			background-color: #f0f0f0;
		}
	}
}

@media (max-width: 650px) {
	.search {
		&-inner__box {
			width: 100%;
		}
		&-inner__text {
			margin-left: 0;
		}
	}
	.autocomplete-list {
		width: 224px;
		&__item {
			font-size: 14px;
		}
	}
}

@media (max-width: 450px) {
	.search {
		&-inner__text {
			font-size: 19px;
			margin-left: 0;
		}
		&-inner__btn {
			width: 45px;
		}
		&-inner__input {
			font-size: 16px;
		}
	}
	.autocomplete-list {
		width: 200px;
	}
}
</style>
