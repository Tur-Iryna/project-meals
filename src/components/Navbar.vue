<template>
  <header class="header">
    <div class="header__nav wrapper">
      <router-link :to="{ name: 'home' }" class="header__link">
        HOME
      </router-link>
      <nav class="nav">
        <router-link :to="{ name: 'byName' }" class="nav__link">
          Search Meals
        </router-link>
        <router-link :to="{ name: 'byLetter' }" class="nav__link">
          Meals by letter
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/styles/main";

.header {
  background-color: #303030;
  font-family: "Raleway", sans-serif;
  &__nav {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    color: #ffff;
  }

  &__link {
    font-weight: 600;
  }
}

.nav {
  display: flex;
  gap: 30px;
  text-transform: uppercase;
  font-weight: 600;

  &__link {
    padding-bottom: 5px;
    &:hover {
      border-bottom: 1px solid #ffff;
      transition: all 0.3s;
    }
  }
}

@media (max-width: 450px) {
  .header__nav {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .nav {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
