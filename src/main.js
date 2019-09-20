import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import VueLazyLoadVideo from 'vue-lazyload-video';
import VueClazyLoad from 'vue-clazy-load';
import VueParallax from 'vue-parallax-js';

Vue.use(VueParallax);

Vue.use(VueClazyLoad);

// Register Components
// LazyVideo & LazyVideoAsGIF
// Vue.use(VueLazyLoadVideo);
// import store from './store'
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app');
