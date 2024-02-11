<script setup>
import AppHeader from "@/components/AppHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <AppHeader />
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
