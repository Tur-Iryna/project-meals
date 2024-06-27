<template>
	<div class="random-meals">
		<div class="container">
			<div class="random-meals__inner">
				<h2 class="random-meals__title title">Random meals</h2>
				<div class="random-meals__items">
					<div
						v-for="item in randomMealsList"
						:key="item.id"
						class="random-meals__item"
					>
						<div class="random-meals__img">
							<img :src="item.strMealThumb" alt="" />
						</div>
						<div class="random-meals__info">
							<h2 class="random-meals__name">
								{{ item.strMeal }}
							</h2>
							<p>{{ item.strInstructions }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useGetRandomList } from "@/store/getRandomList";
import { mapState, mapActions } from "pinia";

export default {
	async mounted() {
		await this.getRandomMeals();
	},
	computed: {
		...mapState(useGetRandomList, ["randomMealsList"]),
	},
	methods: {
		...mapActions(useGetRandomList, ["getRandomMeals"]),
	},
};
</script>

<style lang="scss">
.random-meals {
	padding: 0 0 70px;
	&__item {
		display: flex;
		align-items: center;
		gap: 80px;
	}
	&__img {
		width: 550px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
			rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
	&__info {
		margin-top: 40px;
		width: 50%;
	}
	&__name {
		font-size: 30px;
		margin-bottom: 20px;
	}
}
</style>
