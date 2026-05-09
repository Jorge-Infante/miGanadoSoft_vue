<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <div class="camera-container">
        <video ref="videoRef" autoplay class="video-feed"></video>
        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="captureImage">
            <v-icon>mdi-camera</v-icon> Tomar foto
          </v-btn>
        </v-card-actions>
        <canvas ref="canvasRef" style="display: none"></canvas>
      </div>

      <v-card-actions class="justify-end">
        <v-btn color="error" @click="closeDialog">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CamaraComponent",
  data: () => ({
    dialog: false,
    mediaStream: null,
    photoData: null,
  }),
  methods: {
    ...mapActions("animal_store", ["addImg"]),
    async openDialog() {
      this.dialog = true;
      await this.$nextTick(); // Esperar a que el DOM se actualice
      this.initializeCamera();
    },

    async initializeCamera() {
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        this.$refs.videoRef.srcObject = this.mediaStream;
      } catch (error) {
        console.error("Error de cámara:", error);
        alert("Se requiere permiso para usar la cámara");
        this.dialog = false;
      }
    },

    captureImage() {
      const video = this.$refs.videoRef;
      const canvas = this.$refs.canvasRef;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0);

      this.photoData = canvas.toDataURL("image/jpeg");
      this.addImg(this.photoData);
    },

    closeDialog() {
      this.dialog = false;
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach((track) => track.stop());
      }
    },
  },
  beforeUnmount() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
    }
  },
};
</script>

<style scoped>
.video-feed {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  background: black;
}

.preview-image {
  margin: 20px auto;
  display: block;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.camera-container {
  padding: 20px;
}
</style>
