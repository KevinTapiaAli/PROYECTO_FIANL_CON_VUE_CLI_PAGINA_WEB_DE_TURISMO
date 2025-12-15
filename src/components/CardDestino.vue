<template>
  <div class="destino">
    <img :src="imagen" :alt="alt" loading="lazy" width="220" height="140" />

    <div>
      <h3>{{ titulo }}</h3>
      <p>{{ descripcion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDestino",
  props: {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    alt: { type: String, required: true },
  },
};
</script>

<style scoped>
/* usa estilos globales existentes */
</style>
