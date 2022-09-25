<script>
import HomeBill from "@/components/HomeBill.vue";
import HomeCurrency from "@/components/HomeCurrency.vue";

import { useInfoStore } from "@/stores/info";

export default {
  name: "home-view",
  data() {
    return {
      loading: true,
      currency: null,
      info: useInfoStore(),
    };
  },
  components: {
    HomeBill,
    HomeCurrency,
  },
  created() {},
  async mounted() {
    this.currency = await this.info.fetchCurrency();
    console.log("this.currency");
    console.log(this.currency);
    this.loading = false;
  },
  computed: {
    // currency() {
    //   this.info.fetchCurrency().then((res) => {
    //     console.log('res');
    //     console.log(res);
    //     return res;
    //   });
    // },
  },
  watch: {
  },
};
</script>

<template>
  <main>
    <Loader v-if="loading" />

    <div v-else>
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
