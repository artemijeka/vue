<template>
  <div class="grey darken-1 empty-layout">
    <RouterView />
  </div>
</template>

<script>
import { useStoreAuth } from "@/stores/auth";

export default {
  name: "empty-layout",
  data() {
    return {
      auth: useStoreAuth(),
    };
  },
  computed: {
    error() {
      // console.log('this.auth.$state.error')
      // console.log(this.auth.$state.error)
      return this.auth.$state.error
      // console.log("this.auth.$state.error");
      // console.log(this.auth.$state.error);

      // return this.auth.$state.error;
    },
  },
  watch: {
    error(fbError) {
      console.log("fbError.code");
      console.log(fbError.code);
      this.$showError(this.$messages[fbError.code] || this.$messages['default'])
    },
  },
};
</script>
