<template>
  <div class="wrapper">
    <h2 class="content-title title">Random Meals</h2>
    <div class="content-bg"></div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import axiosClient from "../axiosClient";
import { ref } from "vue";
import Meals from "../components/Meals.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";

.wrapper {
  text-align: center;
  padding: 20px 15px;
}

.search-form {
  display: inline-flex;
  border: 1px solid #d9d9d9;
  text-align: center;
  border-radius: 20px;
  &__input {
    margin-right: 40px;
    width: 420px;
    height: 45px;
    padding: 0 15px;
    outline: none;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  &__btn {
    margin-right: 10px;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__letters {
    padding: 15px 0;
  }
}
</style>
