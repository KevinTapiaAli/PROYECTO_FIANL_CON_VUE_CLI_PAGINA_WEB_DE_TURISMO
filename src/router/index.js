// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue"), // Lazy Loading
  },
  {
    path: "/blog",
    component: () => import("../pages/BlogPage.vue"),
  },
  {
    path: "/contacto",
    component: () => import("../pages/ContactoPage.vue"),
  },
  {
    path: "/empresa",
    component: () => import("../pages/EmpresaPage.vue"),
  },
  {
    path: "/destinos",
    component: () => import("../pages/DestinosPage.vue"),
  },
  {
    path: "/galeria",
    component: () => import("../pages/GaleriaPage.vue"),
  },

  //  RUTA DE LISTA:
  {
    path: "/paquetes",
    name: "ListaPaquetes",
    component: () => import("../pages/PaquetesPage.vue"),
  },

  //  RUTA DE DETALLE
  {
    path: "/paquetes/:id",
    name: "DetallePaquete",
    component: () => import("../pages/PaquetesPage.vue"),
  },
  {
    path: "/testimonios",
    component: () => import("../pages/TestimoniosPage.vue"), // Lazy Loading
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
