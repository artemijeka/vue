<template>
  <div class="grey darken-1 empty-layout">
    <RouterView />
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

export default {
  name: "empty-layout",
  data() {
    return {
      auth: useAuthStore(),
    };
  },
  computed: {
    error() {
      console.log("this.auth.getters");
      console.log(this.auth.getters);

      // this.auth.$patch((s) => {
      //   console.log("s");
      //   console.log(s);
      // });
      return this.auth.error;
    },
  },
  watch: {
    error(fbError) {
      // console.log(fbError);
    },
  },
};
</script>
