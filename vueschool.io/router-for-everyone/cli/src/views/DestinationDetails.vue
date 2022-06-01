<template>
  <div>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination__details">
        <!-- <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" /> -->
      </div>
    </section>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      destinationId: this.$route.params.id,
    };
  },
  computed: {
    destination() {
      return store.destinations.find((destination) => {
        if (destination.id === this.destinationId) {
          console.log(destination);
          return true;
        }
      });
    },
  },
};
</script>
