<template>
  <footer id="main-footer" role="contentinfo">
    <p>Camino del Cóndor © 2025 • {{ now }}</p>
  </footer>
</template>

<script>
import { useClock } from "@/composables/useClock";

export default {
  name: "FooterComponent",

  setup() {
    const { now } = useClock();
    return { now };
  },
};
</script>

<style scoped>
/* Tu CSS aquí */
</style>
