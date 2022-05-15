Vue.createApp({
  data() {
    return {
      title: 'Заголовок приложения',
      html: '<h1>Vue other</h1>',
      person: {
        name: 'Artem',
        age: 32
      },
      items: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    stopPropagation(e) {
      e.stopPropagation();
    },
    addListItem() {
      console.log(this.$refs.myInput.value);
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = '';
    },
    removeItem(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log(item);
    }
  },
  // Здесь описываются своеобразные геттеры и сеттеры то есть они используются в шаблоне без вызова (как переменная) itemsEven
  computed: {
    itemsEven() {
      return this.items.filter( (i) => (i % 2 === 0) );
    }
  }
}).mount('#other');

