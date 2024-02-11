<script setup>
import { RouterLink } from "vue-router";
import { uid } from "uid";

const menuItems = [
  {
    id: uid(),
    name: "home",
    href: "/",
  },
  {
    id: uid(),
    name: "create",
    href: "/create",
  },
];
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <li v-for="item in menuItems" :key="item.id">
          <RouterLink
            :to="item.href"
            :class="{ active: $route.name == item.name }"
            >{{ item.name }}</RouterLink
          >
        </li>
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
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  nav {
    display: flex;
    gap: 30px;
    li {
      display: flex;
      a {
        font-size: 1.2rem;
        text-transform: capitalize;
        font-weight: 600;
        padding: 7px 14px;
        position: relative;
        overflow: hidden;
        &:hover {
          &::after {
            transform: translateX(100%);
          }
        }
        &::after {
          content: "";
          transition: ease all 0.3s;
          background-color: black;
          position: absolute;
          bottom: 0;
          left: -100%;
          width: 100%;
          height: 3px;
        }
        &.active {
          &::after {
            transform: translateX(100%);
          }
        }
      }
    }
  }
}
</style>
