<!-- src/pages/PaquetesPage.vue -->
<template>
  <main id="contenido">
    <NavBar />

    <section id="paquetes" class="py-3">
      <div class="container">
        <h1 class="l-heading">
          <span class="text-primary">Nuestros</span> Paquetes
        </h1>

        <p>
          Elige entre nuestras experiencias: aventura, familia, cultura y
          naturaleza.
        </p>

        <div class="cards">
          <CardPaquete
            v-for="p in PACKAGES"
            :key="p.id"
            :data="p"
            @video="openVideo"
            @reservar="reservar"
          />
        </div>
      </div>
    </section>

    <VideoModal ref="modal" />
    <Footer />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import CardPaquete from "@/components/CardPaquete.vue";
import VideoModal from "@/components/VideoModal.vue";

import { PACKAGES } from "@/services/packService";

export default {
  name: "PaquetesPage",
  components: { NavBar, Footer, CardPaquete, VideoModal },

  data() {
    return {
      PACKAGES,
    };
  },

  methods: {
    openVideo(url) {
      this.$refs.modal.show(url);
    },

    reservar(data) {
      alert(`Has elegido reservar: ${data.title}`);
    },
  },
};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
</style>
