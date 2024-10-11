export default {
    name: "animal",
    component: () =>
      import(
        /* webpackChunkName: "animalLayout" */ "@/modules/animal/layouts/animalLayout.vue"
      ),
    redirect: "/animal/hato",
    children: [
      {
        path: "hato",
        name: "animal-hato",
        component: () =>
          import(
            /* webpackChunkName: "hatoPage" */ "@/modules/animal/pages/hato.vue"
          ),
      },
    ],
  };
  