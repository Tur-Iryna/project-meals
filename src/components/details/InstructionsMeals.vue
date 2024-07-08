<template>
	<div class="details-instructions">
		<h2 class="details-instructions__subtitle title-instructions">
			Instructions:
		</h2>
		<p class="details-instructions__descr">
			{{ mealInfo.strInstructions }}
		</p>
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
.details-instructions {
	&__subtitle {
		font-size: 25px;
		margin-bottom: 30px;
		padding-left: 30px;
		position: relative;
		margin-bottom: 20px;
	}
	&__descr {
		text-align: justify;
	}
}

.title-instructions::before {
	content: "";
	background-image: url("../../assets/images/icons/menu-book.svg");
	width: 20px;
	height: 20px;
	position: absolute;
	left: 0;
	top: 5px;
}
</style>
