<template>
  <main id="contenido">
    <NavBar />

    <section id="destinos" class="py-3">
      <div class="container">
        <h1 class="l-heading">
          <span class="text-primary">Principales</span> Destinos
        </h1>
        <p>Explora Bolivia con nuestros destinos más populares.</p>

        <CardDestino
          v-for="(d, index) in destinos"
          :key="index"
          :titulo="d.titulo"
          :descripcion="d.descripcion"
          :imagen="d.imagen"
          :alt="d.alt"
        />
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import CardDestino from "@/components/CardDestino.vue";

export default {
  name: "DestinosPage",
  components: { NavBar, Footer, CardDestino },

  data() {
    return {
      destinos: [
        {
          titulo: "Salar de Uyuni",
          descripcion: "El desierto de sal más grande del mundo.",
          imagen: require("@/assets/img/imagen18.jpg"),
          alt: "Salar de Uyuni",
        },
        {
          titulo: "Lago Titicaca",
          descripcion: "El lago navegable más alto del mundo.",
          imagen: require("@/assets/img/imagen13.jpg"),
          alt: "Lago Titicaca",
        },
        {
          titulo: "Tiwanaku",
          descripcion: "Centro arqueológico Patrimonio de la Humanidad.",
          imagen: require("@/assets/img/imagen14.jpg"),
          alt: "Tiwanaku",
        },
        {
          titulo: "Nevado Sajama",
          descripcion: "El pico más alto de Bolivia.",
          imagen: require("@/assets/img/imagen20.jpg"),
          alt: "Nevado Sajama",
        },
        {
          titulo: "Parque Madidi",
          descripcion: "Reserva de biodiversidad única.",
          imagen: require("@/assets/img/imagen21.jpg"),
          alt: "Parque Madidi",
        },
      ],
    };
  },
};
</script>
