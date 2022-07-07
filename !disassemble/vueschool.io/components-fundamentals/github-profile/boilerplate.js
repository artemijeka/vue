Vue.createApp({
  data() {
    return {
    }
  }
})
.component('notification-message', {
  template: '#notification-message-template',
  props: {
    type: {
      type: String,
      required: true,
      default: 'info'
    },
    heading: {
      type: String,
      required: true,
      default: 'information!'
    },
  },
  data() {
    return {
      hidden: false
    }
  },
  methods: {
    hide() {
      this.hidden = true
    }
  }
})
.mount('#vue')