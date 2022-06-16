const app = Vue.createApp({})

app.component('todo-list', {
  data() {
    return {
      todos: ['Покормить кота', 'Купить билеты']
    }
  },
  provide() {
    return {
      todoLength: this.todos.length
    }
  },
  template: `
    <div>
      {{ todos.length }}
      <!-- остальная часть шаблона компонента -->
    </div>
  `
})

app.component('todo-list-statistics', {
  inject: ['user'],
  created() {
    console.log(`Внедрённое свойство: ${this.user}`) // > Внедрённое свойство: John Doe
  }
})