<template>
	<label class="switch">
		<input @click="toggleDark()" type="checkbox" />
		<span class="slider round"></span>
	</label>
</template>

<script>
import { useDark, useToggle } from "@vueuse/core";
export default {
	setup() {
		const isDark = useDark({
			selector: "body",
			attribute: "class",
			valueDark: "dark-theme",
			valueLight: "light-theme",
		});

		const toggleDark = useToggle(isDark);

		return {
			toggleDark,
		};
	},
};
</script>

<style lang="scss">
.switch {
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: $green-color;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: $white-color;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: $green-color;
}

input:focus + .slider {
	box-shadow: 0 0 1px $green-color;
}

input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
}

.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
