import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    info: {},
    auth: useAuthStore()
  }),
  actions: {
    async fetchInfo() {
      let test = await this.auth.getUserId()
      console.log('test')
      console.log(test)
      return 'fetchInfo test return'
    }
  },
  getters: {
    info: state => state.info
  }
})