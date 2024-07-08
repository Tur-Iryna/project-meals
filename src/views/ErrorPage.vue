<template>
	<div class="error-info">
		<div class="container">
			<div class="error-content">
				<div class="error-content__info">
					<img
						class="error-content__img"
						src="../assets/images/error.png"
						alt=""
					/>
					<span class="error-content__num">ERROR</span>
				</div>
				<p class="error-content__text">
					Something went wrong, please reload the page!
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.error-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&__info {
		display: flex;
		align-items: center;
		height: 400px;
	}
	&__num {
		font-size: 100px;
		line-height: 100px;
		margin-bottom: 10px;
	}
	&__text {
		font-size: 20px;
		margin-bottom: 35px;
		max-width: 496px;
	}
}

@media (max-width: 900px) {
	.error-content {
		&__info {
			display: block;
			text-align: center;
		}
		&__text {
			font-size: 16px;
		}
		&__name {
			font-size: 20px;
		}
	}
}

@media (max-width: 600px) {
	.error-content {
		&__text {
			font-size: 16px;
			text-align: center;
		}
		&__num {
			font-family: "Semi-Bold";
			font-size: 50px;
		}
		&__img {
			width: 350px;
			height: 300px;
		}
	}
}
</style>
