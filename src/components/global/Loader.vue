<template>
	<div class="loader">
		<div class="spinner"></div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.9);
	z-index: 9999;
}

.spinner {
	border: 8px solid rgba(0, 0, 0, 0.1);
	border-left: 8px solid $green-color;
	border-right: 8px solid $black-color;
	border-bottom: 8px solid $green-color;
	border-top: 8px solid $black-color;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
