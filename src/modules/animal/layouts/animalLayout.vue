<template>
  <miGanadoSoftLayout
    barTitle="Auth"
    :showDrawer="true"
    :barOptions="barOptions"
    :drawOptions="drawOptions"
  />
</template>

<script>
import miGanadoSoftLayout from "@/modules/miGanadoSoft/layouts/miGanadoSoftLayout.vue";
export default {
  data() {
    return {
      barOptions: [
        { title: "opcion1" },
        { title: "opcion2" },
        { title: "opcion2" },
      ],
      drawOptions: [
        { title: "opcion2" },
        { title: "opcion2" },
        { title: "opcion2" },
      ],
    };
  },
  components: {
    miGanadoSoftLayout,
  },
};
</script>

<style></style>
