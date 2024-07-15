<template>
	<div class="details-content">
		<div class="details-content__image">
			<img class="details-content__img" :src="mealInfo.strMealThumb" />
		</div>
		<div class="details-content__text">
			<h3 class="details-content__name">
				{{ mealInfo.strMeal }}
			</h3>
			<div class="details-content__category">
				<span>CATEGORY:</span>
				<span>{{ mealInfo.strCategory }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		mealInfo: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.details-content {
	margin-top: 50px;
	background: linear-gradient(
		225deg,
		hsla(114, 18%, 78%, 1) 13%,
		hsla(81, 33%, 62%, 1) 73%
	);
	display: flex;
	align-items: center;
	gap: 140px;
	margin-bottom: 40px;
	&__image {
		width: 500px;
	}
	&__name {
		font-size: 48px;
		line-height: 42px;
		margin-bottom: 20px;
	}
	&__category {
		font-family: "Bold";
		& > span {
			font-family: "Bold";
			display: inline-block;
			margin-bottom: 20px;
			font-size: 18px;
			text-transform: uppercase;
		}
	}
	&__source {
		color: $black-color;
		font-size: 20px;
		& > span {
			font-family: "Bold";
			display: inline-block;
			margin-bottom: 20px;
			font-size: 18px;
			text-transform: uppercase;
		}
	}
	&__text {
		text-align: center;
	}
}

@media (max-width: 870px) {
	.details-content {
		display: block;
		&__name {
			font-size: 33px;
		}
		&__image {
			width: 100%;
			margin-bottom: 30px;
		}
	}
}
</style>
