Vue.createApp({
  data() {
    return {
    }
  }
})
.component('todo-item', {
  template: '#todo-item-template',
  data() {
    return {
      done: false,
    }
  }
})
.mount('#vue')