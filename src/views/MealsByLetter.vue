<template>
  <div class="wrapper">
    <div class="list-letters">
      <h2 class="title">SAERCH MEALS BY LETTER</h2>
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <Meals v-if="meals.length" :meals="meals" />
  <div v-else class="content__bg"></div>
</template>

<script setup>
import store from "../store";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);
const letters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split("");

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";

.wrapper {
  text-align: center;
  padding: 20px 15px;
}

.list-letters {
  font-size: 20px;
  padding: 15px 0;
}

.list-letters a:hover {
  border-bottom: 2px solid #111;
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
    top: 40px;
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
}
</style>
