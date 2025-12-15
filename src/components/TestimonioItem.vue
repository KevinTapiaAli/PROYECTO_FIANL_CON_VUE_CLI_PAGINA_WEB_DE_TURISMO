<template>
  <article class="testimonial bg-primary">
    <img :src="imagen" :alt="alt" loading="lazy" width="100" height="100" />

    <p>
      “{{ texto }}” —
      <strong>{{ autor }}</strong>
    </p>
  </article>
</template>

<script>
export default {
  name: "TestimonioItem",

  props: {
    imagen: { type: String, required: true },
    alt: { type: String, required: true },
    texto: { type: String, required: true },
    autor: { type: String, required: true },
  },
};
</script>

<style scoped>
/* usa tu CSS global */
</style>
