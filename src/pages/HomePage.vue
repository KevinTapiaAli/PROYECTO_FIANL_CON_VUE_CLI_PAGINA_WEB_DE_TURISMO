<template>
  <main id="contenido">
    <NavBar />

    <HeroVideo :videoSrc="videoHero" />

    <!-- Mensaje dinámico -->
    <section id="mensaje-dia" class="py-2" aria-live="polite">
      <div class="container">
        <p class="lead" style="text-align: center; font-weight: 600">
          {{ mensajeDia }}
        </p>
      </div>
    </section>

    <!-- Video 60 segundos -->
    <section id="intro-video" class="py-3">
      <div class="container" style="display: grid; gap: 16px">
        <h2 class="l-heading">
          <span class="text-primary">Conócenos</span> en 60 segundos
        </h2>

        <video
          :src="videoHero"
          controls
          playsinline
          poster="@/assets/img/imagen10.jpg"
          style="
            width: 100%;
            max-width: 900px;
            border-radius: 16px;
            margin-inline: auto;
            box-shadow: 0 16px 42px rgba(2, 6, 23, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.14);
          "
        ></video>

        <p class="lead" style="text-align: center; color: #cfd9e8">
          Un vistazo rápido a nuestras rutas y experiencias en Bolivia.
        </p>
      </div>
    </section>

    <!-- Sección lateral -->
    <section id="home-info" aria-labelledby="home-title">
      <div class="info-img"></div>

      <div class="info-content">
        <h2 id="home-title">
          <span class="text-primary">Camino del Cóndor:</span> viajes que
          inspiran
        </h2>
        <p>
          City tours, familia, aventura y cultura. Itinerarios claros con
          incluye/no incluye.
        </p>
        <RouterLink to="/empresa" class="btn btn-primary">
          Conócenos
        </RouterLink>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="py-3">
      <div class="box bg-gray">
        <i class="fa-solid fa-route fa-3x"></i>
        <h3>Rutas curadas</h3>
        <p>Itinerarios probados para distintos niveles.</p>
      </div>

      <div class="box bg-light">
        <i class="fa-solid fa-shield-heart fa-3x"></i>
        <h3>Seguridad</h3>
        <p>Guías certificados y protocolos verificados.</p>
      </div>

      <div class="box bg-primary">
        <i class="fa-solid fa-comments-dollar fa-3x"></i>
        <h3>Precio justo</h3>
        <p>Tarifas competitivas y descuentos anticipados.</p>
      </div>
    </section>

    <FooterComponent />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/Footer.vue";
import HeroVideo from "@/components/HeroVideo.vue";

export default {
  name: "HomePage",

  components: { NavBar, FooterComponent, HeroVideo },

  data() {
    return {
      videoHero: require("@/assets/video/video1.mp4"),
      mensajeDia: "",
    };
  },

  mounted() {
    const dias = [
      "Hoy es un gran día para viajar 🏔️",
      "Descubre Bolivia con nosotros 🇧🇴",
      "Viajar es vivir, ¡empecemos la aventura!",
      "Tu próxima historia comienza aquí ✈️",
    ];

    const aleatorio = Math.floor(Math.random() * dias.length);
    this.mensajeDia = dias[aleatorio];
  },
};
</script>

<style scoped>
/* Se usan los estilos originales */
</style>
