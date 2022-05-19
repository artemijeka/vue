app.component('animal-display', {

  props: {
    dangerous: {
      type: Boolean,
      required: true
    }
  },



  template: /*html*/ `
    <h1>{{titleAttention}}</h1>
    <h2>{{dangerOrNot}}</h2>
    <a :href="url" target="_blank">
      <img 
        :class="['image', {'--opacity': !inRussia}, inRussia?'in-russia':'in-not-russia']" 
        :src="image" 
        alt="">
    </a>
    <h3 v-if="inRussia">Есть в России</h3>
    <h3 v-else>Нет в России</h3>    
    <button
      :disabled="!inRussia"
      :class="{'not-in-russia': !inRussia}"
      @click="tame">Приручить</button>
    <button
      :disabled="!inRussia"
      :class="{'not-in-russia': !inRussia}"
      @click="tameOut">Отпустить</button>      
    <div class="descr-wrap">
      <div
        class="descr-wrap__item"
        v-for="(animal, index) in animalVariants"
        :key="animal.id"
        :style="{ 'border-color': animal.color}"       
        @mouseover="updateInfo(index)">Кто: {{animal.name}}<br>Тип: {{animal.who}}<br>Где: {{animal.where}}
      </div>
    </div>

    <br>
    <br>

    <review-list :reviews="reviews" v-if="reviews.length"></review-list>

    <review-form @review-submitted="addReview"></review-form>
  `,



  data() {
    return {
      title: 'Tiger & eagle',
      url: 'images/tiger.jpg',
      dangerous: true,
      animalVariants: [
        {
          id: 1,
          name: 'Тигр',
          where: 'суша',
          who: 'хищник',
          image: 'images/tiger.jpg',
          color: '#6A5742',
          inRussia: false,
          dangerous: true,
        },
        {
          id: 2,
          name: 'Орёл',
          where: 'суша, небо, вода',
          who: 'хищник',
          image: 'images/eagle.jpg',
          color: '#3E3E4E',
          inRussia: true,
          dangerous: false,
        },
      ],
      selected: 0,
      // image: 'images/tiger.jpg',
      // inRussia: false,
      reviews: [],
    }
  },



  methods: {
    tame() {
      this.$emit('tame', this.animalVariants[this.selected].id);
    },
    tameOut() {
      this.$emit('tame-out', this.animalVariants[this.selected].id);
    },
    updateInfo(index) {
      this.selected = index
      // this.image = this.animalVariants[index].image//migrated to computed
      // this.inRussia = this.animalVariants[index].inRussia//migrated to computed
    },
    addReview(review) {
      this.reviews.push(review);
    }
  },



  computed: {
    titleAttention() {
      return this.title + '!!!'
    },
    image() {
      return this.animalVariants[this.selected].image
    },
    inRussia() {
      return this.animalVariants[this.selected].inRussia
    },
    dangerOrNot() {
      if (this.animalVariants[this.selected].dangerous) {
        return 'Опасен!'
      }
      return 'Не опасен!'
    }
  }

})