<!-- App.vue -->
<template>
  <div id="app">
    <!-- Aquí se cargan todas las páginas: Home, Empresa, Destinos, Paquetes, etc -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Puedes dejar vacío este style porque ya tienes estilos globales en estilos.css */
</style>
