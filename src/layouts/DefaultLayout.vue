<script setup>
import AppHeader from "../components/AppHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <AppHeader />
    <div class="container">
      <div class="view-container">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .view-container {
      width: 100%;
      padding: 0 15px;
      @media (min-width: 1170px) {
        width: 1170px;
        padding: 0 30px;
      }
    }
  }
}
</style>

<style lang="scss" scoped></style>
