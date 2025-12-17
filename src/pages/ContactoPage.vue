<template>
  <main id="contenido">
    <NavBar />

    <!-- FORMULARIO DE CONTACTO -->
    <section id="contact-form" class="py-3">
      <div class="container">
        <h1 class="l-heading"><span class="text-primary">Contáctanos</span></h1>
        <p>Completa el formulario para cotizar tu viaje.</p>

        <form @submit.prevent="enviarFormulario">
          <div class="form-group">
            <label>Nombre</label>
            <input v-model="form.nombre" required minlength="2" />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input v-model="form.email" type="email" required />
          </div>

          <div class="form-group">
            <label>Teléfono</label>
            <input v-model="form.tel" />
          </div>

          <div class="form-group">
            <label>Paquete</label>
            <select v-model="form.paquete">
              <option value="uyuni">Uyuni</option>
              <option value="titicaca">Titicaca</option>
              <option value="tiwanaku">Tiwanaku</option>
            </select>
          </div>

          <div class="form-group">
            <label>Fecha del viaje</label>
            <input type="date" v-model="form.fecha" required />
          </div>

          <div class="form-group">
            <label>Personas</label>
            <input type="number" v-model="form.personas" min="1" />
          </div>

          <div class="form-group">
            <label>Mensaje</label>
            <textarea v-model="form.mensaje" required minlength="10"></textarea>
          </div>

          <button class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>

    <!-- COTIZADOR (useReserva) -->
    <section class="py-3 container">
      <h2 class="l-heading">Cotización Rápida</h2>

      <form @submit.prevent class="cotizador">
        <select v-model="paquete">
          <option v-for="p in PACKAGES" :key="p.id" :value="p.id">
            {{ p.title }}
          </option>
        </select>

        <input type="date" v-model="fecha" />
        <input type="number" min="1" v-model="personas" />

        <p class="resultado">{{ resultado }}</p>
      </form>
    </section>

    <section id="contact-info" class="bg-dark">
      <div class="container">
        <div class="box">
          <i class="fa-solid fa-house-chimney-user fa-3x"></i>
          <h3>Ubicación</h3>
          <p>Av. Principal 123, La Paz</p>
        </div>

        <div class="box">
          <i class="fas fa-phone fa-3x"></i>
          <h3>Teléfono</h3>
          <p><a href="tel:+59170000000">+591 700 00000</a></p>
        </div>

        <div class="box">
          <i class="fas fa-envelope fa-3x"></i>
          <h3>Email</h3>
          <p>
            <a href="mailto:contacto@caminodelcondor.com">
              contacto@caminodelcondor.com
            </a>
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

import { useReserva } from "@/composables/useReserva";
import { PACKAGES } from "@/services/packService";

export default {
  name: "ContactoPage",
  components: { NavBar, Footer },

  setup() {
    const { paquete, fecha, personas, resultado } = useReserva();

    return {
      PACKAGES,
      paquete,
      fecha,
      personas,
      resultado,
    };
  },

  data() {
    return {
      form: {
        nombre: "",
        email: "",
        tel: "",
        paquete: "uyuni",
        fecha: "",
        personas: 2,
        mensaje: "",
      },
    };
  },

  methods: {
    enviarFormulario() {
      alert("Formulario enviado correctamente");
    },
  },
};
</script>

<style scoped></style>
