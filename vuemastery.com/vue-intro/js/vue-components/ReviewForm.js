app.component('review-form', {
  template: /*html*/ `
    <form @submit.prevent="submitHandler">
      <input type="text" name="name" id="name" v-model="name">
      <br><br>
      <textarea name="review" id="review" cols="30" rows="10" v-model="review"></textarea>
      <br><br>
      <select name="rating" id="rating" v-model.number="rating">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <br><br>
      <input type="submit" id="submit" value="Отправить">
    </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: 5,
    }
  },
  methods: {
    submitHandler() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }

      if (this.name === '' || this.review === '') {
        alert('Одно из полей не заполнено!');
        return;
      }

      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = 5;
    }
  }
})