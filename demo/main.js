import Vue from 'vue';
import 'muse-ui/dist/muse-ui.css';
import MuseUI from 'muse-ui';
import Progress from '../src';
import App from './App';

Vue.use(MuseUI);
Vue.use(Progress, {
  color: 'secondary'
});

window.$progress = Progress;

new Vue({
  ...App
}).$mount('#app');
