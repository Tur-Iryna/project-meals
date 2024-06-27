<template>
	<div>
		<HeaderBanner />
		<CategoriesMeals />
		<RandomMeals />
	</div>
</template>

<script>
import HeaderBanner from "../components/home/HeaderBanner.vue";
import CategoriesMeals from "../components/home/CategoriesMeals.vue";
import RandomMeals from "../components/home/RandomMeals.vue";

export default {
	components: {
		HeaderBanner,
		CategoriesMeals,
		RandomMeals,
	},
};
</script>

<style></style>
