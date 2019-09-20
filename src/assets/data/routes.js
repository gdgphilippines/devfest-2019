import Index from '../../views/Index.vue';
import Home from '../../views/Home.vue';
import Speakers from '../../views/Speakers.vue';
import Schedule from '../../views/Schedule.vue';

export var indexNavigationRoutes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Speakers',
    path: '/speakers',
    component: Speakers
  },
  {
    name: 'Schedule',
    path: '/schedule',
    component: Schedule
  }
];

export default [
  {
    name: 'Index',
    path: '/',
    component: Index,
    redirect: { name: 'Home' },
    children: [...indexNavigationRoutes]
  }
];
