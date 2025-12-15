<template>
  <main id="contenido">
    <NavBar />

    <section class="py-3">
      <div class="container">
        <h1 class="l-heading">
          <span class="text-primary">Nuestra</span> Galería
        </h1>
        <p>Una muestra de paisajes y momentos que vivirás en Bolivia.</p>

        <div class="gallery-grid">
          <figure v-for="(img, index) in imagenes" :key="index">
            <img
              :src="img.src"
              :alt="img.alt"
              loading="lazy"
              width="800"
              height="600"
            />
            <figcaption class="visually-hidden">{{ img.alt }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "GaleriaPage",
  components: { NavBar, Footer },

  data() {
    return {
      imagenes: [
        {
          src: require("@/assets/img/imagen1.jpg"),
          alt: "Salar de Uyuni al atardecer",
        },
        {
          src: require("@/assets/img/imagen2.jpg"),
          alt: "Paisaje altiplánico",
        },
        {
          src: require("@/assets/img/imagen3.jpg"),
          alt: "Mercado tradicional",
        },
        { src: require("@/assets/img/imagen4.jpg"), alt: "Danza tradicional" },
        { src: require("@/assets/img/imagen5.jpg"), alt: "Textiles andinos" },
        { src: require("@/assets/img/imagen7.jpg"), alt: "Calles coloniales" },
        { src: require("@/assets/img/imagen9.jpg"), alt: "Ruta 4x4" },
        { src: require("@/assets/img/imagen11.jpg"), alt: "Laguna altoandina" },
      ],
    };
  },
};
</script>

<style scoped></style>
