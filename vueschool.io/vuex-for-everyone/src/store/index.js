import { createStore } from 'vuex'

export default createStore({
  state: {//=data in vue
    products: []
  },
  getters: {//=computed in vue
    productsCount() {

    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {//=methods in vue
    fetchProducts() {

    }
  },
  modules: {
  }
})
