import { defineStore } from 'pinia'

export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    info: {}
  }),
  actions: {
    async fetchInfo() {
      // await 
    }
  },
  getters: {
    info: state => state.info
  }
})