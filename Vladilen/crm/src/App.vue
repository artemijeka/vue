<script>
import { RouterLink, RouterView } from 'vue-router'

import 'materialize-css/dist/js/materialize.min.js'

import EmptyLayout from '@/layouts/Empty.vue'
import MainLayout from '@/layouts/Main.vue'

export default {
  computed: {
    layout() {
      console.log(this.$route.meta.layout)
      // Здесь он сделал по другому https://youtu.be/Pm2aASoksJU?t=1460
      return this.$route.meta.layout
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
}
</script>



<template>
  <component :is="layout">
    <router-view />
  </component>
</template>



<style lang="scss">
  @import 'materialize-css/dist/css/materialize.min.css';
  @import '@/assets/main.scss';
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';
</style>
