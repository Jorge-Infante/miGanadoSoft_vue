<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :title="barTitle" density="compact" nav>
      <v-tabs>
        <v-tab v-for="(item, index) in barOptions" :key="index">{{
          item.title
        }}</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer v-if="showDrawer">
      <v-tabs color="primary" direction="vertical">
        <v-tab v-for="(item, index) in drawOptions" :key="index">{{
          item.title
        }}</v-tab>
      </v-tabs>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    barTitle: { type: String },
    showDrawer: { type: Boolean },
    barOptions: { type: Array },
    drawOptions: { type: Array },
  },
  created() {
    console.log("showdrawer", this.barOptions);
  },
};
</script>

<style></style>
