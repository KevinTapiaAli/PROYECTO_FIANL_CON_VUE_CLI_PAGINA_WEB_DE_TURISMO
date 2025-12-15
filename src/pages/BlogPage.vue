<template>
  <main id="contenido">
    <NavBar />

    <section id="blog" class="py-3">
      <div class="container">
        <h1 class="l-heading">
          <span class="text-primary">Blog</span> de Viajes
        </h1>
        <p>
          Consejos útiles, experiencias y novedades para planear tu próximo
          viaje a Bolivia.
        </p>

        <div class="blog-grid">
          <article v-for="(b, i) in posts" :key="i" class="blog-card">
            <img
              :src="b.img"
              :alt="b.alt"
              loading="lazy"
              width="800"
              height="533"
            />
            <h3>{{ b.titulo }}</h3>
            <p>{{ b.descripcion }}</p>
            <a href="#" class="btn btn-primary">Leer más</a>
          </article>
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
  name: "BlogPage",
  components: { NavBar, Footer },

  data() {
    return {
      posts: [
        {
          img: require("@/assets/img/imagen22.jpg"),
          alt: "Salar de Uyuni espejo",
          titulo: "10 consejos para visitar el Salar de Uyuni",
          descripcion: "Qué llevar, clima y mejores fotos espejo.",
        },
        {
          img: require("@/assets/img/imagen23.jpg"),
          alt: "Lago Titicaca",
          titulo: "Guía práctica para visitar el Lago Titicaca",
          descripcion: "Isla del Sol, ritual andino y rutas.",
        },
        {
          img: require("@/assets/img/imagen11.jpg"),
          alt: "Sendero ecológico",
          titulo: "Turismo responsable en comunidades andinas",
          descripcion: "Cómo viajar apoyando a las comunidades locales.",
        },
      ],
    };
  },
};
</script>
