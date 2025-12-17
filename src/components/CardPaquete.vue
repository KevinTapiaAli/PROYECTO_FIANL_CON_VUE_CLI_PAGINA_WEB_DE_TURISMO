<template>
  <div class="paquete-card">
    <img :src="data.image" :alt="data.title" />

    <div class="paquete-content">
      <h3 class="paquete-title">{{ data.title }}</h3>

      <div class="paquete-info">
        <p>
          Precio: <strong>${{ data.price }}</strong>
        </p>
      </div>
    </div>

    <div class="paquete-actions">
      <button class="btn btn-primary" @click="$emit('reservar', data)">
        Reservar
      </button>

      <router-link
        :to="{ name: 'DetallePaquete', params: { id: data.id } }"
        class="btn btn-secondary"
      >
        Ver Detalles
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPaquete",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.paquete-card {
  background: #2c2c2c;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.paquete-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.paquete-content {
  padding: 15px;
  flex-grow: 1;
}

.paquete-title {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #fff;
}

.paquete-info p {
  margin: 5px 0;
  font-size: 0.95em;
  color: #ccc;
}

.paquete-actions {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid #444;
  gap: 10px;
}
</style>
