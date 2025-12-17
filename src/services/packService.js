import imgUyuni from "@/assets/img/imagen10.jpg";
import imgTiticaca from "@/assets/img/imagen13.jpg";
import imgTiwanaku from "@/assets/img/imagen14.jpg";

class TravelPackage {
  constructor({ id, title, price, image, video, description, coords }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.video = video;
    this.description = description;

    this.coords = coords;
  }
}

const MOCK_PACKAGES = [
  new TravelPackage({
    id: "uyuni",
    title: "Salar de Uyuni 3D/2N",
    price: 350,
    image: imgUyuni,
    video: "https://www.youtube.com/embed/9y0Kz5-VIDEO_UYUNI",
    description:
      "Una aventura inolvidable de tres días por el desierto de sal más grande del mundo. Incluye tours a la Isla Incahuasi, Laguna Colorada y géiseres del Altiplano.",

    coords: { lat: -20.177, lng: -67.4897 },
  }),
  new TravelPackage({
    id: "titicaca",
    title: "Lago Titicaca Full Day",
    price: 90,
    image: imgTiticaca,
    video: "https://www.youtube.com/embed/7Qp6-VIDEO_TITICACA",
    description:
      "Viaje de día completo a la cuna de la civilización Andina. Navega por el lago navegable más alto del mundo y visita las comunidades ancestrales.",

    coords: { lat: -16.0354, lng: -69.0061 },
  }),
  new TravelPackage({
    id: "tiwanaku",
    title: "Tiwanaku Cultural",
    price: 70,
    image: imgTiwanaku,
    video: "https://www.youtube.com/embed/1x2y-VIDEO_TIWANAKU",
    description:
      "Explora las impresionantes ruinas de la cultura Tiwanaku, conociendo la Puerta del Sol y el Templo de Kalasasaya. Una inmersión profunda en la historia precolombina.",

    coords: { lat: -16.5557, lng: -68.6797 },
  }),
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getPackages() {
  await delay(500); // Simula el tiempo de respuesta de la API
  return MOCK_PACKAGES;
}

export async function getPackageById(id) {
  await delay(300);
  const paquete = MOCK_PACKAGES.find((p) => p.id === id);
  if (!paquete) {
    throw new Error(`Paquete con ID ${id} no encontrado.`);
  }
  return paquete;
}
