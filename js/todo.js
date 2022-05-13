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
    inputChangeHandler(event) {
      this.inputValue = event.target.value;//через this. обращаемся к объекту ToDo и непосредственно к нужному полю в возвращаемом объекте data() { return {} }
    },
    addTodoItem(event) {
      this.notes.push( this.inputValue )
    },
    // Можно обойтись модификтором
    // inputKeypressHandler(event) {
    //   console.log(event.key);
    //   if (event.key === 'Enter') {
    //     this.addTodoItem();//через this. обращаемся к объекту ToDo и непосредственно к нужному методу в methods
    //   }
    // },
    noteItemRemove(i, event) {
      console.log('event', event);
      this.notes.splice(i, 1);
    }
  }
}
var placeholderValue = 'test';

Vue.createApp(ToDo).mount('#todo');