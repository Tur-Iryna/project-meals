<template>
  <div class="container">
    <Navbar></Navbar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style lang="scss" scoped>
@import "../assets/styles/main";
</style>
