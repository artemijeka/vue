<template>
  <div class="home">
    <h1>All countries</h1>

    <div class="destinations">
      <div class="destinations__item" v-for="dest in destinations" :key="dest.name">
        <router-link :to="dest.slug">
          <h2>{{ dest.name }}</h2>
        </router-link>
        <figure>
          <router-link :to="dest.name">
            <img :src="require(`@/assets/${dest.image}`)" :alt="dest.name" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}
</style>
