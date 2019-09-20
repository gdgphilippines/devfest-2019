import Vue from 'vue';
import Router from 'vue-router';
import routes from './assets/data/routes';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: '*',
      name: 'Page Not Found',
      component: PageNotFound
    }
  ]
  // scrollBehavior(to, from, savedPosition) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ x: 0, y: 0 });
  //     }, 500);
  //   });
  // }
});
