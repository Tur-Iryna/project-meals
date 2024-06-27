<template>
	<div class="categories">
		<div class="container">
			<h3 class="categories__title title">Categories</h3>
			<div class="categories__inner">
				<div class="categories__items">
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
		...mapState(useGetCategories, ["categoriesList"]),
	},
	methods: {
		...mapActions(useGetCategories, ["getCategoriesList"]),
		...mapActions(useGetSelectCategory, ["getItemsListByCategory"]),
		selectCategory(item) {
			const nameCategory = item.strCategory;
			this.getItemsListByCategory(nameCategory);
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
	background-position-y: 118%;
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
		width: 300px;
		padding: 20px 40px;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
}
</style>
