# 🌄 Camino del Cóndor – Plataforma Turística Web

Proyecto desarrollado con **Vue 3** que presenta paquetes turísticos de Bolivia, integrando
UI dinámica, consumo de APIs externas y buenas prácticas de desarrollo frontend moderno.

---

## 📌 Objetivo del Proyecto

Desarrollar una aplicación web interactiva que permita a los usuarios:

- Visualizar paquetes turísticos
- Acceder al detalle de cada destino
- Obtener información útil como precios y clima actual
- Recibir recomendaciones según presupuesto

---

## 🚀 Tecnologías Utilizadas

- Vue 3 (Options API + Composables)
- Vue Router
- JavaScript (ES6+)
- HTML5 / CSS3
- API externa OpenWeatherMap
- Variables de entorno (.env)
- Arquitectura basada en componentes y servicios

---

## 🧠 Aportes Tecnológicos

### 1️⃣ Sistema de Recomendación (IA básica)

- Filtrado dinámico de paquetes según presupuesto del usuario.
- Implementado mediante lógica reactiva y `computed properties`.

### 2️⃣ Integración de API Externa de Clima

- Consumo de la API OpenWeatherMap.
- Uso de coordenadas geográficas reales por destino.
- Manejo de estados de carga y error.
- Seguridad mediante variables de entorno.

---

## 🗂️ Estructura del Proyecto

src/
├── assets/
├── components/
├── composables/
│ ├── useWeather.js
│ └── useRecommendation.js
├── pages/
│ └── PaquetesPage.vue
├── router/
├── services/
│ └── packService.js
└── main.js

---

## ⚙️ Guía de Instalación

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/camino-del-condor.git

###Instalar dependencias
npm install
###Crear un archivo .env en la raíz del proyecto:
VUE_APP_WEATHER_API_KEY=TU_API_KEY_AQUI
###ejecutar proyecto
npm run serve
```
