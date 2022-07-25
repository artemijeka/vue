<template>
  <div>
    <h1>Products list</h1>
    <ul class="product__list">
      <li v-for="product in products" :key="product.id" class="product__item">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from "@/api/shop.js";
import store from '@/store/index'

export default {
  // data() {
  //   return {
  //     products: [],
  //   };
  // },
  computed: {
    products() {
      return store.state.products
    }
  },
  created() {
    shop.getProducts((products) => {
      store.commit('setProducts', products)
    });
  },
};
</script>

<style lang="scss">
.product {
  &__list {
    list-style-type: none;
  }
  &__item {
  }
}
</style>
