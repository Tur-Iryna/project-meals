<template>
  <div class="wrapper">
    <h2 class="content__title">Ingredients</h2>
    <div class="search-form">
      <input
        v-model="keyword"
        @change="searchMeals"
        class="search-form__input"
        type="text"
        placeholder="Search for ingredients"
      />
      <button class="search-form__btn">
        <img
          class="search-form__img"
          src="/src/assets/images/search-btn.png"
          alt="search btn"
        />
      </button>
    </div>
    <div>
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
      >
        <h3>{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) => {
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient);
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";

.wrapper {
  padding: 20px 15px;
}

.content {
  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
  &__box {
    width: 700px;
  }
}

.search-form {
  display: flex;
  border: 1px solid #d9d9d9;
  text-align: center;
  border-radius: 20px;
  width: 400px;
  margin: 0 auto 40px;
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
}
</style>
