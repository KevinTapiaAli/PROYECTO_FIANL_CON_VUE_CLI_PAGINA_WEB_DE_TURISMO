import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";
import ContactoPage from "../pages/ContactoPage.vue";
import EmpresaPage from "../pages/EmpresaPage.vue";
import DestinosPage from "../pages/DestinosPage.vue";
import GaleriaPage from "../pages/GaleriaPage.vue";
import PaquetesPage from "../pages/PaquetesPage.vue";
import TestimoniosPage from "../pages/TestimoniosPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/contacto", component: ContactoPage },
  { path: "/empresa", component: EmpresaPage },
  { path: "/destinos", component: DestinosPage },
  { path: "/galeria", component: GaleriaPage },
  { path: "/paquetes", component: PaquetesPage },
  { path: "/testimonios", component: TestimoniosPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
