<template>
  <div class="content-item">
    <div class="content-item__info">
      <h2 class="content-item__title">{{ meal.strMeal }}</h2>
    </div>
    <img class="content-item__img" :src="meal.strMealThumb" alt="" />
    <div class="content-info">
      <div class="content-info__box">
        <div class="content-info__text">
          <span class="content-info__desc">Category:</span>
          {{ meal.strCategory }}
        </div>
        <div class="content-info__text">
          <span class="content-info__desc">Area:</span> {{ meal.strArea }}
        </div>
      </div>
      <div class="content-info__btn">
        <a :href="meal.strYoutube" target="_blank">Youtube</a>
      </div>
    </div>

    <div class="content-text">
      {{ meal.strInstructions }}
    </div>
    <div class="content-details">
      <div class="content-details__ingredients">
        <h2 class="content-details__title">Ingredients</h2>
        <div class="slider">
          <swiper
            :slides-per-view="4"
            :space-between="50"
            autoplay
            :delay="3000"
          >
            <swiper-slide v-for="(el, index) of new Array(20)" :key="index">
              <div
                v-if="meal[`strIngredient${index + 1}`]"
                class="content-details__info"
              >
                {{ meal[`strIngredient${index + 1}`] }}
                <img
                  :src="`${INGREDIENT_IMG}${
                    meal[`strIngredient${index + 1}`]
                  }-Small.png`"
                  alt=""
                  class="content-details__img"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="content-details__measures">
        <h2 class="content-details__title">Measures</h2>
        <ul class="content-details__list">
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li
              v-if="
                meal[`strMeasure${index + 1}`] &&
                meal[`strMeasure${index + 1}`].trim() !== ''
              "
              class="content-details__item"
            >
              <span>{{ index + 1 }}.</span> {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import { INGREDIENT_IMG } from "../constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient
    .get(`lookup.php?i=${route.params.id}`)

    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    });
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";

.content-item {
  padding: 50px 10px;
  max-width: 600px;
  margin: 0 auto;
  &__info {
    text-align: center;
  }

  &__title {
    font-size: 31px;
    margin-bottom: 30px;
  }
  &__desc {
    margin-bottom: 30px;
  }
  &__img {
    margin: 30px auto;
    width: 800px;
  }
}

.content-info {
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__text {
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__btn {
    color: $text-grey;
    border: 1px solid $text-grey;
    padding: 10px;

    &:hover {
      color: $text;
      border: 1px solid $text;
    }
  }
}
.content-text {
  margin: 30px 0;
}
.content-details {
  &__item {
    padding-top: 5px;
  }

  &__info {
    text-align: center;
  }
  &__title {
    margin-bottom: 20px;
    display: inline-block;
    border-bottom: 1px solid $text;
  }
  &__ingredients {
    margin-bottom: 30px;
  }
  &__img {
    margin: 20px auto;
  }
  &__list span {
    font-weight: 600;
    margin-right: 10px;
    font-size: 18px;
  }
}

.slider {
  margin-top: 20px;
}
</style>
