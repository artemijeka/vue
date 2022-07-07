Vue.createApp({
  data() {
    return {
      usernames: ['artemijeka', 'DrKLO']
    }
  }
})
.component('github-user-card', {
  template: '#github-user-card-template',
  props: {
    username: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      user: {

      }
    }
  },
  async created() {
    const res = await axios.get(`https://api.github.com/users/${this.username}`)
    this.user = res.data
  },
  computed: {
    year() {
      return this.user.created_at.split('-')[0]
    }
  }
})
.mount('#vue')