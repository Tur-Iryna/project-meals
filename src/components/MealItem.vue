<template>
  <div class="content__item">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" alt="" class="content__items-img" />
    </router-link>
    <div class="content__items-info">
      <h2 class="content__items-title">{{ meal.strMeal }}</h2>
      <div class="content__items-box">
        <a :href="meal.strYoutube" target="_blank" class="content__items-link"
          >Youtube</a
        >
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="content__items-link"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";

.wrapper {
  text-align: center;
  padding: 20px 15px;
}

.content {
  text-align: center;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 70px;
  justify-content: center;
  position: relative;
  &::after {
    content: "";
    background-image: url("../assets/images/bg.png");
    background-repeat: no-repeat;
    height: 877px;
    width: 249px;
    position: absolute;
    right: 0;
    top: 500px;
  }
  &__item {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      transform: scale(1.1);
    }
  }
  &__items-info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__items-img {
    margin-bottom: 20px;
    width: 300px;
  }
  &__items-title {
    height: 60px;
    font-size: 18px;
    margin-bottom: 20px;
  }
  &__items-text {
    margin-bottom: 30px;
  }
  &__items-box {
    display: flex;
    margin-top: auto;
  }
  &__items-link {
    color: $text-grey;
    margin: 0 30px;
    border: 1px solid $text-grey;
    padding: 10px;
    width: 80px;
    &:hover {
      color: $text;
      border: 1px solid $text;
    }
  }
}
.content__bg {
  background-image: url("../assets/images/bg.png");
  background-repeat: no-repeat;
  height: 877px;
  width: 349px;
  position: absolute;
  right: 0;
}
</style>
