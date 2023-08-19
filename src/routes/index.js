// routes/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Contact from '../views/Contact.vue';
import Connexion from '../views/Connexion.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  { path: "/dashboard", name: "dashboard", component: Dashboard },
  { path: "/connexion", name: "connexion", component: Connexion },
  { path: "/about", name: "about", component: About },
  { path: "/contact", name: "contact", component: Contact },





];

const router = new VueRouter({
  routes,
});

export default router;
