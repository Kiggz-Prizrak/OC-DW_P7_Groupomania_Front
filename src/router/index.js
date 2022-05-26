import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import ProfilView from '../views/ProfilView.vue';
import AccueilView from '../views/AccueilView.vue';
import store from '../store';

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      auth: false,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      auth: false,
    },
  },
  {
    path: '/profil/:UserId',
    name: 'profil',
    component: ProfilView,
    props(route) {
      const UserId = Number.parseInt(route.params.UserId, 10);
      console.log(UserId);
      if (Number.isNaN(UserId)) {
        return 0;
      }
      return { UserId };
    },
    meta: {
      auth: true,
    },
  },
  {
    path: '/',
    name: 'accueil',
    component: AccueilView,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.token) {
    return next({
      name: 'login',
    });
  }
  return next();
});

export default router;
