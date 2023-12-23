<template>
  <div class="content">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="content__info">There are not meals</div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";
import { defineProps } from "vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";

.content {
  padding: 30px 0 90px 0;
  text-align: center;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 70px;
  justify-content: center;
  &__item {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  &__items-info {
    padding: 10px;
  }
  &__items-img {
    margin-bottom: 20px;
    width: 300px;
  }
  &__items-title {
    margin-bottom: 10px;
  }
  &__items-text {
    margin-bottom: 30px;
  }
  &__items-link {
    color: $text-grey;
    margin: 0 30px;
    border: 1px solid $text-grey;
    padding: 10px;
    width: 80px;
    display: inline-block;
    &:hover {
      color: $text;
      border: 1px solid $text;
    }
  }
  &__info {
    text-align: center;
    font-size: 20px;
  }
}

@media (max-width: 1070px) {
  .content {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    gap: 70px;
    justify-content: center;
  }
}

@media (max-width: 700px) {
  .content {
    display: grid;
    grid-template-columns: repeat(1, 300px);
    gap: 70px;
    justify-content: center;
    &__items-title {
      font-size: 17px;
    }
  }
}

@media (max-width: 380px) {
  .content__item:hover {
    transform: none;
  }
}
</style>
