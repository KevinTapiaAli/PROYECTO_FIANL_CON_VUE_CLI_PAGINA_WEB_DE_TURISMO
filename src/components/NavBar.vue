<template>
  <nav id="navbar" aria-label="Navegación principal">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/" aria-label="Ir al inicio de Camino del Cóndor">
          Camino del Cóndor
        </RouterLink>
      </h1>

      <ul role="list">
        <li>
          <RouterLink to="/" :class="{ current: isActive('/') }"
            >Inicio</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/empresa" :class="{ current: isActive('/empresa') }"
            >Nosotros</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/paquetes" :class="{ current: isActive('/paquetes') }"
            >Paquetes</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/destinos" :class="{ current: isActive('/destinos') }"
            >Destinos</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/galeria" :class="{ current: isActive('/galeria') }"
            >Galería</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/testimonios"
            :class="{ current: isActive('/testimonios') }"
            >Testimonios</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/blog" :class="{ current: isActive('/blog') }"
            >Blog</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contacto" class="btn-cta">Reservar</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "NavBar",

  setup() {
    const route = useRoute();

    const isActive = (path) => route.path === path;

    return { isActive };
  },
};
</script>

<style scoped>
/* Usa el estilo original de tu CSS */
</style>
