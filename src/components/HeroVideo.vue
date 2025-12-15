<template>
  <div
    id="showcase"
    role="img"
    aria-label="Paisaje de Bolivia con montañas nevadas al amanecer"
  >
    <div class="container">
      <video class="hero-video" autoplay muted loop playsinline>
        <source :src="videoSrc" type="video/mp4" />
      </video>

      <div class="showcase-content">
        <h2>
          <span class="text-primary">Descubre</span> Bolivia con guías expertos
        </h2>

        <p class="lead">
          Paquetes flexibles, atención 24/7 y experiencias auténticas en el
          Altiplano y Amazonía.
        </p>

        <RouterLink to="/paquetes" class="btn">Ver paquetes</RouterLink>

        <button class="btn btn-primary btn-video" @click="playVideo">
          Ver video (1 min)
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroVideo",
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
  },

  methods: {
    playVideo() {
      alert("Aquí podemos abrir un modal con el video, si lo deseas.");
    },
  },
};
</script>

<style scoped>
/* Usa tu CSS ya existente */
</style>
