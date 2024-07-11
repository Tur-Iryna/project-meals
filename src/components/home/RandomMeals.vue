<template>
	<div class="random-meals" id="recipes">
		<div class="container">
			<div class="random-meals__inner">
				<h2 class="random-meals__title title">Random meals</h2>
				<div v-if="!loading" class="random-meals__items">
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
							<span class="random-meals__category"
								>CATEGORY: {{ item.strCategory }}</span
							>
							<p class="random-meals__text">
								{{ truncateText(item.strInstructions) }}
							</p>

							<button
								@click="showDetailsMeals(item.idMeal)"
								class="random-meals__btn"
							>
								Details
							</button>
						</div>
					</div>
				</div>
				<div v-else class="random-meals__loading">Loading...</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useGetRandomList } from "@/store/getRandomList";
import { mapState, mapActions } from "pinia";
import { useGetDetailsByMeals } from "@/store/getDetailsMeals";

export default {
	data() {
		return {
			infoText: "",
		};
	},
	async mounted() {
		await this.getRandomMeals();
		this.infoText = this.randomMealsList.strInstructions;
	},
	computed: {
		...mapState(useGetRandomList, ["randomMealsList", "loading"]),
	},
	methods: {
		...mapActions(useGetRandomList, ["getRandomMeals"]),
		...mapActions(useGetDetailsByMeals, ["getDetailsInfoMeals"]),
		truncateText(text) {
			const maxLength = 400;
			if (text.length > maxLength) {
				return text.substring(0, maxLength) + "...";
			}
			return text;
		},
		showDetailsMeals(idMeal) {
			this.$router.push({ name: "details", params: { mealsId: idMeal } });
			this.getDetailsInfoMeals(idMeal);
		},
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
		max-width: 550px;
		text-align: justify;
	}
	&__text {
		margin-bottom: 30px;
	}
	&__name {
		font-size: 40px;
		line-height: 43px;
		margin-bottom: 20px;
	}
	&__category {
		font-family: "Semi-Bold";
		display: inline-block;
		margin-bottom: 20px;
		text-transform: uppercase;
	}
	&__btn {
		background-color: $green-color;
		border: none;
		font-size: 18px;
		padding: 15px 35px;
		font-family: "Semi-Bold";
		text-decoration: none;
		outline: none;
		border-radius: 45px;
		text-transform: uppercase;
		letter-spacing: 3px;
		color: $white-color;
		background: $green-color;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		transition: 0.3s;
		cursor: pointer;
		&:hover {
			background: #043104;
			box-shadow: 0px 15px 20px rgba(142, 151, 147, 0.4);
			color: #fff;
			transform: translateY(-7px);
		}
	}
	&__loading {
		text-align: center;
	}
}

@media (max-width: 500px) {
	.random-meals {
		padding-bottom: 30px;
		&__name {
			font-size: 25px;
			line-height: 32px;
			text-align: center;
		}
		&__category {
			display: block;
			text-align: center;
			font-size: 17px;
		}
		&__btn {
			font-size: 14px;
			padding: 15px 19px;
		}
	}
}

@media (max-width: 450px) {
	.random-meals {
		&__btn {
			display: block;
			text-align: center;
		}
	}
}
</style>
