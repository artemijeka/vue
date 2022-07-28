import { createStore } from 'vuex'

export default createStore({
  state: {//=data in vue
    products: []
  },
  getters: {//=computed in vue
    availabeProducts(state) {//, getters
      return state.products.filter(product=>product.inventory>0)
    }
  },
  actions: {//=methods in vue
    fetchProducts() {

    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  modules: {
  }
})
