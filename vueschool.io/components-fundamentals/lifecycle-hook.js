let BlogPost = {
  props: {
    id: {
      type: Number
    }
  },
  data() {
    return {
      blogPost: null,
    }
  },
  async created() {
    const id = this.id
    const response = await axios.get(`api/post/${id}`)
    this.blogPost = response.data
  }
}