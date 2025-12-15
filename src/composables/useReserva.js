import { ref, watch } from "vue";
import { PACKAGES, dayPromo } from "@/services/packService.js";

export function useReserva() {
  const paquete = ref("uyuni");
  const fecha = ref("");
  const personas = ref(1);

  const resultado = ref("");

  function calcular() {
    const pkg = PACKAGES.find((p) => p.id === paquete.value);
    if (!pkg) return;

    const n = Math.max(1, personas.value);
    const d = new Date(fecha.value);

    if (isNaN(d)) {
      resultado.value = "Selecciona una fecha válida.";
      return;
    }

    const month = d.getMonth();
    let seasonal = 0;

    if (month >= 5 && month <= 7) seasonal = 0.1;
    else if (month === 11 || month === 0) seasonal = 0.08;

    const promo = dayPromo();

    const base = pkg.price * n;
    const total = Math.round(base * (1 + seasonal) * (1 - promo.discount));

    resultado.value = `
      Paquete: ${pkg.title}
      Personas: ${n}
      Total estimado: $${total}
    `;
  }

  watch([paquete, fecha, personas], calcular);

  return { paquete, fecha, personas, resultado };
}
