<script setup>
import { computed, onMounted } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

import "materialize-css/dist/js/materialize.min.js";

import EmptyLayout from "@/layouts/Empty.vue";
import MainLayout from "@/layouts/Main.vue";

let route = useRoute();

onMounted(() => {
  console.log(route.meta.layout);
});

let layout = computed(() => {
  return route.meta.layout;
});
</script>

<template>
  <component :is="layout" />
</template>

<style lang="scss">
@import "materialize-css/dist/css/materialize.min.css";
@import "@/assets/main.scss";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>