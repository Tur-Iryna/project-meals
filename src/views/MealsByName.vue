<template>
  <div class="wrapper">
    <h2 class="title">Search Meals by Name</h2>
    <div class="search-form">
      <input
        v-model="keyword"
        class="search-form__input"
        type="text"
        placeholder="Search meals"
      />
      <button @click="searchMeals" class="search-form__btn">
        <img
          class="search-form__img"
          src="/src/assets/images/search-btn.png"
          alt="search btn"
        />
      </button>
    </div>
  </div>
  <Meals v-if="meals.length" :meals="meals" />
  <div v-else class="content__bg"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
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
  margin-bottom: 40px;
  &__input {
    margin-right: 40px;
    width: 420px;
    height: 45px;
    padding: 0 15px;
    outline: none;
    border: none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    z-index: 100;
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
    padding-top: 15px;
  }
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
    z-index: -1;
  }
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
  &__bg {
    background-image: url("../assets/images/bg.png");
    background-repeat: no-repeat;
    height: 877px;
    width: 349px;
    position: absolute;
    right: 0;
    top: 20px;
  }
}

@media (max-width: 650px) {
  .content__bg {
    background-image: url("../assets/images/bg.png");
    background-repeat: no-repeat;
    height: 877px;
    width: 349px;
    position: absolute;
    right: 0;
    top: 130px;
    z-index: -1;
  }
  .title {
    margin-top: 0;
  }

  .search-form__input {
    max-width: 190px;
  }
}
</style>
