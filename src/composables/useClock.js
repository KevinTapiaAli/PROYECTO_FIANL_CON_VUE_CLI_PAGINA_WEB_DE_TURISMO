// src/composables/useClock.js
import { ref, onMounted } from "vue";

export function useClock() {
  const now = ref("");

  onMounted(() => {
    const fmt = { dateStyle: "medium", timeStyle: "short" };

    const tick = () => {
      now.value = new Date().toLocaleString(undefined, fmt);
    };

    tick();
    setInterval(tick, 1000);
  });

  return { now };
}
