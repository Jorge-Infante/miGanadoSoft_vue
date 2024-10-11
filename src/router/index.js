import { createRouter, createWebHistory } from "vue-router";
import authRouter from "@/modules/auth/router";
import animalRouter from "@/modules/animal/router";

const routes = [
  {
    path: "/",
    redirect: "/auth",
  },
  {
    path: "/auth",
    ...authRouter,
  },
  {
    path: "/animal",
    ...animalRouter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
