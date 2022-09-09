<script>
// import { RouterLink, RouterView } from 'vue-router'

import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import EmptyLayout from "@/layouts/Empty.vue";
import MainLayout from "@/layouts/Main.vue";

export default {
  computed: {
    layout() {
      // console.log(this.$route.meta.layout)
      // Здесь он сделал по другому https://youtu.be/Pm2aASoksJU?t=1460
      return this.$route.meta.layout;
    },
    // date() {
    //   const dateObj = new Date();
    //   const year = dateObj.getUTCFullYear();
    //   const month = dateObj.getUTCMonth() + 1; //months from 1-12
    //   const day = dateObj.getUTCDate();

    //   return day + "." + month + "." + year;
    //   // return year + "." + month + "." + day;
    // }
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
  provide() {
    return {
      // date: this.date
    };
  },
  mounted() {},
};
</script>

<template>
  <component :is="layout" />
</template>

<style lang="scss">
// @import 'materialize-css/dist/css/materialize.min.css';
@import "@/assets/main.scss";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>
