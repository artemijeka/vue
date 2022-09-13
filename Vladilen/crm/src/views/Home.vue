<script>
import HomeBill from "@/components/HomeBill.vue";
import HomeCurrency from "@/components/HomeCurrency.vue";

import { useInfoStore } from "@/stores/info";

export default {
  name: "home-view",
  data() {
    return {
      rates: null,
      info: useInfoStore(),
    };
  },
  components: {
    HomeBill,
    HomeCurrency,
  },
  async mounted() {
    this.rates = await this.info.fetchRates();
    // this.rates = { ...this.rates };
    // this.rates = JSON.parse(JSON.stringify(this.rates))
    console.log("this.rates");
    console.log(this.rates);
  },
  watch: {},
};
</script>

<template>
  <main>
    <div>
      <div class="page-title">
        <h3>Счет</h3>

        <button class="btn waves-effect waves-light btn-small">
          <i class="material-icons">refresh</i>
        </button>
      </div>

      <div class="row">
        <HomeBill :rates="rates" />

        <HomeCurrency />
      </div>
    </div>
  </main>
</template>
