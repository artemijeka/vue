let PlanListItem = {
  template: `#plan-list-item-template`,
  props: {
    name: {
      type: String,
      require: false,
      default: 'DEFAULT!'
    },
    selected: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    select() {
      // this.selected = !this.selected
      this.$emit('select', this.name)
    }
  }
}

let PlanList = {
  components: {
    'plan-item': PlanListItem
  },
  template: `#plan-list-template`,
  data() {
    return {
      plans: [
        'Tasks',
        'Work',
        'Course',
      ],
      selectedTask: null,
    }
  },
  methods: {
    selectTask(taskName) {
      this.selectedTask = taskName
    }
  }
}

const vue = Vue.createApp({
  data() {
    return {
    }
  },
  components: {
    'plan-list': PlanList
  }
})
  .component('click-counter', {
    template: `#click-counter-template`,
    // Or:
    // template: /*html*/ `
    //   <button @click="count++">{{count}}</button>
    // `,
    data() {
      return {
        count: 0,
      }
    },
  })
  .mount('#vue')