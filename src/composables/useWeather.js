import { ref } from "vue";

const API_KEY = process.env.VUE_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export function useWeather() {
  const weather = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchWeather = async (lat, lon) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Error al obtener datos del clima");
      }

      weather.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    weather,
    loading,
    error,
    fetchWeather,
  };
}
