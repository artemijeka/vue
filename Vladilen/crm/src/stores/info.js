import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    info: {},
    auth: useAuthStore()
  }),
  actions: {
    fetchInfo() {
      this.auth.getUserId().then((test) => {
        console.log('test')
        console.log(test)
        return test
      })
    }
  },
  getters: {
    info: state => state.info
  }
})