import { ref, onMounted } from "vue";

export function useDayMessage() {
  const mensaje = ref("");

  onMounted(() => {
    const d = new Date().getDay();
    const textos = [
      "☀️ Domingo de descanso: recarga energías.",
      "🚀 Lunes de inspiración.",
      "🏛️ Martes cultural.",
      "🌿 Miércoles natural.",
      "🧭 Jueves de aventura.",
      "🎒 Viernes viajero.",
      "🚙 Sábado explorador.",
    ];
    mensaje.value = textos[d];
  });

  return { mensaje };
}
