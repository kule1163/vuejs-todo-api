<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
}
</style>
