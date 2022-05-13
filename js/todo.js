const ToDo = {
  data() {
    return {
      title: 'План',
      placeholderValue: 'Описание шага',
      inputValue: '',
      notes: [
        'шан 1',
        'шаг 2',
      ]
    }
  },
  methods: {
    // inputValueHandler(event) {
    //   this.inputValue = event.target.value;//через this. обращаемся к объекту ToDo и непосредственно к нужному полю в возвращаемом объекте data() { return {} }
    // },
    addTodoItem(event) {
      if (this.inputValue) {
        this.notes.push( this.inputValue );
        this.inputValue = '';
      }
    },
    // doubleCount() {//что то вроде getter'а
    //   console.log(this.notes.length * 2);
    //   return this.notes.length * 2;
    // },
    // Можно обойтись модификтором
    // inputKeypressHandler(event) {
    //   console.log(event.key);
    //   if (event.key === 'Enter') {
    //     this.addTodoItem();//через this. обращаемся к объекту ToDo и непосредственно к нужному методу в methods
    //   }
    // },
    removeTodoItem(i, event) {
      console.log('event', event);
      this.notes.splice(i, 1);
    }
  },
  // "computed" - объект с своеобразными геттерами и сеттерами, для оптимизации приложения, чтобы что-то считать из data() - это оптимизирует приложение и становится меньше вычислительных операций на процессор, хотя на себе я ещё это не ощутил
  computed: {
    doubleCount() {//что то вроде getter'а
      console.log(this.notes.length * 2);
      return this.notes.length * 2;
    }
  },
  // "watch" - объект с методами одноименными с свойствами из data() чтобы следить за этими свойствами
  watch: {
    inputValue(value) {
      console.log('watch inputValue', value);
    }
  }
}
var placeholderValue = 'test';

Vue.createApp(ToDo).mount('#todo');