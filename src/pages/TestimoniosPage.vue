<template>
  <main id="contenido">
    <NavBar />

    <section id="testimonials" class="bg-primary">
      <div class="container">
        <h1 class="l-heading">Experiencias de nuestros viajeros</h1>

        <TestimonioItem
          :imagen="require('@/assets/img/imagen4.jpg')"
          alt="Viajera sonriendo"
          texto="Una experiencia inolvidable en Uyuni."
          autor="Sofía A."
        />

        <TestimonioItem
          :imagen="require('@/assets/img/imagen7.jpg')"
          alt="Pareja recorriendo calles coloniales"
          texto="Titicaca y Tiwanaku, logística perfecta."
          autor="Diego & Laura"
        />

        <TestimonioItem
          :imagen="require('@/assets/img/imagen5.jpg')"
          alt="Viajero mochilero"
          texto="Sajama superó nuestras expectativas."
          autor="Martín G."
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
  name: "TestimoniosPage",
  components: { NavBar, Footer, TestimonioItem },
};
</script>

<style scoped></style>
