<template>
	<div class="banner" id="banner">
		<div class="banner__content">
			<Search />
		</div>
	</div>
</template>

<script>
import Search from "../home/Search.vue";
export default {
	components: {
		Search,
	},
};
</script>

<style lang="scss">
.banner {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url("../../assets/images/banner.png");
	background-repeat: no-repeat;
	background-position: center top;
	height: 400px;
}
</style>
