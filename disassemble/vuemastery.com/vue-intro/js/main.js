const app = Vue.createApp({

  data: function () {
    return {
      tamed: [],
      dangerous: true,
    }
  },
  methods: {
    addTamed(id) {
      this.tamed.push(id);
      // this.tamed += 1;
    },
    removeTamed(id) {
      console.log(this.tamed.indexOf(id))
      console.log(this.tamed)
      if (id >= 0) {
        this.tamed.splice(this.tamed.indexOf(id), 1);
      }
      // this.tamed += 1;
    }
  }

})