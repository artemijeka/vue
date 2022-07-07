<template>
  <div>
    <img
      alt="Vue logo"
      src="./assets/logo.png" />
    <hr />
    <AddTodoItem
      @add-todo-item="addTodoItem" />
    <select v-model="filter"><!-- v-model годиться для связываний переменных с любыми интерфейсами форм  -->
      <option value="all">все</option>
      <option value="completed">завершённые</option>
      <option value="not-completed">не завершённые</option>
    </select>
    <Loader v-if="loading" />
    <!-- @ заменяет v-on: во vue -->
    <TodoList
      v-else-if="filteredTodoList.length" 
      v-bind:todoList="filteredTodoList"
      @remove-todo-item="removeTodoItem" />
    <h2 v-else>Нет списка дел</h2>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList"; //@ указывает на корневой каталог "src"
import AddTodoItem from "@/components/AddTodoItem";
import Loader from "@/components/Loader";

export default {
  props: {},
  name: "Vue-cli",
  components: { TodoList, AddTodoItem, AddTodoItem, Loader },
  data() {
    return {
      filter: 'all',
      loading: true,
      todoList: [
        // { id: 1, title: "задача 1", completed: false },
        // { id: 2, title: "задача 2", completed: false },
        // { id: 3, title: "задача 3", completed: false },
      ],
    };
  },
  // "watch" - Слежение за одноимённой переменной в data() и v-model если речь идёт об интерфейсе форм
  watch: {
    filter(value) {
      console.log(value);
    }
  },
  // computed свойство задаёт своеобразные геттеры и сеттеры которые выдают результат как переменная "filteredTodoList" а не как метод
  computed: {
    filteredTodoList() {
      if (this.filter === 'all') {
        return this.todoList;
      }

      else if (this.filter === 'completed') {
        return this.todoList.filter(it=>it.completed);
      }

      else if (this.filter === 'not-completed') {
        return this.todoList.filter(it=>!it.completed);
      }
    }
  },
  mounted() {
    //mounted() в vue "Вызывается после того, как компонент был смонтирован."
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        this.todoList = json;
        console.log(this.todoList);
        this.loading = false;
      });
  },

  methods: {
    removeTodoItem(todoItemId) {
      this.todoList = this.todoList.filter(
        (todoItem) => todoItem.id !== todoItemId
      );
    },
    addTodoItem(newTodoItem) {
      this.todoList.push(newTodoItem);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
