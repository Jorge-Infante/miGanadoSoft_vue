<template>
  <div>
    <v-data-iterator :items="hato" :items-per-page="itemsPerPage">
      <template v-slot:default="{ items }">
        <v-row>
          <v-col v-for="(item, i) in items" :key="i" cols="12" sm="4" xl="3">
            <v-container>
              <v-sheet border>
                <v-row class="d-flex justify-end">
                  <v-col cols="2">
                    <v-btn icon size="x-small" variant="flat"
                      ><v-icon>mdi-eye</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
                <v-img
                  :gradient="`to top right, rgba(255, 255, 255, .1), rgba(${item.raw.color}, .15)`"
                  :src="item.raw.image"
                  height="150"
                  contain
                ></v-img>

                <v-list-item
                  :title="item.raw.name"
                  density="comfortable"
                  lines="two"
                  subtitle="Lorem ipsum dil orei namdie dkaf"
                >
                  <template v-slot:title>
                    <strong class="text-h6">
                      {{ item.raw.name }}
                    </strong>
                  </template>
                </v-list-item>

                <v-table class="text-caption" density="compact">
                  <tbody>
                    <tr align="right">
                      <th>Numero:</th>
                      <td>{{ item.raw.number }}</td>
                    </tr>
                    <tr align="right">
                      <th>Peso (Kg):</th>
                      <td>{{ item.raw.weight }}</td>
                    </tr>

                    <tr align="right">
                      <th>Especie:</th>

                      <td>{{ item.raw.species.name }}</td>
                    </tr>
                    <tr align="right">
                      <th>Raza:</th>

                      <td>{{ item.raw.breed.name }}</td>
                    </tr>
                    <tr align="right">
                      <th>Estado:</th>

                      <td>{{ item.raw.status.name }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-sheet>
            </v-container>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-fab
      :style="{
        position: 'fixed',
        bottom: '30px',
        right: '70px',
        zIndex: 1000,
      }"
      size="small"
      icon
      color="primary"
      @click="handleAddAnimal"
    >
      <v-icon>mdi-plus</v-icon>
    </v-fab>
  </div>
  <animalForm ref="animalFormRef" />
</template>

<script>
import { mapState } from "vuex";
import animalForm from "../components/animal/animalForm.vue";
export default {
  name: "animalHato",
  components: { animalForm },
  data() {
    return {
      itemsPerPage: 5,
    };
  },
  computed: {
    ...mapState("animal_store", ["hato"]),
  },
  created() {
    this.getHato();
  },
  methods: {
    async getHato() {
      const payload = {
        nameState: "hato",
        key: "id",
        module: "animal_store",
        mutations: ["setState"],
        url: `animals/`,
      };
      this.$store.dispatch("global_store/setState", payload);
    },
    handleAddAnimal(){
      this.$refs.animalFormRef.handleOpenDialog()
    }
  },
  watch: {
    hato(newValue) {
      console.log(newValue);
    },
  },
};
</script>

<style></style>
