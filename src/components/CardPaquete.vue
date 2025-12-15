<!-- src/components/CardPaquete.vue -->
<template>
  <article class="card paquete-card">
    <img :src="data.image" :alt="data.title" />

    <h3>{{ data.title }}</h3>
    <p>Precio base: ${{ data.price }}</p>
    <p>
      <strong>Hoy desde: ${{ data.price }}</strong>
    </p>

    <div class="actions">
      <button class="btn btn-primary" @click="$emit('video', data.video)">
        Ver Video
      </button>

      <button class="btn" @click="$emit('reservar', data)">Reservar</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "CardPaquete",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.paquete-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
