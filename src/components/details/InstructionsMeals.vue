<template>
	<div class="details-instructions">
		<h2 class="details-instructions__subtitle title-instructions">
			Instructions:
		</h2>
		<p class="details-instructions__descr">
			{{ mealInfo.strInstructions }}
		</p>
		<div class="details-instructions__video">
			<iframe :src="videoUrl" class="details-instructions__frame">
			</iframe>
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
	computed: {
		videoUrl() {
			if (this.mealInfo.strYoutube) {
				const videoId = this.mealInfo.strYoutube.split("v=")[1];
				const urlVideo = `https://www.youtube.com/embed/${videoId}`;
				return urlVideo;
			}
			return null;
		},
	},
};
</script>

<style lang="scss" scoped>
.details-instructions {
	&__subtitle {
		font-size: 25px;
		margin-bottom: 30px;
		padding-left: 50px;
		position: relative;
		margin-bottom: 20px;
	}
	&__descr {
		text-align: justify;
		margin-bottom: 30px;
	}
	&__video {
		position: relative;
		padding-bottom: 39.47%;
		height: 0;
		overflow: hidden;
		max-width: 760px;
		margin: 0 auto;
	}
	&__frame {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
}

.title-instructions::before {
	content: "";
	background-image: url("../../assets/images/icons/menu-book.png");
	width: 48px;
	height: 48px;
	position: absolute;
	left: 0;
	top: -9px;
}
</style>
