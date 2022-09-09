<template>
  <main>
    <div>
      <div class="page-title">
        <h3>Счет</h3>

        <button class="btn waves-effect waves-light btn-small">
          <i class="material-icons">refresh</i>
        </button>
      </div>

      <Loader v-if="loading" />

      <div v-else class="row">
        <HomeBill />

        <HomeCurrency />
      </div>
    </div>
  </main>
</template>

<script>
import HomeBill from "@/components/HomeBill.vue";
import HomeCurrency from "@/components/HomeCurrency.vue";
// import Loader from "../components/Loader.vue";

import { useInfoStore } from "@/stores/info";

export default {
  name: 'home-view',
  data() {
    return {
      loading: true,
      currency: null,
      info: useInfoStore(),
    }
  },
  components: {
    HomeBill,
    HomeCurrency,
    // Loader
  },
  async mounted() {
    this.currency = await this.info.fetchCurrency()
    this.loading = false
  }
};
</script>
