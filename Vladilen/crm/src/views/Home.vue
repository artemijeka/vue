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
        
        <HomeBill :rates="currency.rates" />

        <HomeCurrency />
        
      </div>
    </div>
  </main>
</template>

<script>
import HomeBill from "@/components/HomeBill.vue";
import HomeCurrency from "@/components/HomeCurrency.vue";

import { useInfoStore } from "@/stores/info";

export default {
  name: "home-view",
  data() {
    return {
      currency: null,
      info: useInfoStore(),
    };
  },
  components: {
    HomeBill,
    HomeCurrency,
  },
  async mounted() {
    this.currency = await this.info.fetchCurrency();
    console.log("this.currency.rates");
    console.log(this.currency.rates);
  },
};
</script>
