<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="750">
      <v-card prepend-icon="mdi-cow" title="Nuevo ejemplar">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" sm="6">
              <v-text-field
                v-model="name"
                label="Nombre"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                v-model="number"
                hint="Número con que marcó el animal"
                label="Número"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-text-field
                hint="Peso estimado del animal (KG)"
                label="Peso"
                v-model="weight"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-file-input
                v-model="image"
                label="File input"
                prepend-icon="mdi-camera"
                variant="filled"
              ></v-file-input>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-file-input
                v-model="file"
                label="File input"
                prepend-icon="mdi-text-box-plus-outline"
                variant="filled"
              ></v-file-input>
            </v-col>

            <v-col cols="12" md="4" sm="6">
              <v-select
                :items="species"
                item-title="name"
                item-value="id"
                v-model="specie_select"
                label="Especie"
                :return-object="false"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                v-model="breed"
                item-title="name"
                item-value="id"
                :items="breeds"
                label="Raza"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="status"
                item-title="name"
                item-value="id"
                :items="statuses"
                :return-object="false"
                label="Estado"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-autocomplete
                v-model="treatment"
                :items="treatments"
                item-title="name"
                item-value="id"
                label="Tratamiento"
                auto-select-first
                :return-object="false"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >* Indica los campos requeridos</small
          >
        </v-card-text>

        <v-divider></v-divider>
        <v-row class="ma-2">
          <v-col cols="12" sm="6" md="6" v-for="(i, idx) in currentPhotos" :key="idx">
            <v-card class="d-flex align-center justify-center">
              <img :src="i" />
            </v-card>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="handleSaveAnimal"
          ></v-btn>
          <v-btn variant="tonal" @click="handleOpenCamara"> 📸 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <camara ref="camaraComponent"></camara>
</template>
<script>
import { mapActions, mapState } from "vuex";
import camara from "@/modules/animal/components/medios/camara.vue";
export default {
  data: () => ({
    dialog: false,
    name: null,
    number: null,
    weight: null,
    file: null,
    image: null,
    breed: null,
    specie_select: null,
    status: null,
    treatment: [],
  }),
  components: {
    camara,
  },
  created() {},
  mounted() {
    console.log("MONTANDO");
  },
  computed: {
    ...mapState("animal_store", [
      "species",
      "breeds",
      "treatments",
      "statuses",
      "currentPhotos",
    ]),
    formData() {
      return {
        name: this.name,
        number: this.number,
        weight: this.weight,
        file: this.file,
        image: this.image,
        breed: this.breed,
        species: this.specie_select,
        status: this.status,
        treatment: [...this.treatment].map((item) => parseInt(item, 10)),
      };
    },
  },
  methods: {
    ...mapActions("animal_store", ["postAnimal"]),
    ...mapActions("global_store", ["setState"]),
    handleOpenCamara() {
      this.$refs.camaraComponent.openDialog();
    },
    handleOpenDialog() {
      this.dialog = true;
      this.getSpecies();
      this.getStatuses();
      this.getBreeds();
      this.getTreatments();
    },
    handleSaveAnimal() {
      const params = { data: this.formData, url: `animals/` };
      this.postAnimal(params);
    },
    async getStatuses() {
      const payload = {
        nameState: "statuses",
        key: "id",
        module: "animal_store",
        mutations: ["setState"],
        url: `status/`,
      };
      await this.setState(payload);
    },
    async getTreatments() {
      const payload = {
        nameState: "treatments",
        key: "id",
        module: "animal_store",
        mutations: ["setState"],
        url: `treatments/`,
      };
      await this.setState(payload);
    },
    async getSpecies() {
      const payload = {
        nameState: "species",
        key: "id",
        module: "animal_store",
        mutations: ["setState"],
        url: `species/`,
      };
      await this.setState(payload);
    },
    async getBreeds() {
      const payload = {
        nameState: "breeds",
        key: "id",
        module: "animal_store",
        mutations: ["setState"],
        url: `breeds/`,
      };
      await this.setState(payload);
    },
  },
  watch: {
    formData(newValue) {
      console.log("New Value Form: ", newValue);
    },
    currentPhotos(newValue) {
      console.log("new value: ", newValue);
    },
  },
};
</script>
