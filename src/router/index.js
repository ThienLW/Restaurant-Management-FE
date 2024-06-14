// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import LoginView from '../components/LoginView.vue';
import RegisterView from '../components/RegisterView.vue';
import UserManagerView from '../components/UserManagerView.vue';
import AddUserView from '../components/AddUserView.vue'
import EditUserView from '../components/EditUserView.vue';
import ImportCSVView from '../components/ImportCSVView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/usermanager',
    name: 'UserManager',
    component: UserManagerView,
    meta: { requiresAuth: true }
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUserView,
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-user',
    name: 'EditUser',
    component: EditUserView,
    meta: { requiresAuth: true }
  },
  {
    path: '/import-csv',
    name: 'ImportCSV',
    component: ImportCSVView,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('userToken');

  if (requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
