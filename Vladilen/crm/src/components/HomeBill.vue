<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p v-for="cur in currencies" :key="cur" class="currency-line">
          <span>{{ this.$currencyFormat(getCurrency(cur)) }}</span>
          <!-- <span>{{ getCurrency(cur) }}</span> -->
          <!-- <span>{{ cur }}</span> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useInfoStore } from "@/stores/info";

export default {
  props: ["rates"],
  data: () => ({
    info: useInfoStore(),
    currencies: ["RUB", "EUR", "USD"],
  }),
  computed: {
    base() {
      /**
       * this.rates["RUB"] / this.rates["USD"]=курс доллора к рублю;
       * this.info.getInfo.bill = изначально в рублях
       * по этому делим на курс доллора и получаем сколько у нас рублей в долларах,
       * потому что в API openexchangerates.org базовая валюта USD
       */
      return this.info.getInfo.bill / (this.rates["RUB"] / this.rates["USD"]); //!получаем base который равен нашей сумме рублей в долларах
    },
  },
  methods: {
    getCurrency(currency) {
      return (this.base * this.rates[currency]).toFixed(2);
    },
  },
};
</script>

<style lang="scss">
.currency-line {
  display: flex;
  justify-content: space-between;
}
</style>
