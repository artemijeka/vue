<template>
  <div class="grey darken-1 empty-layout">
    <RouterView />
  </div>
</template>

<script>
import { useStoreAuth } from "@/stores/auth";

export default {
  name: "EmptyLayout",
  data() {
    return {
      auth: useStoreAuth(),
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
