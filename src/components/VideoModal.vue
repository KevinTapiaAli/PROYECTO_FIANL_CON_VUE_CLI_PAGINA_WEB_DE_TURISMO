<template>
  <div v-if="visible" class="modal" @click.self="close">
    <div class="modal-content">
      <button class="close" @click="close">×</button>

      <div class="player">
        <iframe
          v-if="isYoutube"
          :src="video"
          frameborder="0"
          allow="autoplay; fullscreen"
        ></iframe>

        <video v-else :src="video" controls autoplay playsinline></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoModal",
  data() {
    return {
      visible: false,
      video: null,
    };
  },

  computed: {
    isYoutube() {
      return this.video && this.video.includes("youtube");
    },
  },

  methods: {
    show(videoUrl) {
      this.video = videoUrl;
      this.visible = true;
    },

    close() {
      this.visible = false;
      this.video = null;
    },
  },
};
</script>
