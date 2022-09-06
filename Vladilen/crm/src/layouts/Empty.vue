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
      // console.log("this.auth.$state.error");
      // console.log(this.auth.$state.error);

      return this.auth.$state.error;
    },
  },
  watch: {
    error(fbError) {
      // console.log("fbError");
      // console.log(fbError);
      this.$showError(this.$messages[fbError] || this.$messages['default'])
    },
  },
};
</script>
