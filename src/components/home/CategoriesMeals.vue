<template>
	<div class="categories" id="categories">
		<div class="container">
			<h3 class="categories__title title">Categories</h3>
			<div class="categories__inner">
				<div v-if="!loading" class="categories__items">
					<router-link
						v-for="item in categoriesList"
						:key="item.idCategory"
						@click="selectCategory(item)"
						:to="{
							name: 'category',
							params: { nameCategory: item.strCategory },
						}"
						class="categories__item"
					>
						<h4 class="categories__name">{{ item.strCategory }}</h4>
						<img
							:src="item.strCategoryThumb"
							class="categories__img"
							alt=""
						/>
					</router-link>
				</div>
				<div v-else class="categories-loading">Loading...</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useGetCategories } from "@/store/getCategoriesList";
import { useGetSelectCategory } from "@/store/getSelectCategory";
import { mapState, mapActions } from "pinia";

export default {
	async mounted() {
		await this.getCategoriesList();
	},
	computed: {
		...mapState(useGetCategories, ["categoriesList", "loading"]),
	},
	methods: {
		...mapActions(useGetCategories, ["getCategoriesList"]),
		...mapActions(useGetSelectCategory, ["getItemsListByCategory"]),
		selectCategory(item) {
			const nameCategory = item.strCategory;
			this.getItemsListByCategory(nameCategory);
			localStorage.setItem("categoryMeals", nameCategory);
		},
	},
};
</script>

<style lang="scss">
.categories {
	padding: 60px 0 240px;
	background-image: url("../../assets/images/bg.png");
	background-repeat: no-repeat;
	background-position: bottom right;
	background-position-y: 114%;
	&__title {
		width: 70px;
	}
	&__items {
		display: grid;
		grid-template-columns: repeat(3, 280px);
		justify-content: center;
		row-gap: 70px;
		column-gap: 130px;
	}
	&__item {
		max-width: 300px;
		padding: 20px 40px;
		box-shadow: rgba(153, 155, 153, 0.89) 0px 7px 15px 0px;
		border-radius: 30px;
		background-color: #cadfa1;
		cursor: pointer;
		transition: all 0.3s;
		&:hover {
			transform: scale(1.1);
		}
	}
	&__name {
		text-align: right;
		margin-bottom: 10px;
		color: $black-color;
	}
	&__img {
		width: 100%;
		margin: 0 auto;
	}
	&-loading {
		text-align: center;
	}
}

@media (max-width: 1160px) {
	.categories {
		&__items {
			grid-template-columns: repeat(2, 280px);
			column-gap: 65px;
			justify-content: center;
		}
	}
}

@media (max-width: 1040px) {
	.categories {
		background-position-y: 131%;
	}
}

@media (max-width: 950px) {
	.random-meals {
		&__item {
			display: block !important;
		}
		&__info {
			max-width: 100%;
		}
	}
}

@media (max-width: 700px) {
	.categories {
		padding-bottom: 70px;
		&__items {
			grid-template-columns: repeat(1, 1fr);
			column-gap: 65px;
			justify-items: center;
		}
		&__item {
			max-width: 370px;
		}
	}
	.random-meals {
		&__img {
			max-width: 100%;
		}
		&__info {
			width: 100%;
		}
	}
}

@media (max-width: 550px) {
	.categories {
		padding: 30px 0 70px;
		&__items {
			grid-template-columns: repeat(1, 1fr);
			column-gap: 65px;
			justify-items: center;
		}
		&__item {
			max-width: 370px;
			&:hover {
				transform: none;
			}
		}
	}
	.random-meals {
		&__img {
			max-width: 100%;
		}
		&__info {
			width: 100%;
		}
	}
}

@media (max-width: 400px) {
	.random-meals {
		&__info {
			width: 100%;
		}
	}
}
</style>
