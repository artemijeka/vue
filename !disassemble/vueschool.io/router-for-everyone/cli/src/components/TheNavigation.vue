<template>
  <nav> 
    <!-- "to" - это походу пропс "literal string" (без bind :) -->
    <!-- Если надо js выражение то надо через v-bind:to="" или просто :to="" -->
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="/panama">Panama</router-link>
  </nav>
</template>



<style lang="scss" scoped>
  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      padding: 0 10px;

      &.--active {
        color: #42b983;
      }
    }
  }
</style>