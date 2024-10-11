<template>
  <v-btn @click="test"></v-btn>
  <v-data-iterator :items="hato" :items-per-page="itemsPerPage">
    <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
      <h1
        class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center"
      >
        <div class="text-truncate">Mis animales</div>

        <div class="d-flex align-center">
          <v-btn class="me-8" variant="text" @click="onClickSeeAll">
            <span class="text-decoration-underline text-none">See all</span>
          </v-btn>

          <div class="d-inline-flex">
            <v-btn
              :disabled="page === 1"
              class="me-2"
              icon="mdi-arrow-left"
              size="small"
              variant="tonal"
              @click="prevPage"
            ></v-btn>

            <v-btn
              :disabled="page === pageCount"
              icon="mdi-arrow-right"
              size="small"
              variant="tonal"
              @click="nextPage"
            ></v-btn>
          </div>
        </div>
      </h1>
    </template>

    <template v-slot:default="{ items }">
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" sm="4" xl="3">
          <v-sheet border>
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

            <!-- <v-table class="text-caption" density="compact">
              <tbody>
                <tr align="right">
                  <th>DPI:</th>

                  <td>{{ item.raw.dpi }}</td>
                </tr>

                <tr align="right">
                  <th>Buttons:</th>

                  <td>{{ item.raw.buttons }}</td>
                </tr>

                <tr align="right">
                  <th>Weight:</th>

                  <td>{{ item.raw.weight }}</td>
                </tr>

                <tr align="right">
                  <th>Wireless:</th>

                  <td>{{ item.raw.wireless ? "Yes" : "No" }}</td>
                </tr>

                <tr align="right">
                  <th>Price:</th>

                  <td>${{ item.raw.price }}</td>
                </tr>
              </tbody>
            </v-table> -->
          </v-sheet>
        </v-col>
      </v-row>
    </template>

    <!-- <template v-slot:footer="{ page, pageCount }">
      <v-footer
        class="justify-space-between text-body-2 mt-4"
        color="surface-variant"
      >
        Total mice: {{ mice.length }}

        <div>Page {{ page }} of {{ pageCount }}</div>
      </v-footer>
    </template> -->
  </v-data-iterator>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "animalHato",
  data() {
    return {
      itemsPerPage:2
    };
  },
  computed: {
    ...mapState("animal_store", ["hato"]),
  },
  methods: {
    test() {
      const payload = {
        nameState: "hato",
        key: "id",
        module: "animal_store",
        mutations: ["setState"],
        url: `animals/`,
      };
      this.$store.dispatch("global_store/setState", payload);
    },
  },
  watch: {
    hato(newValue) {
      console.log(newValue);
    },
  },
};
</script>

<style></style>
