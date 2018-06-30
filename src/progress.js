import Vue from 'vue';
import config from './config';
const Progress = Vue.extend({
  name: 'Progress',
  data () {
    return {
      show: false,
      value: 0
    };
  },
  methods: {
    start () {
      if (this.show) return;
      this.show = true;
      this.value = 0;
      this.inc();
    },
    inc () {
      if (this.timer) clearTimeout(this.timer);
      if (this.value >= 100) return;
      let value = this.value;
      let amount = 0;
      switch (true) {
        case value >= 0 && value < 20:
          amount = 10;
          break;
        case value >= 20 && value < 50:
          amount = 4;
          break;
        case value >= 50 && value < 80:
          amount = 2;
          break;
        case value >= 80 && value < 99:
          amount = 0.5;
          break;
        default:
          amount = 0;
      }
      value = value + amount;
      value = Math.max(value, 0);
      value = Math.min(value, 99.4);
      this.value = value;
      this.timer = setTimeout(() => this.inc(), config.speed);
    },
    done () {
      this.value = 100;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.show = false;
      }, 300);
    }
  },
  render (h) {
    return h('mu-fade-transition', [
      this.show ? h('mu-linear-progress', {
        staticClass: ['mu-progress', config.className].join(' '),
        props: {
          mode: 'determinate',
          size: config.size,
          color: config.color,
          value: this.value
        },
        style: {
          'z-index': config.zIndex,
          'top': config.top + 'px'
        }
      }) : undefined
    ]);
  }
});
let progress;
const isServer = typeof window === 'undefined';
let mounted;
export default {
  start () {
    if (isServer) return;
    if (!mounted) {
      progress = new Progress({
        el: document.createElement('div')
      });
      document.body.appendChild(progress.$el);
      mounted = true;
    }
    progress.start();
  },
  done () {
    if (isServer || !progress) return;
    progress.done();
  }
};
