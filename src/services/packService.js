// src/services/packService.js

class TravelPackage {
  constructor({ id, title, price, image, video }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
    this.video = video;
  }
}

// IMPORTA LAS IMÁGENES
import imgUyuni from "@/assets/img/imagen10.jpg";
import imgTiticaca from "@/assets/img/imagen13.jpg";
import imgTiwanaku from "@/assets/img/imagen14.jpg";

export const PACKAGES = [
  new TravelPackage({
    id: "uyuni",
    title: "Salar de Uyuni 3D/2N",
    price: 350,
    image: imgUyuni,
    video: "https://www.youtube.com/embed/9y0Kz5-VIDEO_UYUNI",
  }),
  new TravelPackage({
    id: "titicaca",
    title: "Lago Titicaca Full Day",
    price: 90,
    image: imgTiticaca,
    video: "https://www.youtube.com/embed/7Qp6-VIDEO_TITICACA",
  }),
  new TravelPackage({
    id: "tiwanaku",
    title: "Tiwanaku Cultural",
    price: 70,
    image: imgTiwanaku,
    video: "https://www.youtube.com/embed/1x2y-VIDEO_TIWANAKU",
  }),
];
