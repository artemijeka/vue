app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: /* html */ `
    <h3>Отзывы</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{review.name}} дал {{review.rating}} звёзд
        <br>
        <p>"{{review.review}}"</p>
      </li>
    </ul>
  `,
});