const demo1 = Vue.createApp({

  data() {
    return {
      show: true
    }
  },
  methods: {
  }

})
  .mount('#demo1')



const demo2 = Vue.createApp({

  data() {
    return {
      show: true
    }
  },
  methods: {
  }

})
  .mount('#demo2')



const demo3 = Vue.createApp({

  data() {
    return {
      show: true
    }
  },
  methods: {
  }

})
  .mount('#demo3')



const demo4 = Vue.createApp({

  data() {
    return {
      show: true
    }
  },
  methods: {
  }

})
  .mount('#demo4')



Vue.createApp({
  data() {
    return {
      show: false
    }
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        scaleX: 0.8,
        scaleY: 1.2
      })
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        scaleX: 1.5,
        scaleY: 0.7,
        opacity: 1,
        x: 150,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)'
      })
      gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
      })
    }
  }
}).mount('#demo5')



Vue.createApp({
  data() {
    return {
      on: false
    }
  }
}).mount('#demo6')



Vue.createApp({
  data() {
    return {
      view: 'v-a'
    }
  },
  components: {
    'v-a': {
      template: '<div>Компонент А</div>'
    },
    'v-b': {
      template: '<div>Компонент B</div>'
    }
  }
}).mount('#demo7')


// #demo8
Vue.createApp({
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle() {
      this.items = _.shuffle(this.items)
    }
  }
}).mount('#demo8')


// #demo9
Vue.createApp({
  data() {
    return {
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  computed: {
    computedList() {
      var vm = this
      return this.list.filter(item => {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
      })
    }
  }
}).mount('#demo9')


// #demo10
Vue.createApp({
  data() {
    return {
      show: true,
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1500,
      stop: true
    }
  },
  mounted() {
    this.show = false
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      // console.log(el)
      // console.log(done)

      var vm = this
      Velocity(
        el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete: function () {
            done()
            if (!vm.stop) vm.show = false
          }
        }
      )
    },
    leave(el, done) {
      var vm = this
      Velocity(
        el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete: function () {
            done()
            vm.show = true
          }
        }
      )
    }
  }
}).mount('#demo10')



Vue.createApp({
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
    }
  }
}).mount('#demo11')



// #demo12
const defaultSides = 10;
const stats = Array.apply(null, { length: defaultSides }).map(() => 100);

Vue.createApp({
  data() {
    return {
      stats: stats,
      points: generatePoints(stats),
      sides: defaultSides,
      minRadius: 50,
      interval: null,
      updateInterval: 500
    };
  },
  watch: {
    sides(newSides, oldSides) {
      var sidesDifference = newSides - oldSides;
      if (sidesDifference > 0) {
        for (var i = 1; i <= sidesDifference; i++) {
          this.stats.push(this.newRandomValue());
        }
      } else {
        var absoluteSidesDifference = Math.abs(sidesDifference);
        for (var i = 1; i <= absoluteSidesDifference; i++) {
          this.stats.shift();
        }
      }
    },
    stats(newStats) {
      gsap.to(this.$data, this.updateInterval / 1000, {
        points: generatePoints(newStats)
      });
    },
    updateInterval() {
      this.resetInterval();
    }
  },
  mounted() {
    this.resetInterval();
  },
  methods: {
    randomizeStats() {
      var vm = this;
      this.stats = this.stats.map(() => vm.newRandomValue());
    },
    newRandomValue() {
      return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius));
    },
    resetInterval() {
      var vm = this;
      clearInterval(this.interval);
      this.randomizeStats();
      this.interval = setInterval(() => {
        vm.randomizeStats();
      }, this.updateInterval);
    }
  }
}).mount("#demo12");

function valueToPoint(value, index, total) {
  var x = 0;
  var y = -value * 0.9;
  var angle = ((Math.PI * 2) / total) * index;
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var tx = x * cos - y * sin + 100;
  var ty = x * sin + y * cos + 100;
  return { x: tx, y: ty };
}

function generatePoints(stats) {
  var total = stats.length;
  return stats
    .map(function (stat, index) {
      var point = valueToPoint(stat, index, total);
      return point.x + "," + point.y;
    })
    .join(" ");
}



// #demo13
Vue.createApp({
  data() {
    return {
      firstNumber: 20,
      secondNumber: 40
    }
  },
  computed: {
    result() {
      return this.firstNumber + this.secondNumber
    }
  }
})
  .component('animated-integer', {
    template: /*html*/ `<span>{{ fullValue }}</span>`,
    props: {
      value: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        tweeningValue: 0
      }
    },
    computed: {
      fullValue() {
        return Math.floor(this.tweeningValue)
      }
    },
    methods: {
      tween(newValue, oldValue) {
        gsap.to(this.$data, {
          duration: 0.5,
          tweeningValue: newValue,
          ease: 'sine'
        })
      }
    },
    watch: {
      value(newValue, oldValue) {
        this.tween(newValue, oldValue)
      }
    },
    mounted() {
      this.tween(this.value, 0)
    }
  })
  .mount('#demo13')



// #demo14
Vue.createApp({
  data() {
    return {
      startX: 0,
      x: 0,
      y: 0,
      flip: false,
      audioPlay: false,
      startArms: 0
    }
  },
  methods: {
    armsTL() {
      let tl = new TimelineMax();
      tl.add('startarms')
      tl.to('#backhand', 2, {
        x: -16,
        rotation: 150,
        transformOrigin: '50% 50%'
      }, 'startarms');
      tl.to('#rightarm', 2, {
        rotation: 30,
        transformOrigin: '100% 0'
      }, 'startarms');
      tl.to('#newrightarm', 2, {
        x: -94,
        y: -918,
        rotation: 10,
        transformOrigin: '100% 100%'
      }, 'startarms');

      tl.to('#hand', 2, {
        x: -15,
        y: -7,
        rotation: 90,
        transformOrigin: '50% 50%'
      }, 'startarms');
      tl.to('#leftarm', 2, {
        rotation: 20,
        transformOrigin: '100% 0'
      }, 'startarms');
      tl.to('#newleftarm', 2, {
        x: -100,
        y: -924,
        transformOrigin: '100% 100%'
      }, 'startarms');

      return tl;
    },
    coordinates(e) {
      const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/Whoa.mp3'),
        walleBox = document.getElementById('walle').getBoundingClientRect(),
        walleCoords = walleBox.width / 2 + walleBox.left;

      if (this.startArms == 0) {
        this.startArms = this.armsTL();
      }

      this.y = e.clientY / 80 - 2;
      if (e.clientX > walleCoords) {
        this.x = -(e.clientX / 200);
        this.flip = true;
        if (this.audioPlay === false) {
          audio.play();
          this.audioPlay = true;
        }
      } else {
        this.audioPlay = false;
        this.x = e.clientX / 200 - 5;
        this.flip = false;

        TweenMax.set("#righteyeb2", {
          scaleX: 1 + (1 - e.clientX / walleCoords) / 5
        });
        TweenMax.set("#lefteyeb2", {
          scaleX: 1 + (1 - e.clientX / walleCoords) / 5
        });
        TweenMax.set("#walle", {
          x: ((e.clientX / walleCoords) * 50) - 40
        });

        this.startArms.progress(1 - (e.clientX / walleCoords)).pause();

      }
    },
  },
  mounted() {
    let tl = new TimelineMax({
      repeat: -1,
      repeatDelay: 2
    });

    tl.add('redo')
    tl.to('#lefteye', 0.5, {
      rotation: 5,
      repeat: 3,
      yoyo: true,
      transformOrigin: '100% 50%',
      ease: Sine.easeOut
    }, 'redo');
    tl.to('#righteye', 0.5, {
      rotation: -5,
      repeat: 3,
      yoyo: true,
      transformOrigin: '0% 30%',
      ease: Sine.easeOut
    }, 'redo+=0');
    tl.fromTo('#lefteyeball', 0.05, {
      scaleY: 1
    }, {
      scaleY: 0,
      repeat: 3,
      yoyo: true,
      transformOrigin: '50% 50%',
      ease: Circ.easeOut
    }, 'redo+=4');
    tl.fromTo('#righteyeball', 0.05, {
      scaleY: 1
    }, {
      scaleY: 0,
      repeat: 3,
      yoyo: true,
      transformOrigin: '50% 50%',
      ease: Circ.easeOut
    }, 'redo+=4');
    tl.to('#eyecontain', 0.4, {
      rotation: -15,
      repeat: 1,
      yoyo: true,
      transformOrigin: '50% 50%',
      ease: Sine.easeInOut
    }, 'redo+=2');
  }
}).mount('#demo14')

TweenMax.to('p', 0.5, {
  opacity: 0,
  delay: 2,
  ease: Sine.easeIn
});