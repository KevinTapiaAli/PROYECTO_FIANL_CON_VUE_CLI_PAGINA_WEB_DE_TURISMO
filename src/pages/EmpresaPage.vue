<template>
  <main id="contenido">
    <NavBar />

    <!-- Empresa -->
    <section id="about-info" class="bg-light py-3">
      <div class="container">
        <div class="info-left">
          <h1 class="l-heading">
            <span class="text-primary">Acerca de</span> Camino del Cóndor
          </h1>

          <p>
            Somos una agencia boliviana especializada en experiencias
            auténticas: Salar de Uyuni, Lago Titicaca, Tiwanaku, Madidi, Sajama
            y más. Nuestro equipo de guías certificados prioriza seguridad,
            cultura y servicio.
          </p>

          <p>
            Operamos con proveedores locales, promovemos el turismo responsable
            y la reciprocidad con las comunidades que visitamos.
          </p>
        </div>

        <div class="info-right">
          <img
            :src="imagenEquipo"
            alt="Equipo de la agencia en operaciones de campo"
            loading="lazy"
            width="800"
            height="533"
          />
        </div>
      </div>
    </section>

    <!-- Testimonios -->
    <section id="testimonials" class="bg-primary">
      <div class="container">
        <h2 class="l-heading">Testimonios</h2>

        <TestimonioItem
          :imagen="require('@/assets/img/imagen8.jpg')"
          alt="Cliente durante un recorrido cultural guiado"
          texto="Titicaca y Tiwanaku fueron increíbles. La organización fue impecable."
          autor="Mariana R."
        />

        <TestimonioItem
          :imagen="require('@/assets/img/imagen6.jpg')"
          alt="Viajero disfrutando de una experiencia en el altiplano"
          texto="El tour al Salar de Uyuni fue inolvidable. Excelentes guías y logística."
          autor="Daniel P."
        />
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import TestimonioItem from "@/components/TestimonioItem.vue";

export default {
  name: "EmpresaPage",
  components: { NavBar, Footer, TestimonioItem },

  data() {
    return {
      imagenEquipo: require("@/assets/img/imagen17.jpg"),
    };
  },
};
</script>

<style scoped></style>
