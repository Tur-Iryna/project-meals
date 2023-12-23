<template>
  <div class="content-item">
    <div class="content-item__info">
      <h2 class="content-item__title">{{ meal.strMeal }}</h2>
    </div>
    <div class="content-info">
      <div class="content-info__box">
        <div class="content-info__text">
          <span class="content-info__desc">Category:</span>
          {{ meal.strCategory }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
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
    font-size: 40px;
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
