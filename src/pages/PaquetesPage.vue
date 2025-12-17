<template>
  <main id="contenido">
    <NavBar />

    <section id="paquetes" class="py-3">
      <div class="container">
        <div v-if="loading" class="loading-message">
          <p>Cargando experiencias turísticas... por favor, espere.</p>
        </div>

        <template v-else>
          <div v-if="isDetailPage">
            <div v-if="selectedPackage">
              <h1 class="l-heading">
                Detalle:
                <span class="text-primary">{{ selectedPackage.title }}</span>
              </h1>

              <div class="package-detail-grid">
                <div class="package-image-container">
                  <img
                    :src="selectedPackage.image"
                    :alt="selectedPackage.title"
                    class="package-detail-image"
                  />

                  <div class="package-price-box">
                    Precio: ${{ selectedPackage.price }}
                  </div>

                  <button
                    class="btn btn-primary btn-large"
                    @click="reservar(selectedPackage)"
                  >
                    Reservar Ahora
                  </button>

                  <router-link
                    to="/paquetes"
                    class="btn btn-secondary btn-large btn-volver"
                  >
                    &larr; Volver a Paquetes
                  </router-link>
                </div>

                <div class="package-description">
                  <h2>Descripción del Destino</h2>
                  <p>
                    {{
                      selectedPackage.description ||
                      'Descripción no disponible. Por favor, añada el campo "description" al paquete en packService.js.'
                    }}
                  </p>

                  <h3 style="margin-top: 25px">¿Qué incluye?</h3>
                  <ul class="package-features">
                    <li>Transporte desde La Paz.</li>
                    <li>Guía local especializado.</li>
                    <li>Entradas a las atracciones.</li>
                  </ul>

                  <h3 style="margin-top: 25px">Clima actual del destino</h3>

                  <div v-if="weatherLoading">
                    <p>Cargando clima...</p>
                  </div>

                  <div v-else-if="weatherError">
                    <p style="color: red">{{ weatherError }}</p>
                  </div>

                  <div v-else-if="weather">
                    <p>
                      🌡️ Temperatura:
                      <strong>{{ weather.main.temp }} °C</strong>
                    </p>
                    <p>
                      🌤️ Condición:
                      <strong>{{ weather.weather[0].description }}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div v-else>
              <h1 class="l-heading">Error 404</h1>
              <p>
                Lo sentimos, el paquete con ID '{{ $route.params.id }}' no fue
                encontrado.
              </p>
            </div>
          </div>

          <template v-else>
            <h1 class="l-heading">
              <span class="text-primary">Nuestros</span> Paquetes
            </h1>

            <p>
              Elige entre nuestras experiencias: aventura, familia, cultura y
              naturaleza.
            </p>

            <h2 style="margin-top: 30px">Recomendados según tu presupuesto</h2>

            <label>
              Presupuesto máximo: <strong>${{ maxPrice }}</strong>
            </label>

            <input
              type="range"
              min="50"
              max="500"
              step="10"
              v-model="maxPrice"
              style="width: 100%; margin-bottom: 20px"
            />

            <div class="cards">
              <CardPaquete
                v-for="p in recommendedPackages"
                :key="p.id"
                :data="p"
                @reservar="reservar"
              />
            </div>

            <hr style="margin: 40px 0" />

            <div class="cards">
              <div v-if="PACKAGES.length === 0" class="no-packages">
                <p>Lo sentimos, no hay paquetes disponibles en este momento.</p>
              </div>

              <CardPaquete
                v-for="p in PACKAGES"
                :key="p.id"
                :data="p"
                @reservar="reservar"
              />
            </div>
          </template>
        </template>
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

import { getPackages } from "@/services/packService";
import { useRecommendation } from "@/composables/useRecommendation";
import { useWeather } from "@/composables/useWeather";

export default {
  name: "PaquetesPage",

  components: {
    NavBar,
    Footer,
    CardPaquete,
    VideoModal,
  },

  data() {
    return {
      PACKAGES: [],
      loading: true,
      maxPrice: 200,

      //  CLIMA
      weather: null,
      weatherLoading: false,
      weatherError: null,
    };
  },

  computed: {
    isDetailPage() {
      return !!this.$route.params.id;
    },

    selectedPackage() {
      if (this.isDetailPage) {
        const id = this.$route.params.id;
        return this.PACKAGES.find((p) => p.id.toString() === id);
      }
      return null;
    },

    recommendedPackages() {
      return useRecommendation(this.PACKAGES, this.maxPrice);
    },
  },

  async mounted() {
    try {
      this.PACKAGES = await getPackages();
    } catch (error) {
      console.error("Error al cargar paquetes:", error);
    } finally {
      this.loading = false;
    }

    //  CARGAR CLIMA
    this.loadWeather();
  },

  watch: {
    $route() {
      this.loadWeather();
    },
  },

  methods: {
    async loadWeather() {
      if (!this.selectedPackage || !this.selectedPackage.coords) return;

      const { weather, fetchWeather } = useWeather();

      this.weatherLoading = true;
      this.weatherError = null;

      try {
        await fetchWeather(
          this.selectedPackage.coords.lat,
          this.selectedPackage.coords.lng
        );
        this.weather = weather.value;
      } catch (e) {
        this.weatherError = "No se pudo obtener el clima";
      } finally {
        this.weatherLoading = false;
      }
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

.loading-message {
  padding: 40px;
  text-align: center;
  font-size: 1.2em;
  color: #007bff;
}

.no-packages {
  grid-column: 1 / -1;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  background: #f8f8f8;
}

.package-detail-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  padding-top: 20px;
}

.package-image-container {
  text-align: center;
}

.package-detail-image {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
}

.package-price-box {
  background: #4caf50;
  color: white;
  font-size: 1.8em;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .package-detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
